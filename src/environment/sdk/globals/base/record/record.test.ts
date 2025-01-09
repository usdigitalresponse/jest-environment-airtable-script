import { Record } from './index'
import { Field } from '../field'

describe('Record', () => {
  const fields: Field[] = [
    new Field({ id: 'fld1', name: 'Field 1' }),
    new Field({ id: 'fld2', name: 'Field 2' }),
  ]

  const data = {
    id: 'rec1',
    cellValuesByFieldId: {
      fld1: 'Value 1',
      fld2: 'Value 2',
    },
  }

  let record: Record

  beforeEach(() => {
    record = new Record(data, fields)
  })

  it('should create a record with correct id and name', () => {
    expect(record.id).toBe('rec1')
    expect(record.name).toBe('Value 1')
  })

  it('should get cell value by a Field class', () => {
    expect(record.getCellValue(fields[0])).toBe('Value 1')
    expect(record.getCellValue(fields[1])).toBe('Value 2')
  })

  it('should get cell value by field id', () => {
    expect(record.getCellValue('fld1')).toBe('Value 1')
    expect(record.getCellValue('fld2')).toBe('Value 2')
  })

  it('should get cell value by field name', () => {
    expect(record.getCellValue('Field 1')).toBe('Value 1')
    expect(record.getCellValue('Field 2')).toBe('Value 2')
  })

  it('should get cell value as string', () => {
    expect(record.getCellValueAsString('fld1')).toBe('Value 1')
    expect(record.getCellValueAsString('fld2')).toBe('Value 2')
  })

  it('should throw error if field not found', () => {
    expect(() => record.getCellValue('fld3')).toThrow(
      'No field matching "fld3" found in table'
    )
  })
})
