describe('Catch errors test', () => {
  it('sets thrownError to false if none are thrown', async () => {
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
    expect(results.thrownError).toBe(false)
  })

  it('catches errors thrown in the script', async () => {
    const randomTable = Math.random().toString(36).substring(7)
    const results = await runAirtableScript({
      script: `
      const table = base.getTable('Table ${randomTable}')
      throw new Error('This is an error')
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

    expect(results.thrownError.message).toBe('This is an error')
  })
})
