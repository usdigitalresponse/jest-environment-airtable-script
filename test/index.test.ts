describe('Load records test', () => {
  it('base: getTable by name', async () => {
    const randomTable = Math.random().toString(36).substring(7)
    const results = await runAirtableScript({
      script: `
      const table = base.getTable('Table ${randomTable}')
      output.text(table.id)
    `,
      base: {
        base: {
          tables: [
            {
              id: 'tbl1',
              name: 'Table 1',
            },
            {
              id: `tbl${randomTable}`,
              name: `Table ${randomTable}`,
            },
          ],
        },
      },
    })
    expect(results.output[0]).toBe(`tbl${randomTable}`)
  })
  it('base: getTable by id', async () => {
    const randomTable = Math.random().toString(36).substring(7)
    const results = await runAirtableScript({
      script: `
      const table = base.getTable('tbl${randomTable}')
      output.text(table.id)
    `,
      base: {
        base: {
          tables: [
            {
              id: 'tbl1',
              name: 'Table 1',
              views: [],
              records: [],
              fields: [],
            },
            {
              id: `tbl${randomTable}`,
              name: `Table ${randomTable}`,
              views: [],
              records: [],
              fields: [],
            },
          ],
        },
      },
    })
    expect(results.output[0]).toBe(`tbl${randomTable}`)
  })

  it('accepts base objects not nested under a "base" property', async () => {
    const randomTable = Math.random().toString(36).substring(7)
    const results = await runAirtableScript({
      script: `
      const table = base.getTable('tbl${randomTable}')
      output.text(table.id)
    `,
      base: {
        tables: [
          {
            id: 'tbl1',
            name: 'Table 1',
            views: [],
            records: [],
            fields: [],
          },
          {
            id: `tbl${randomTable}`,
            name: `Table ${randomTable}`,
            views: [],
            records: [],
            fields: [],
          },
        ],
      },
    })
    expect(results.output[0]).toBe(`tbl${randomTable}`)
  })
})
