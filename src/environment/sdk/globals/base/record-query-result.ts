import type { Record } from './record'

class RecordQueryResult {
  recordIds: string[]
  records: Record[]

  constructor(records: Record[]) {
    this.recordIds = records.map((record) => record.id)
    this.records = records
  }

  /**
   * Get a specific record in the query result, or throw if that record doesn't exist or was filtered out.
   */
  getRecord(recordId: string): Record {
    const record = this.records.find((record) => record.id === recordId)
    if (!record) {
      throw new Error(`No record matching "${recordId}" found`)
    }
    return record
  }

  /**
   * Removes records from the query result that don't have matching IDs.
   */
  _filterRecordsById(recordIds: string[]): void {
    this.records = this.records.filter((record) =>
      recordIds.includes(record.id)
    )
  }
}

export { RecordQueryResult }
