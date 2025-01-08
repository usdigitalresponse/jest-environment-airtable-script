import { allowedCreateFieldTypes } from './allowed-create-field-types'
import { RecordQueryResult } from './record-query-result'
import { Field, FieldType } from './field'
import { View } from './view'
import { Record } from './record'
import { pascalCase } from '../../lib/pascal-case'
import { uuid } from '../../lib/uuid'
import { MutationTypes } from '../../../mutation-types'
import type {
  FixtureTable,
  FixtureField,
  FixtureRecord,
  FixtureView,
} from '../globals'

class Table {
  private _table: { id: string; name: string; description: string | null }
  private _fields: Field[] = []
  private _records: Record[] = []
  private _views: View[] = []

  constructor(table: FixtureTable) {
    this._table = {
      id: table.id,
      name: table.name,
      description: table.description,
    }
    this._fields = (table.fields ?? []).map(
      (field: FixtureField) => new Field(field)
    )

    this._records = table.records
      ? table.records.map(
          (record: FixtureRecord) => new Record(record, this._fields || [])
        )
      : []

    this._views = table.views
      ? table.views.map((view: FixtureView) => new View(view, this))
      : []
  }

  get id() {
    return this._table.id
  }

  /**
   * The description of this table, if it has one.
   */
  get description() {
    return this._table.description
  }

  /**
   * The name of the table.
   */
  get name(): string {
    return this._table.name
  }

  /**
   * The URL for the table. You can visit this URL in the browser to be taken to the table in the Airtable UI.
   */
  get url(): string {
    return `https://airtable.com/${__base.id}/${this._table.id}`
  }

  /**
   * The fields in this table. The order is arbitrary, since fields are only ordered in the context of a specific view.
   */
  get fields(): Field[] {
    return this._fields || []
  }

  /**
   * The views in this table.
   */
  get views(): View[] {
    return this._views
  }

  /**
   * Returns the raw cell values of this record.
   */
  _getRawRecords(): Record[] {
    if (!globalThis.__isAirtableScriptTestEnvironment) {
      throw new Error(
        'This method is only available in the Airtable Scripting Jest test environment'
      )
    }
    return this._records
  }

  /**
   * Get a field in the table according to its id or name.
   *
   * @param idOrName The id or name of the field to get.
   */
  getField(idOrName: string): Field {
    const field = (this._fields ?? []).find(
      (field: Field) => field.id === idOrName || field.name === idOrName
    )
    if (!field) {
      throw new Error(
        `No field matching "${idOrName}" found in table "${this._table.name}"`
      )
    }
    return field
  }

  /**
   * Get a view in the table according to its id or name.
   *
   * @param idOrName The id or name of the view to get.
   */
  getView(idOrName: string): View {
    const view = this._views.find(
      (view: View) => view.id === idOrName || view.name === idOrName
    )
    if (!view) {
      throw new Error(
        `No view matching "${idOrName}" found in table "${this._table.name}"`
      )
    }
    return view
  }

  /**
   * Creates a new field in the table.
   *
   * @param name The name of the field.
   * @param type The type of the field.
   * @param options Additional options for the field, depending on the type.
   * @param description The description of the field.
   */
  async createFieldAsync(
    name: string,
    type: FieldType,
    options?: { [key: string]: unknown } | null,
    description?: string | null
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!allowedCreateFieldTypes.includes(type)) {
        reject(new Error(`Invalid field type: ${type}`))
        return
      }
      if ((this._fields ?? []).find((field: Field) => field.name === name)) {
        reject(
          new Error(
            `Can't create or update field: field with name '${name}' already exists`
          )
        )
        return
      }
      const id = `fld${pascalCase(name)}`
      // @ts-ignore
      this._fields.push({
        id,
        name,
        type,
        options: options || null,
        description: description || null,
      })
      __mutations.push({
        type: MutationTypes.CREATE_FIELD,
        args: {
          tableId: this.id,
          fieldId: id,
          name,
          type,
          options,
          description,
        },
      })
      resolve(id)
    })
  }

  /**
   * Select records from the table. This action is asynchronous: you must add await before each call to this method.
   *
   * @todo - Reject if invalid field is passed in sorts or fields
   * @param options - Optional. The options for the query.
   * @param options.sorts - Optional. Pass an array of sorts to control the order of records within the query result. The first sort in the array has the highest priority. If you don't specify sorts, the query result will use an arbitrary (but stable) order.
   * @param options.fields - Optional. Generally, it's a good idea to load as little data into your script as possible - Airtable bases can get pretty big. The fields option lets you make sure that only data relevant to you is loaded. You can specify fields by passing in a Field, ID, or name. Leaving out this option is discouraged, but will be supported for now. Before this changes, we will post a potential deprecation timeline. Note: primary field is not included by default.
   * @param options.recordIds - Optional. The IDs of the records to return. If provided, only the records identified in this array will be returned. If none of the IDs are found, an empty result will be returned. A maximum of 100 records can be requested at a time.
   */
  selectRecordsAsync(options?: {
    sorts?: Array<{
      field: Field | string
      direction?: 'asc' | 'desc'
    }>
    fields?: Array<Field | string>
    recordIds?: Array<string>
  }): Promise<RecordQueryResult> {
    return new Promise((resolve, reject) => {
      const selectedRecords =
        options && options.recordIds
          ? this._records.filter((record: Record) =>
              options.recordIds!.includes(record.id)
            )
          : [...this._records]

      if (options && options.sorts) {
        for (const sort of options.sorts) {
          if (typeof sort.field === 'string' && !this.getField(sort.field)) {
            reject(
              new Error(
                `No field matching "${sort.field}" found in table "${this.name}"`
              )
            )
            return
          }
          if (
            typeof sort.direction === 'string' &&
            sort.direction !== 'asc' &&
            sort.direction !== 'desc'
          ) {
            reject(
              new Error(
                `Invalid sort direction: "${sort.direction}". Must be "asc" or "desc"`
              )
            )
            return
          }
        }
        selectedRecords.sort((a: Record, b: Record) => {
          for (const sort of options.sorts!) {
            const field =
              typeof sort.field === 'string'
                ? this.getField(sort.field)
                : sort.field
            const aValue = a.getCellValueAsString(field.id)
            const bValue = b.getCellValueAsString(field.id)
            if (aValue < bValue) return sort!.direction === 'desc' ? 1 : -1
            if (aValue > bValue) return sort!.direction === 'desc' ? -1 : 1
          }
          return 0
        })
      }
      if (options && options.fields) {
        const availableFields = options.fields.map((field) =>
          typeof field === 'string' ? this.getField(field) : field
        )
        selectedRecords.forEach((record) => {
          record._setAccessibleFields(availableFields)
        })
      }

      resolve(new RecordQueryResult(selectedRecords))
    })
  }

  /**
   * Select a single record from the table. This action is asynchronous: you must add await before each call to this method. If the specified record cannot be found, null will be returned.
   *
   * @param recordId - The ID of the record to select.
   * @param options - Optional. The options for the query.
   * @param options.fields - Optional. Generally, it's a good idea to load as little data into your script as possible - Airtable bases can get pretty big. The fields option lets you make sure that only data relevant to you is loaded. You can specify fields by passing in a Field, ID, or name. Leaving out this option is discouraged, but will be supported for now. Before this changes, we will post a potential deprecation timeline. Note: primary field is not included by default.
   */
  selectRecordAsync(
    recordId: string,
    options?: { fields?: Array<Field | string> }
  ): Promise<Record | null> {
    return new Promise((resolve) => {
      const record = this._records.find((record) => record.id === recordId)
      if (!record) {
        resolve(null)
        return
      }
      if (options && options.fields) {
        const availableFields = options.fields.map((field) =>
          typeof field === 'string' ? this.getField(field) : field
        )
        record._setAccessibleFields(availableFields)
      }
      resolve(record)
    })
  }

  /**
   * Create a new record in the table.
   *
   * @param data - The data for the new record.
   */
  createRecordAsync(fields: {
    [fieldNameOrId: string]: unknown
  }): Promise<string> {
    return new Promise((resolve, reject) => {
      const recordId = `rec${uuid()}`
      const cellValuesByFieldId = Object.entries(fields).reduce(
        (acc, [fieldNameOrId, value]) => {
          const field = this.getField(fieldNameOrId)
          if (!field) {
            reject(
              new Error(
                `No field matching "${fieldNameOrId}" found in table "${this._table.name}"`
              )
            )
            return acc
          }
          acc[field.id] = value
          return acc
        },
        {} as { [fieldId: string]: unknown }
      )
      const record = new Record(
        {
          id: recordId,
          cellValuesByFieldId,
        },
        this._fields || []
      )
      this._records.push(record)
      resolve(recordId)
      __mutations.push({
        type: MutationTypes.CREATE_RECORD,
        args: {
          tableId: this.id,
          recordId,
          cellValuesByFieldId,
        },
      })
    })
  }

  /**
   * Creates multiple new records with the specified cell values. See cell values & field options for the cell value format for each field type.
   */
  createRecordsAsync(
    records: Array<{ [fieldNameOrId: string]: unknown }>
  ): Promise<string[]> {
    return Promise.all(records.map((record) => this.createRecordAsync(record)))
  }

  /**
   * Updates cell values for a record. See cell values & field options for the cell value format for each field type.
   *
   * @param recordOrRecordId -	The record to update.
   * @param fields - An object mapping field names or IDs to the updated cell values for those fields.
   */
  updateRecordAsync(
    recordOrRecordId: Record | string,
    fields: { [fieldNameOrId: string]: unknown }
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const recordId =
        typeof recordOrRecordId === 'string'
          ? recordOrRecordId
          : recordOrRecordId.id
      const recordKey = this._records.findIndex(
        (record) => record.id === recordId
      )
      if (recordKey === -1) {
        reject(new Error(`No record matching "${recordId}" found`))
        return
      }
      const mutationFields: { [key: string]: unknown } = {}
      Object.entries(fields).forEach(([fieldNameOrId, value]) => {
        const field = this.getField(fieldNameOrId)
        if (!field) {
          reject(
            new Error(
              `No field matching "${fieldNameOrId}" found in table "${this._table.name}"`
            )
          )
          return
        }
        this._records[recordKey]._setFieldValue(field.id, value)
        mutationFields[field.id] = value
      })
      __mutations.push({
        type: MutationTypes.SET_MULTIPLE_RECORD_CELL_VALUES,
        args: {
          tableId: this.id,
          recordId,
          cellValuesByFieldId: mutationFields,
        },
      })
      resolve()
    })
  }

  /**
   * @TODO _ THESE SHOULD BE LOGGED IN A GENERAL "MUTATIONS" OBJECT FOR RETURNING TO TESTS
   */
  updateRecordsAsync(
    records: Array<{
      id: string
      fields: { [fieldNameOrId: string]: unknown }
    }>
  ): Promise<void[]> {
    return Promise.all(
      records.map((record) => this.updateRecordAsync(record.id, record.fields))
    )
  }

  /**
   * Delete a single record.
   *
   * @param recordOrRecordId - The record to delete.
   */
  deleteRecordAsync(recordOrRecordId: Record | string): Promise<void> {
    return new Promise((resolve, reject) => {
      const recordId =
        typeof recordOrRecordId === 'string'
          ? recordOrRecordId
          : recordOrRecordId.id
      const recordKey = this._records.findIndex(
        (record) => record.id === recordId
      )
      if (recordKey === -1) {
        reject(new Error(`No record matching "${recordId}" found`))
        return
      }
      this._records.splice(recordKey, 1)
      __mutations.push({
        type: MutationTypes.DELETE_RECORD,
        args: {
          tableId: this.id,
          recordId,
        },
      })
      resolve()
    })
  }

  /**
   * Delete multiple records.
   */
  deleteRecordsAsync(recordIds: Array<Record | string>): Promise<void[]> {
    return Promise.all(
      recordIds.map((recordId) => this.deleteRecordAsync(recordId))
    )
  }
}

export { Table }
