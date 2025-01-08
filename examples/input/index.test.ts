import { readFileSync } from 'fs'
import base from '../../test/fixtures/test-base'

describe('Airtable Script Environment input example', () => {
  it('should select a table and a record', async () => {
    const script = readFileSync(
      __dirname + '/extension-script.js',
      'utf8'
    ).toString()

    const result = await runAirtableScript({
      script,
      base,
      mockInput: {
        tableAsync: (label: string): string | void => {
          if (label === 'Select a table') {
            return 'tblTableA'
          }
          return ''
        },
        recordAsync: (
          label: string,
          options: { source: { id: string } }
        ): string | void => {
          if (
            label === 'Select a record' &&
            options.source.id === 'tblTableA'
          ) {
            return 'recGuadalupeDenes'
          }
        },
      },
    })
    expect(result.output).toEqual([
      '**Record ID:** recGuadalupeDenes',
      '**Record rating:** 1',
    ])
  })
})
