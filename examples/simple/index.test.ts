import base from '../../test/fixtures/test-base'
import { readFileSync } from 'fs'
describe('Airtable Script Environment: Examples: Simple', () => {
  it('should return a list of record ratings', async () => {
    const script = readFileSync(
      __dirname + '/extension-script.js',
      'utf8'
    ).toString()

    const result = await runAirtableScript({
      script,
      base,
    })
    const records = JSON.parse(result.output[0])
    expect(records.length).toBe(10)
    expect(records.find((record) => record[0] === 'recMrAngelOkuneva')[1]).toBe(
      1
    )
  })
})
