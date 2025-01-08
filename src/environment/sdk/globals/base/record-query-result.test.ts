import { RecordQueryResult } from './record-query-result'

describe('RecordQueryResult', () => {
  it('should return the IDs of all the records', () => {
    const records = [
      { id: '1', name: 'Record 1' },
      { id: '2', name: 'Record 2' },
    ]
    const recordQueryResult = new RecordQueryResult(records)
    expect(recordQueryResult.recordIds).toEqual(['1', '2'])
  })

  describe('getRecord', () => {
    const records = [
      { id: '1', name: 'Record 1' },
      { id: '2', name: 'Record 2' },
    ]
    let recordQueryResult: RecordQueryResult

    beforeEach(() => {
      recordQueryResult = new RecordQueryResult(records)
    })

    it('should return the record with the given id', () => {
      const record = recordQueryResult.getRecord('1')
      expect(record.id).toEqual('1')
    })

    it('should throw an error if the record does not exist', () => {
      expect(() => recordQueryResult.getRecord('3')).toThrowError(
        'No record matching "3" found'
      )
    })

    describe('_filterRecordsById', () => {
      const records = [
        { id: '1', name: 'Record 1' },
        { id: '2', name: 'Record 2' },
        { id: '3', name: 'Record 3' },
      ]
      let recordQueryResult: RecordQueryResult

      beforeEach(() => {
        recordQueryResult = new RecordQueryResult(records)
      })

      it('should filter out records that do not match the given IDs', () => {
        recordQueryResult._filterRecordsById(['1', '3'])
        expect(recordQueryResult.records).toEqual([
          { id: '1', name: 'Record 1' },
          { id: '3', name: 'Record 3' },
        ])
      })

      it('should remove all records if no matching IDs are provided', () => {
        recordQueryResult._filterRecordsById(['4', '5'])
        expect(recordQueryResult.records).toEqual([])
      })

      it('should keep all records if all IDs match', () => {
        recordQueryResult._filterRecordsById(['1', '2', '3'])
        expect(recordQueryResult.records).toEqual(records)
      })
    })
  })
})
