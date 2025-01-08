import { renderCellAsString } from './render-cell-as-string'
import { Field } from '../field'

describe('renderCellAsString', () => {
  it('should render barcode field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'barcode',
      options: {},
    })
    const value = { text: '12345' }
    expect(renderCellAsString(field, value)).toBe('12345')
  })

  it('should render button field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'button',
      options: {},
    })
    const value = { label: 'Click me', url: 'http://example.com' }
    expect(renderCellAsString(field, value)).toBe('http://example.com')
  })

  it('should render checkbox field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'checkbox',
      options: {},
    })
    expect(renderCellAsString(field, true)).toBe('checked')
    expect(renderCellAsString(field, false)).toBe('')
  })

  it('should render multipleRecordLinks field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'multipleRecordLinks',
      options: {},
    })
    const value = [{ name: 'Record 1' }, { name: 'Record 2' }]
    expect(renderCellAsString(field, value)).toBe('Record 1, Record 2')
  })

  it('should render createdBy field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'createdBy',
      options: {},
    })
    const value = { name: 'User' }
    expect(renderCellAsString(field, value)).toBe('User')
  })

  describe('createdTime', () => {
    it('should render createdTime field in date format', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'createdTime',
        options: {
          result: {
            type: 'date',
            options: {
              dateFormat: { name: 'us', format: 'M/D/YYYY' },
            },
          },
        },
      })
      const value = '2023-10-01T08:45:00.00Z'
      expect(renderCellAsString(field, value)).toBe('10/1/2023')
    })

    it('should render createdTime field in US format with 12 hour time format', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'createdTime',
        options: {
          result: {
            type: 'dateTime',
            options: {
              dateFormat: { name: 'us', format: 'M/D/YYYY' },
              timeFormat: { name: '12hour', format: 'h:mma' },
              timeZone: 'utc',
            },
          },
        },
      })
      const value = '2023-10-01T08:45:00.00Z'
      expect(renderCellAsString(field, value)).toBe('10/1/2023 8:45am')
    })
  })

  describe('currency', () => {
    it('should render currency field with a precision of 4', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'currency',
        options: { symbol: '$', precision: 4 },
      })
      const value = 123.4567
      expect(renderCellAsString(field, value)).toBe('$123.4567')
    })

    it('should render currency field with a precision of 0', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'currency',
        options: { symbol: '$', precision: 0 },
      })
      const value = 123.4567
      expect(renderCellAsString(field, value)).toBe('$123')
    })

    it('should render value as is if precision is not set', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'currency',
        options: { symbol: '$' },
      })
      const value = 123.456
      expect(renderCellAsString(field, value)).toBe('$123.46')
    })
  })

  describe('date', () => {
    it('should render date field in US format', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'date',
        options: {
          dateFormat: { name: 'us', format: 'M/D/YYYY' },
        },
      })
      const value = '2023-10-01'
      expect(renderCellAsString(field, value)).toBe('10/1/2023')
    })

    it('should render date field in European format', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'date',
        options: {
          dateFormat: { name: 'european', format: 'D/M/YYYY' },
        },
      })
      const value = '2023-10-01'
      expect(renderCellAsString(field, value)).toBe('1/10/2023')
    })

    it('should render date field in friendly format', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'date',
        options: {
          dateFormat: { name: 'friendly', format: 'LL' },
        },
      })
      const value = '2023-10-01'
      expect(renderCellAsString(field, value)).toBe('October 1, 2023')
    })
  })

  describe('dateTime', () => {
    it('should render dateTime field in US format with 12 hour time format', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'dateTime',
        options: {
          dateFormat: { name: 'us', format: 'M/D/YYYY' },
          timeFormat: { name: '12hour', format: 'h:mma' },
          timeZone: 'utc',
        },
      })
      const value = '2023-10-01T08:45:00.00Z'
      expect(renderCellAsString(field, value)).toBe('10/1/2023 8:45am')
    })

    it('should render dateTime field in US format with 24 hour time format', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'dateTime',
        options: {
          dateFormat: { name: 'us', format: 'M/D/YYYY' },
          timeFormat: { name: '24hour', format: 'HH:mm' },
          timeZone: 'utc',
        },
      })
      const value = '2023-10-01T08:45:00.00Z'
      expect(renderCellAsString(field, value)).toBe('10/1/2023 08:45')
    })

    it('should handle non-UTC timezones', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'dateTime',
        options: {
          dateFormat: { name: 'us', format: 'M/D/YYYY' },
          timeFormat: { name: '24hour', format: 'HH:mm' },
          timeZone: 'Pacific/Honolulu',
        },
      })
      const value = '2023-10-01T08:45:00.00Z'
      expect(renderCellAsString(field, value)).toBe('9/30/2023 22:45')
    })
  })

  describe('duration', () => {
    it('should render duration with seconds', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'duration',
        options: {
          durationFormat: 'h:mm:ss',
        },
      })
      const value = 30
      expect(renderCellAsString(field, value)).toBe('0:00:30')
    })

    it('should render duration with minutes', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'duration',
        options: {
          durationFormat: 'h:mm',
        },
      })
      const value = 1800
      expect(renderCellAsString(field, value)).toBe('0:30')
    })

    it('should render duration with hours', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'duration',
        options: {
          durationFormat: 'h:mm:ss',
        },
      })
      const value = 3600 + 30
      expect(renderCellAsString(field, value)).toBe('1:00:30')
    })
  })

  it('should render externalSyncSource field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'externalSyncSource',
      options: {},
    })
    const value = { name: 'External Source' }
    expect(renderCellAsString(field, value)).toBe('External Source')
  })

  it('should render lastModifiedBy field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'lastModifiedBy',
      options: {},
    })
    const value = { name: 'User' }
    expect(renderCellAsString(field, value)).toBe('User')
  })

  describe('lastModifiedTime', () => {
    it('should render lastModifiedTime field in date format', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'lastModifiedTime',
        options: {
          result: {
            type: 'date',
            options: {
              dateFormat: { name: 'us', format: 'M/D/YYYY' },
            },
          },
        },
      })
      const value = '2023-10-01T08:45:00.00Z'
      expect(renderCellAsString(field, value)).toBe('10/1/2023')
    })

    it('should render lastModifiedTime field in US format with 12 hour time format', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'lastModifiedTime',
        options: {
          result: {
            type: 'dateTime',
            options: {
              dateFormat: { name: 'us', format: 'M/D/YYYY' },
              timeFormat: { name: '12hour', format: 'h:mma' },
              timeZone: 'utc',
            },
          },
        },
      })
      const value = '2023-10-01T08:45:00.00Z'
      expect(renderCellAsString(field, value)).toBe('10/1/2023 8:45am')
    })
  })

  it('should return value if field type is not recognized', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      // @ts-ignore
      type: 'unknown',
      options: {},
    })
    const value = 'some value'
    expect(renderCellAsString(field, value)).toBe('some value')
  })

  it('should render multipleAttachments field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'multipleAttachments',
      options: {},
    })
    const value = [
      { filename: 'file1.txt', url: 'http://example.com/file1.txt' },
      { filename: 'file2.txt', url: 'http://example.com/file2.txt' },
    ]
    expect(renderCellAsString(field, value)).toBe(
      'file1.txt (http://example.com/file1.txt), file2.txt (http://example.com/file2.txt)'
    )
  })

  it('should render multipleCollaborators field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'multipleCollaborators',
      options: {},
    })
    const value = [{ name: 'CollaboratorA' }, { name: 'CollaboratorB' }]
    expect(renderCellAsString(field, value)).toBe(
      'CollaboratorA, CollaboratorB'
    )
  })

  it('should render multipleLookupValues field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'multipleLookupValues',
      options: {},
    })
    const value = ['Value 1', 'Value 2']
    expect(renderCellAsString(field, value)).toBe('Value 1, Value 2')
  })

  describe('number', () => {
    it('should render number field with a precision of 4', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'number',
        options: { precision: 4 },
      })
      const value = 123.4567
      expect(renderCellAsString(field, value)).toBe('123.4567')
    })

    it('should render number field with a precision of 0', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'number',
        options: { precision: 0 },
      })
      const value = 123.4567
      expect(renderCellAsString(field, value)).toBe('123')
    })

    it('should render value as is if precision is not set', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'number',
        options: {},
      })
      const value = 123.456
      expect(renderCellAsString(field, value)).toBe('123.46')
    })
  })

  describe('percent', () => {
    it('should render percent field with a precision of 4', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'percent',
        options: { precision: 4 },
      })
      const value = 0.1234567
      expect(renderCellAsString(field, value)).toBe('12.3457%')
    })

    it('should render percent field with a precision of 0', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'percent',
        options: { precision: 0 },
      })
      const value = 0.5678
      expect(renderCellAsString(field, value)).toBe('57%')
    })

    it('should render value as is if precision is not set', () => {
      const field = new Field({
        id: 'fld1',
        name: 'Field 1',
        type: 'percent',
        options: {},
      })
      const value = 0.123456
      expect(renderCellAsString(field, value)).toBe('12.35%')
    })
  })

  it('should render rollup field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'rollup',
      options: {},
    })
    const value = ['Value 1', 'Value 2']
    expect(renderCellAsString(field, value)).toBe('Value 1, Value 2')
  })

  it('should render singleCollaborator field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'singleCollaborator',
      options: {},
    })
    const value = { name: 'Collaborator' }
    expect(renderCellAsString(field, value)).toBe('Collaborator')
  })

  it('should render singleSelect field correctly', () => {
    const field = new Field({
      id: 'fld1',
      name: 'Field 1',
      type: 'singleSelect',
      options: {},
    })
    const value = { name: 'Option 1' }
    expect(renderCellAsString(field, value)).toBe('Option 1')
  })
})
