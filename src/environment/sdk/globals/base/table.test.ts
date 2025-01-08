import { Table } from './table'
import { MutationTypes } from '../../../mutation-types'

describe('Table', () => {
  let tableData: any

  beforeAll(() => {
    globalThis.__isAirtableScriptTestEnvironment = true

    globalThis.__base = {
      name: 'Test Base',
      id: 'app123',
      tables: [
        {
          id: 'tbl123',
          name: 'Test Table',
          description: 'A test table',
          fields: [
            { id: 'fld1', name: 'Field 1', type: 'singleLineText' },
            { id: 'fld2', name: 'Field 2', type: 'number' },
          ],
          views: [
            {
              id: 'viw1',
              type: 'grid',
              name: 'View 1',
              records: [{ id: 'rec1' }],
            },
            {
              id: 'viw2',
              type: 'grid',
              name: 'View 2',
              records: [{ id: 'rec1' }],
            },
          ],
          records: [
            {
              id: 'rec1',
              name: 'Record 1',
              cellValuesByFieldId: { fld1: 'value1', fld2: 10 },
            },
          ],
        },
      ],
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
        { id: 'viw1', name: 'View 1' },
        { id: 'viw2', name: 'View 2' },
      ],
    }
  })

  it('should create a table with the correct properties', () => {
    const table = new Table(tableData)
    expect(table.id).toBe(tableData.id)
    expect(table.name).toBe(tableData.name)
    expect(table.description).toBe(tableData.description)
    expect(table.fields[0].id).toBe(tableData.fields[0].id)
    expect(table.views.map((view) => view.id)).toEqual(
      tableData.views.map((view: any) => view.id)
    )
    expect(table.url).toBe(`https://airtable.com/${__base.id}/${tableData.id}`)
  })

  it('should get a field by id or name', () => {
    const table = new Table(tableData)
    const field = table.getField('fld1')
    expect(field.id).toEqual(tableData.fields[0].id)

    const fieldByName = table.getField('Field 1')
    expect(fieldByName.id).toEqual(tableData.fields[0].id)
  })

  it('should throw an error if field is not found', () => {
    const table = new Table(tableData)
    expect(() => table.getField('fld999')).toThrow(
      `No field matching "fld999" found in table "${tableData.name}"`
    )
  })

  it('should get a view by id or name', () => {
    const table = new Table(tableData)
    const view = table.getView('viw1')
    expect(view.id).toEqual(tableData.views[0].id)

    const viewByName = table.getView('View 1')
    expect(viewByName.id).toEqual(tableData.views[0].id)
  })

  it('should throw an error if view is not found', () => {
    const table = new Table(tableData)
    expect(() => table.getView('viw999')).toThrow(
      `No view matching "viw999" found in table "${tableData.name}"`
    )
  })

  it('should create a new field asynchronously', async () => {
    const table = new Table(tableData)
    const newFieldName = 'New Field'
    const newFieldType = 'singleLineText'
    const newFieldId = await table.createFieldAsync(newFieldName, newFieldType)
    expect(newFieldId).toBe(`fld${newFieldName.replace(/\s+/g, '')}`)
    expect(table.fields).toContainEqual({
      id: newFieldId,
      name: newFieldName,
      type: newFieldType,
      options: null,
      description: null,
    })
    expect(globalThis.__mutations).toEqual([
      {
        type: MutationTypes.CREATE_FIELD,
        args: {
          tableId: 'tbl123',
          name: newFieldName,
          type: newFieldType,
          fieldId: 'fldNewField',
        },
      },
    ])
  })

  it('should throw an error if field type is invalid', async () => {
    const table = new Table(tableData)
    await expect(
      // @ts-ignore
      table.createFieldAsync('Invalid Field', 'invalidType')
    ).rejects.toThrow('Invalid field type: invalidType')
  })

  it('should throw an error if field name already exists', async () => {
    const table = new Table(tableData)
    await expect(
      table.createFieldAsync('Field 1', 'singleLineText')
    ).rejects.toThrow(
      `Can't create or update field: field with name 'Field 1' already exists`
    )
  })

  describe('fields', () => {
    it('should persist changes to field properties', async () => {
      const table = new Table(tableData)
      const field = table.getField('fld1')
      await field.updateDescriptionAsync('New description')
      expect(field.description).toBe('New description')
    })
  })

  describe('selectRecordsAsync', () => {
    it('should select all records', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      const result = await table.selectRecordsAsync()
      expect(result.records.length).toBe(2)
      expect(result.records[0].id).toBe('rec1')
      expect(result.records[0].getCellValue('fld1')).toBe('value1')
      expect(result.records[0].getCellValueAsString('fld1')).toBe('value1')
    })

    it('should select records with specified recordIds', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      const result = await table.selectRecordsAsync({ recordIds: ['rec1'] })
      expect(result.records.length).toBe(1)
      expect(result.records[0].id).toBe('rec1')
      expect(result.records[0].getCellValueAsString('fld1')).toBe('value1')
    })

    it('should sort records by ascending order', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      const result = await table.selectRecordsAsync({
        sorts: [{ field: 'fld1', direction: 'asc' }],
      })
      expect(result.records[0].id).toBe('rec1')
      expect(result.records[1].id).toBe('rec2')
    })

    it('should sort records by descending order', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      const result = await table.selectRecordsAsync({
        sorts: [{ field: 'fld1', direction: 'desc' }],
      })
      expect(result.records[0].id).toBe('rec2')
      expect(result.records[1].id).toBe('rec1')
    })

    it('should throw an error if a sort uses a missing field', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      expect(
        async () =>
          await table.selectRecordsAsync({
            sorts: [{ field: 'missingField', direction: 'desc' }],
          })
      ).rejects.toThrow(
        new Error(
          `No field matching "missingField" found in table "${tableData.name}"`
        )
      )
    })

    it('should throw an error if a sort uses a wrong direction', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      expect(
        async () =>
          await table.selectRecordsAsync({
            // @ts-ignore
            sorts: [{ field: 'fld1', direction: 'wrongDirection' }],
          })
      ).rejects.toThrow(
        new Error(
          `Invalid sort direction: "wrongDirection". Must be "asc" or "desc"`
        )
      )
    })

    it('should only include specifically stated fields', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      const result = await table.selectRecordsAsync({ fields: ['fld1'] })
      expect(result.records[0].getCellValueAsString('fld1')).toBe('value1')
      expect(() => result.records[0].getCellValueAsString('fld2')).toThrow(
        new Error(
          'Field "fld2" isn\'t in this record. Make sure it was included in the QueryResult this record comes from'
        )
      )
    })

    it('should return all records if no options are specified', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      const result = await table.selectRecordsAsync()
      expect(result.records.length).toBe(2)
    })
  })
  describe('selectRecordAsync', () => {
    it('should select a single record by ID', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      const record = await table.selectRecordAsync('rec1')
      if (!record) {
        throw new Error('Record not found')
      }
      expect(record.id).toBe('rec1')
      expect(record.getCellValue('fld1')).toBe('value1')
    })

    it('should return null if the record is not found', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      const record = await table.selectRecordAsync('rec999')
      expect(record).toBeNull()
    })

    it('should only include specifically stated fields', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      const record = await table.selectRecordAsync('rec1', {
        fields: ['fld1'],
      })
      if (!record) {
        throw new Error('Record not found')
      }
      expect(record.getCellValueAsString('fld1')).toBe('value1')
      expect(() => record.getCellValueAsString('fld2')).toThrow(
        new Error(
          'Field "fld2" isn\'t in this record. Make sure it was included in the QueryResult this record comes from'
        )
      )
    })
  })

  describe('createRecordAsync', () => {
    it('should create a new record with valid fields', async () => {
      const table = new Table(tableData)
      const fields = { 'Field 1': 'Test Value', 'Field 2': 123 }
      const recordId = await table.createRecordAsync(fields)
      expect(recordId).toMatch(/^rec/)
      const record = table._getRawRecords().find((rec) => rec.id === recordId)
      expect(record).toBeDefined()
      expect(record!.getCellValue('fld1')).toBe('Test Value')
      expect(record!.getCellValue('fld2')).toBe(123)
      expect(globalThis.__mutations).toEqual([
        {
          type: MutationTypes.CREATE_RECORD,
          args: {
            tableId: 'tbl123',
            recordId,
            cellValuesByFieldId: { fld1: 'Test Value', fld2: 123 },
          },
        },
      ])
    })

    it('should throw an error if a field does not exist', async () => {
      const table = new Table(tableData)
      const fields = { 'Nonexistent Field': 'Test Value' }
      await expect(table.createRecordAsync(fields)).rejects.toThrow(
        `No field matching "Nonexistent Field" found in table "${tableData.name}"`
      )
    })
  })

  describe('createRecordsAsync', () => {
    it('should create multiple records with valid fields', async () => {
      const table = new Table(tableData)
      const records = [
        { 'Field 1': 'Test Value 1', 'Field 2': 123 },
        { 'Field 1': 'Test Value 2', 'Field 2': 456 },
      ]
      const recordIds = await table.createRecordsAsync(records)
      expect(recordIds.length).toBe(2)
      recordIds.forEach((recordId) => {
        expect(recordId).toMatch(/^rec/)
      })
      const createdRecords = table
        ._getRawRecords()
        .filter((rec) => recordIds.includes(rec.id))
      expect(createdRecords.length).toBe(2)
      expect(createdRecords[0].getCellValue('fld1')).toBe('Test Value 1')
      expect(createdRecords[0].getCellValue('fld2')).toBe(123)
      expect(createdRecords[1].getCellValue('fld1')).toBe('Test Value 2')
      expect(createdRecords[1].getCellValue('fld2')).toBe(456)
      expect(globalThis.__mutations).toEqual([
        {
          type: MutationTypes.CREATE_RECORD,
          args: {
            tableId: 'tbl123',
            recordId: recordIds[0],
            cellValuesByFieldId: { fld1: 'Test Value 1', fld2: 123 },
          },
        },
        {
          type: MutationTypes.CREATE_RECORD,
          args: {
            tableId: 'tbl123',
            recordId: recordIds[1],
            cellValuesByFieldId: { fld1: 'Test Value 2', fld2: 456 },
          },
        },
      ])
    })

    it('should throw an error if any field does not exist', async () => {
      const table = new Table(tableData)
      const records = [
        { 'Field 1': 'Test Value 1', 'Field 2': 123 },
        { 'Nonexistent Field': 'Test Value 2' },
      ]
      await expect(table.createRecordsAsync(records)).rejects.toThrow(
        `No field matching "Nonexistent Field" found in table "${tableData.name}"`
      )
    })
  })

  describe('updateRecordAsync', () => {
    it('should update a record with valid fields', async () => {
      const table = new Table({
        ...tableData,
        records: [
          {
            id: 'rec1',
            cellValuesByFieldId: { fld1: 'value1', fld2: 10 },
          },
        ],
      })
      await table.updateRecordAsync('rec1', {
        'Field 1': 'newValue',
        'Field 2': 20,
      })
      const record = table._getRawRecords().find((rec) => rec.id === 'rec1')
      expect(record).toBeDefined()
      expect(record!.getCellValue('fld1')).toBe('newValue')
      expect(record!.getCellValue('fld2')).toBe(20)
      expect(globalThis.__mutations).toEqual([
        {
          type: MutationTypes.SET_MULTIPLE_RECORD_CELL_VALUES,
          args: {
            tableId: 'tbl123',
            recordId: 'rec1',
            cellValuesByFieldId: { fld1: 'newValue', fld2: 20 },
          },
        },
      ])
    })

    it('should throw an error if the record does not exist', async () => {
      const table = new Table(tableData)
      await expect(
        table.updateRecordAsync('rec999', { 'Field 1': 'newValue' })
      ).rejects.toThrow(`No record matching "rec999" found`)
    })

    it('should throw an error if a field does not exist', async () => {
      const table = new Table({
        ...tableData,
        records: [
          {
            id: 'rec1',
            cellValuesByFieldId: { fld1: 'value1', fld2: 10 },
          },
        ],
      })
      await expect(
        table.updateRecordAsync('rec1', {
          'Nonexistent Field': 'newValue',
        })
      ).rejects.toThrow(
        `No field matching "Nonexistent Field" found in table "${tableData.name}"`
      )
    })

    it('should update a record using a Record instance', async () => {
      const table = new Table({
        ...tableData,
        records: [
          {
            id: 'rec1',
            cellValuesByFieldId: { fld1: 'value1', fld2: 10 },
          },
        ],
      })
      const record = table._getRawRecords().find((rec) => rec.id === 'rec1')
      await table.updateRecordAsync(record!, {
        'Field 1': 'newValue',
        'Field 2': 20,
      })
      expect(record!.getCellValue('fld1')).toBe('newValue')
      expect(record!.getCellValue('fld2')).toBe(20)
      expect(globalThis.__mutations).toEqual([
        {
          type: MutationTypes.SET_MULTIPLE_RECORD_CELL_VALUES,
          args: {
            tableId: 'tbl123',
            recordId: 'rec1',
            cellValuesByFieldId: { fld1: 'newValue', fld2: 20 },
          },
        },
      ])
    })
  })
  describe('updateRecordsAsync', () => {
    it('should update multiple records with valid fields', async () => {
      const table = new Table({
        ...tableData,
        records: [
          {
            id: 'rec1',
            cellValuesByFieldId: { fld1: 'value1', fld2: 10 },
          },
          {
            id: 'rec2',
            cellValuesByFieldId: { fld1: 'value2', fld2: 20 },
          },
        ],
      })
      await table.updateRecordsAsync([
        {
          id: 'rec1',
          fields: { 'Field 1': 'newValue1', 'Field 2': 30 },
        },
        {
          id: 'rec2',
          fields: { 'Field 1': 'newValue2', 'Field 2': 40 },
        },
      ])
      const updatedRecords = table._getRawRecords()
      const record1 = updatedRecords.find((rec) => rec.id === 'rec1')
      const record2 = updatedRecords.find((rec) => rec.id === 'rec2')
      expect(record1).toBeDefined()
      expect(record1!.getCellValue('fld1')).toBe('newValue1')
      expect(record1!.getCellValue('fld2')).toBe(30)
      expect(record2).toBeDefined()
      expect(record2!.getCellValue('fld1')).toBe('newValue2')
      expect(record2!.getCellValue('fld2')).toBe(40)
      expect(globalThis.__mutations).toEqual([
        {
          type: MutationTypes.SET_MULTIPLE_RECORD_CELL_VALUES,
          args: {
            tableId: 'tbl123',
            recordId: 'rec1',
            cellValuesByFieldId: { fld1: 'newValue1', fld2: 30 },
          },
        },
        {
          type: MutationTypes.SET_MULTIPLE_RECORD_CELL_VALUES,
          args: {
            tableId: 'tbl123',
            recordId: 'rec2',
            cellValuesByFieldId: { fld1: 'newValue2', fld2: 40 },
          },
        },
      ])
    })

    it('should throw an error if any record does not exist', async () => {
      const table = new Table({
        ...tableData,
        records: [
          {
            id: 'rec1',
            cellValuesByFieldId: { fld1: 'value1', fld2: 10 },
          },
        ],
      })
      await expect(
        table.updateRecordsAsync([
          {
            id: 'rec1',
            fields: { 'Field 1': 'newValue1', 'Field 2': 30 },
          },
          {
            id: 'rec999',
            fields: { 'Field 1': 'newValue2', 'Field 2': 40 },
          },
        ])
      ).rejects.toThrow(`No record matching "rec999" found`)
    })

    it('should throw an error if any field does not exist', async () => {
      const table = new Table({
        ...tableData,
        records: [
          {
            id: 'rec1',
            cellValuesByFieldId: { fld1: 'value1', fld2: 10 },
          },
          {
            id: 'rec2',
            cellValuesByFieldId: { fld1: 'value2', fld2: 20 },
          },
        ],
      })
      await expect(
        table.updateRecordsAsync([
          {
            id: 'rec1',
            fields: { 'Field 1': 'newValue1', 'Field 2': 30 },
          },
          {
            id: 'rec2',
            fields: { 'Nonexistent Field': 'newValue2' },
          },
        ])
      ).rejects.toThrow(
        `No field matching "Nonexistent Field" found in table "${tableData.name}"`
      )
    })
  })

  describe('deleteRecordAsync', () => {
    it('should delete a record by ID', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      await table.deleteRecordAsync('rec1')
      const records = table._getRawRecords()
      expect(records.length).toBe(1)
      expect(records[0].id).toBe('rec2')
      expect(globalThis.__mutations).toEqual([
        {
          type: MutationTypes.DELETE_RECORD,
          args: { tableId: 'tbl123', recordId: 'rec1' },
        },
      ])
    })

    it('should delete a record by Record instance', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      const record = table._getRawRecords().find((rec) => rec.id === 'rec1')
      await table.deleteRecordAsync(record!)
      const records = table._getRawRecords()
      expect(records.length).toBe(1)
      expect(records[0].id).toBe('rec2')
      expect(globalThis.__mutations).toEqual([
        {
          type: MutationTypes.DELETE_RECORD,
          args: { tableId: 'tbl123', recordId: 'rec1' },
        },
      ])
    })

    it('should throw an error if the record does not exist', async () => {
      const table = new Table(tableData)
      await expect(table.deleteRecordAsync('rec999')).rejects.toThrow(
        `No record matching "rec999" found`
      )
    })
  })

  describe('deleteRecordsAsync', () => {
    it('should delete multiple records by IDs', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
          { id: 'rec3', cellValuesByFieldId: { fld1: 'value3', fld2: 30 } },
        ],
      })
      await table.deleteRecordsAsync(['rec1', 'rec2'])
      const records = table._getRawRecords()
      expect(records.length).toBe(1)
      expect(records[0].id).toBe('rec3')
      expect(globalThis.__mutations).toEqual([
        {
          type: MutationTypes.DELETE_RECORD,
          args: { tableId: 'tbl123', recordId: 'rec1' },
        },
        {
          type: MutationTypes.DELETE_RECORD,
          args: { tableId: 'tbl123', recordId: 'rec2' },
        },
      ])
    })

    it('should delete multiple records by Record instances', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
          { id: 'rec3', cellValuesByFieldId: { fld1: 'value3', fld2: 30 } },
        ],
      })
      const record1 = table._getRawRecords().find((rec) => rec.id === 'rec1')
      const record2 = table._getRawRecords().find((rec) => rec.id === 'rec2')
      await table.deleteRecordsAsync([record1!, record2!])
      const records = table._getRawRecords()
      expect(records.length).toBe(1)
      expect(records[0].id).toBe('rec3')
      expect(globalThis.__mutations).toEqual([
        {
          type: MutationTypes.DELETE_RECORD,
          args: { tableId: 'tbl123', recordId: 'rec1' },
        },
        {
          type: MutationTypes.DELETE_RECORD,
          args: { tableId: 'tbl123', recordId: 'rec2' },
        },
      ])
    })

    it('should throw an error if any record does not exist', async () => {
      const table = new Table({
        ...tableData,
        records: [
          { id: 'rec1', cellValuesByFieldId: { fld1: 'value1', fld2: 10 } },
          { id: 'rec2', cellValuesByFieldId: { fld1: 'value2', fld2: 20 } },
        ],
      })
      await expect(
        table.deleteRecordsAsync(['rec1', 'rec999'])
      ).rejects.toThrow(`No record matching "rec999" found`)
    })
  })
})
