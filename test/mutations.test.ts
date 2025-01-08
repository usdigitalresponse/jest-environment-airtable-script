import testBase from './fixtures/test-base'

describe('Mutations', () => {
  it('should track creating a new record', async () => {
    const { mutations } = await runAirtableScript({
      script: `
        const table = base.getTable('tblTableA')
        await table.createRecordAsync({
          fldName: 'New Name',
        })
      `,
      base: testBase,
    })
    expect(mutations[0].type).toEqual(MutationTypes.CREATE_RECORD)
    expect(mutations[0].args.cellValuesByFieldId).toEqual({
      fldName: 'New Name',
    })
  })

  it('should track deleting a record', async () => {
    const { mutations } = await runAirtableScript({
      script: `
        const table = base.getTable('tblTableA')
        await table.deleteRecordAsync('recLindaDAmore')
      `,
      base: testBase,
    })
    expect(mutations).toEqual([
      {
        type: MutationTypes.DELETE_RECORD,
        args: {
          tableId: 'tblTableA',
          recordId: 'recLindaDAmore',
        },
      },
    ])
  })

  it('should track a change in a single field in a record', async () => {
    const { mutations } = await runAirtableScript({
      script: `
        const table = base.getTable('tblTableA')
        await table.updateRecordAsync('recLindaDAmore', {
          fldName: 'New Name',
        })
      `,
      base: testBase,
    })
    expect(mutations).toEqual([
      {
        type: MutationTypes.SET_MULTIPLE_RECORD_CELL_VALUES,
        args: {
          tableId: 'tblTableA',
          recordId: 'recLindaDAmore',
          cellValuesByFieldId: {
            fldName: 'New Name',
          },
        },
      },
    ])
  })

  it('should track a change in fields in a record', async () => {
    const { mutations } = await runAirtableScript({
      script: `
        const table = base.getTable('tblTableA')
        await table.updateRecordAsync('recLindaDAmore', {
          fldName: 'New Name',
          fldnumber: 123,
        })
      `,
      base: testBase,
    })
    expect(mutations).toEqual([
      {
        type: MutationTypes.SET_MULTIPLE_RECORD_CELL_VALUES,
        args: {
          tableId: 'tblTableA',
          recordId: 'recLindaDAmore',
          cellValuesByFieldId: {
            fldName: 'New Name',
            fldnumber: 123,
          },
        },
      },
    ])
  })
  it('should track a new table', async () => {
    const { mutations } = await runAirtableScript({
      script: `
        await base.createTableAsync('New Table', [
        {
          name: 'Field 1',
          type: 'singleLineText',
        },
        {
          name: 'Field 2',
          type: 'number',
        },
      ])
      `,
      base: testBase,
    })
    expect(mutations).toEqual([
      {
        type: MutationTypes.CREATE_TABLE,
        args: {
          name: 'New Table',
          tableId: 'tblNewTable3',
          fields: [
            {
              name: 'Field 1',
              type: 'singleLineText',
            },
            {
              name: 'Field 2',
              type: 'number',
            },
          ],
        },
      },
    ])
  })

  it('should track creating a new field', async () => {
    const { mutations } = await runAirtableScript({
      script: `
        const table = base.getTable('tblTableA')
        await table.createFieldAsync('New Field', 'number')
      `,
      base: testBase,
    })
    expect(mutations).toEqual([
      {
        type: MutationTypes.CREATE_FIELD,
        args: {
          tableId: 'tblTableA',
          name: 'New Field',
          type: 'number',
          description: undefined,
          fieldId: 'fldNewField',
          options: undefined,
        },
      },
    ])
  })

  it('should track updating a field name', async () => {
    const { mutations } = await runAirtableScript({
      script: `
        const table = base.getTable('tblTableA')
        const field = table.getField('fldName')
        await field.updateNameAsync('New Name')
      `,
      base: testBase,
    })
    expect(mutations).toEqual([
      {
        type: MutationTypes.UPDATE_FIELD_NAME,
        args: {
          fieldId: 'fldName',
          name: 'New Name',
        },
      },
    ])
  })

  it('should track updating a field description', async () => {
    const { mutations } = await runAirtableScript({
      script: `
        const table = base.getTable('tblTableA')
        const field = table.getField('fldName')
        await field.updateDescriptionAsync('New Description')
      `,
      base: testBase,
    })
    expect(mutations).toEqual([
      {
        type: MutationTypes.UPDATE_FIELD_DESCRIPTION,
        args: {
          fieldId: 'fldName',
          description: 'New Description',
        },
      },
    ])
  })

  it('should track updating a field options', async () => {
    const { mutations } = await runAirtableScript({
      script: `
        const table = base.getTable('tblTableA')
        const field = table.getField('fldsingleSelect')
        await field.updateOptionsAsync({ choices: [...field.options.choices, {name: 'new', color: 'redLight2'}] })
      `,
      base: testBase,
    })
    expect(mutations).toEqual([
      {
        type: MutationTypes.UPDATE_FIELD_CONFIG,
        args: {
          fieldId: 'fldsingleSelect',
          options: {
            // @ts-ignore
            choices: testBase.base.tables
              .find((table) => table.id === 'tblTableA')
              .fields.find((field) => field.id === 'fldsingleSelect')
              // @ts-ignore
              .options.choices.concat([{ name: 'new', color: 'redLight2' }]),
          },
        },
      },
    ])
  })
})
