import randomRecords from './fixtures/random-records'

describe('Output', () => {
  it('passes multiple text outputs', async () => {
    const results = await runAirtableScript({
      script: `
        output.text('first output')
        output.text('second output')
      `,
      base: randomRecords,
    })
    expect(results.output).toEqual(['first output', 'second output'])
  })

  it('records a cleared output as another string', async () => {
    const results = await runAirtableScript({
      script: `
        output.text('first output')
        output.clear()
        output.text('second output')
      `,
      base: randomRecords,
    })
    expect(results.output).toEqual([
      'first output',
      OUTPUT_CLEAR,
      'second output',
    ])
  })
})
