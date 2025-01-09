import { Field } from '../field'
import { renderCellAsString } from './render-cell-as-string'
import { FixtureRecord } from '../../globals'

/**
 * A record belonging to a table in your base.
 */
class Record {
  /**
   * The unique ID of this record.
   */
  id: string
  /**
   * The raw cell values of this record.
   */
  private _cellValues: { [key: string]: unknown }

  /**
   * The fields in this table. Used to look up field
   * IDs and names when getting cell values.
   */
  private _fields: Field[]

  /**
   * A list of fields that can actually be accessed. This is
   * used to simulate fields being limited by table.selectRecordsAsync.
   */
  private _accessibleFields: Field[]

  constructor(data: FixtureRecord, fields: Field[]) {
    this.id = data.id
    this._cellValues = data.cellValuesByFieldId
    this._fields = fields
    this._accessibleFields = fields
  }

  get name(): string {
    if (!this._fields || !this._fields[0]) {
      return ''
    }
    return this.getCellValueAsString(this._fields[0])
  }

  /**
   * Gets a field ID based on whether an item is a Field object, field ID, or field name.
   *
   * @param fieldOrFieldIdOrFieldName - The field, field ID, or field name to get the ID of.
   */
  private getFieldId(fieldOrFieldIdOrFieldName: Field | string): string {
    if (fieldOrFieldIdOrFieldName instanceof Field) {
      return fieldOrFieldIdOrFieldName.id
    }
    const field = this._fields.find(
      (field: Field) =>
        field.id === fieldOrFieldIdOrFieldName ||
        field.name === fieldOrFieldIdOrFieldName
    )
    if (!field) {
      throw new Error(
        `No field matching "${fieldOrFieldIdOrFieldName}" found in table`
      )
    }
    return field.id
  }

  /**
   * Gets a specific cell value in this record.
   *
   * @param fieldOrFieldIdOrFieldName - The field, field ID, or field name of the cell value to get.
   */
  getCellValue(fieldOrFieldIdOrFieldName: Field | string): unknown {
    const fieldId = this.getFieldId(fieldOrFieldIdOrFieldName)
    if (
      this._accessibleFields.length &&
      !this._accessibleFields.some((field) => field.id === fieldId)
    ) {
      throw new Error(
        `Field "${fieldId}" isn't in this record. Make sure it was included in the QueryResult this record comes from`
      )
    }
    return this._cellValues[fieldId]
  }

  /**
   * Gets a specific cell value in this record, formatted as a string.
   *
   * @param fieldOrFieldIdOrFieldName - The field, field ID, or field name of the cell value to get.
   * @todo - Field types are rendered differently - need to implement this
   */
  getCellValueAsString(fieldOrFieldIdOrFieldName: Field | string): string {
    const value = this.getCellValue(fieldOrFieldIdOrFieldName)
    const fieldId = this.getFieldId(fieldOrFieldIdOrFieldName)
    const field = this._fields.find((field) => field.id === fieldId)
    return value === null || !field ? '' : renderCellAsString(field, value)
  }

  /**
   * Limits the fields that can be accessed on this record. Used to simulate fields being limited by table.selectRecordsAsync.
   * @param accessibleFields A list of fields that can actually be accessed.
   */
  _setAccessibleFields(accessibleFields: Field[]) {
    if (!globalThis.__isAirtableScriptTestEnvironment) {
      throw new Error(
        'This method is only available in the Airtable Scripting Jest test environment'
      )
    }
    this._accessibleFields = accessibleFields
  }

  /**
   * Returns the raw cell values of this record.
   */
  _getCellValues() {
    if (!globalThis.__isAirtableScriptTestEnvironment) {
      throw new Error(
        'This method is only available in the Airtable Scripting Jest test environment'
      )
    }
    return this._cellValues
  }

  /**
   * Sets the value of a field.
   */
  _setFieldValue(fieldId: string, value: unknown) {
    if (!globalThis.__isAirtableScriptTestEnvironment) {
      throw new Error(
        'This method is only available in the Airtable Scripting Jest test environment'
      )
    }
    this._cellValues[fieldId] = value
  }
}

export { Record }
