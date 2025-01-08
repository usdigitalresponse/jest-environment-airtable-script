describe('Cell string formatting', () => {
  describe('date', () => {
    const base = {
      base: {
        tables: [
          {
            id: 'tbl1',
            name: 'Table 1',
            fields: [
              {
                id: 'fld1',
                name: 'Field 1',
                type: 'singleLineText',
              },
              {
                id: 'fldDate',
                name: 'Date',
                type: 'date',
                options: {
                  dateFormat: { name: 'local', format: 'mm/dd/yyyy' },
                },
              },
            ],
            records: [
              {
                id: 'rec1',
                name: 'Test Record',
                cellValuesByFieldId: {
                  fld1: 'Value 1',
                  fldDate: '2021-10-01',
                },
              },
            ],
          },
        ],
      },
    }
    it('formats a local string with the default date format', async () => {
      const results = await runAirtableScript({
        script: `
          const record = await base.getTable('tbl1').selectRecordAsync('rec1')
          output.text(record.getCellValueAsString('fldDate'))
        `,
        base,
      })

      expect(results.output[0]).toEqual('10/1/2021')
    })

    it('formats a local string with an overwritten format if the date format is local', async () => {
      const results = await runAirtableScript({
        script: `
          const record = await base.getTable('tbl1').selectRecordAsync('rec1')
          output.text(record.getCellValueAsString('fldDate'))
        `,
        base,
        defaultDateLocale: 'friendly',
      })

      expect(results.output[0]).toEqual('October 1, 2021')
    })
  })
})
