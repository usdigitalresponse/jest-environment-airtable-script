import { Table } from './table'
import { View } from './view'

describe('View', () => {
  let tableData: any

  beforeAll(() => {
    globalThis.__isAirtableScriptTestEnvironment = true

    globalThis.__base = {
      name: 'Test Base',
      id: 'app123',
    }
  })

  beforeEach(() => {
    globalThis.__mutations = []
    tableData = {
      id: 'tbl123',
      name: 'Test Table',
      description: 'A test table',
      fields: [
        { id: 'fld1', name: 'Field 1', type: 'text' },
        { id: 'fld2', name: 'Field 2', type: 'number' },
      ],
      views: [
        {
          id: 'view123',
          name: 'Test View',
          type: 'grid',
          records: [{ id: 'rec1' }, { id: 'rec2' }],
        },
        {
          id: 'view456',
          name: 'Another View',
          type: 'grid',
          records: [{ id: 'rec2' }],
        },
      ],
      records: [
        { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
        { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
      ],
    }
  })

  it('should have the correct properties', () => {
    const table = new Table(tableData)
    const view = new View(
      tableData.views.find((view: any) => view.id === 'view123'),
      table
    )
    expect(view.id).toBe('view123')
    expect(view.name).toBe('Test View')
    expect(view.type).toBe('grid')
    expect(view.url).toBe(
      `https://airtable.com/${__base.id}/${table.id}/view123`
    )
  })

  describe('selectRecordAsync', () => {
    it('should return null if the record is not found in the view', async () => {
      const table = new Table(tableData)
      const view = new View(
        tableData.views.find((view: any) => view.id === 'view456'),
        table
      )
      const record = await view.selectRecordAsync('rec1')
      expect(record).toBeNull()
    })

    it('should return the record if it is found in the view', async () => {
      const table = new Table(tableData)

      const view = new View(
        tableData.views.find((view: any) => view.id === 'view123'),
        table
      )
      const record = await view.selectRecordAsync('rec1')
      expect(record?.getCellValueAsString('fld1')).toEqual('value1')
    })

    it('should limit fields in results', async () => {
      const table = new Table(tableData)
      const view = new View(
        tableData.views.find((view: any) => view.id === 'view123'),
        table
      )
      const options = { fields: ['fld1'] }
      const record = await view.selectRecordAsync('rec1', options)
      expect(record?.getCellValueAsString('fld1')).toEqual('value1')
      expect(() => record?.getCellValue('fld2')).toThrow(
        new Error(
          `Field "fld2" isn't in this record. Make sure it was included in the QueryResult this record comes from`
        )
      )
    })
  })

  describe('selectRecordsAsync', () => {
    // This calls the selectRecordsAsync method on the table class, so we are
    // only testing that the view filters the records correctly
    it('should return only records found in the view', async () => {
      const table = new Table(tableData)
      const view = new View(
        tableData.views.find((view: any) => view.id === 'view123'),
        table
      )

      const result = await view.selectRecordsAsync()
      expect(result.records.length).toBe(2)
      const view2 = new View(
        tableData.views.find((view: any) => view.id === 'view456'),
        table
      )

      const result2 = await view2.selectRecordsAsync()
      expect(result2.records.length).toBe(1)
    })
  })
})
