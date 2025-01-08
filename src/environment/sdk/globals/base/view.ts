import { Table } from './table'
import { Field } from './field'
import { Record } from './record'
import { RecordQueryResult } from './record-query-result'
import type { FixtureView } from '../globals'

type ViewType = 'grid' | 'form' | 'calendar' | 'gallery' | 'kanban'

/**
 * A view belonging to a table in your base. Each table has at least one view.
 */
class View {
  private _view: FixtureView
  private _table: Table
  private _recordIds: string[]

  constructor(view: FixtureView, table: Table) {
    this._view = view
    this._table = table
    this._recordIds = view.records
      ? view.records.map((record: { id: string }) => record.id)
      : []
  }

  /**
   * The unique ID of this view.
   */
  get id(): string {
    return this._view.id
  }

  /**
   * The name of the view.
   */
  get name(): string {
    return this._view.name
  }

  /**
   * The type of the view, such as Grid, Calendar, or Kanban.
   */
  get type(): ViewType {
    return this._view.type
  }

  /**
   * The URL for the view. You can visit this URL in the browser to be taken to the view in the Airtable UI.
   */
  get url(): string {
    return `https://airtable.com/${__base.id}/${this._table.id}/${this.id}`
  }

  /**
   * Select a single record from the view. This action is asynchronous: you must add await before each call to this method. If the specified record cannot be found, null will be returned.
   *
   * @param recordId - The ID of the record to select.
   * @param options - Optional. The options for the query.
   * @param options.fields - Optional. Generally, it's a good idea to load as little data into your script as possible - Airtable bases can get pretty big. The fields option lets you make sure that only data relevant to you is loaded. You can specify fields by passing in a Field, ID, or name. Leaving out this option is discouraged, but will be supported for now. Before this changes, we will post a potential deprecation timeline. Note: primary field is not included by default.
   */
  selectRecordAsync(
    recordId: string,
    options?: {
      fields?: Array<Field | string>
    }
  ): Promise<Record | null> {
    return new Promise((resolve, reject) => {
      if (!this._recordIds.includes(recordId)) {
        resolve(null)
        return
      }
      this._table
        .selectRecordAsync(recordId, options)
        .then((records) => resolve(records))
        .catch((error) => reject(error))
    })
  }

  /**
   * Select records from the view. This action is asynchronous: you must add await before each call to this method.
   *
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
      this._table
        .selectRecordsAsync(options)
        .then((result) => {
          result._filterRecordsById(this._recordIds)
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export { View, ViewType }
