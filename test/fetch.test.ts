describe('Fetch', () => {
  it('implements a mock fetch', async () => {
    const mockFetch = () => ({ status: 200 })
    const results = await runAirtableScript({
      script: `
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        output.inspect(response)
      `,
      base: {
        base: {
          tables: [
            {
              id: 'tbl1',
              name: 'Table 1',
            },
            {
              id: `tbl2`,
              name: `Table 2`,
            },
          ],
        },
      },
      mockFetch,
    })
    expect(results.output[0]).toEqual(JSON.stringify({ status: 200 }))
  })

  it('implements a mock remoteFetchAsync', async () => {
    const mockFetch = () => ({ status: 200 })
    const results = await runAirtableScript({
      script: `
        const response = await remoteFetchAsync('https://jsonplaceholder.typicode.com/todos/1')
        output.inspect(response)
      `,
      inAutomation: false,
      base: {
        base: {
          tables: [
            {
              id: 'tbl1',
              name: 'Table 1',
            },
            {
              id: `tbl2`,
              name: `Table 2`,
            },
          ],
        },
      },
      mockFetch,
    })
    expect(results.output[0]).toEqual(JSON.stringify({ status: 200 }))
  })

  it('throws an error if remoteFetchAsync outside an extension script', async () => {
    const mockFetch = () => ({ status: 200 })
    const results = await runAirtableScript({
      script: `
        const response = await remoteFetchAsync('https://jsonplaceholder.typicode.com/todos/1')
        output.set('resonse', JSON.stringify(response))
      `,
      inAutomation: true,
      base: {
        base: {
          tables: [
            {
              id: 'tbl1',
              name: 'Table 1',
            },
            {
              id: `tbl2`,
              name: `Table 2`,
            },
          ],
        },
      },
      mockFetch,
    })
    if (results.thrownError) {
      expect(results.thrownError).toBeTruthy()
      expect(results.thrownError.message).toEqual(
        'remoteFetchAsync can only be called in automation scripts'
      )
    } else {
      expect(false).toBeTruthy()
    }
  })
})
