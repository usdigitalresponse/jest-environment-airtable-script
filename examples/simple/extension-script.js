/**
 * A script that pulls all records from Table A and creates a list of record IDs and their ratings.
 */
const table = base.getTable('Table A')
// Select all records and their ratings
const records = await table
  .selectRecordsAsync({ fields: ['rating'] })
  .then((result) => result.records)

// Output an array of record IDs and their ratings
output.inspect(
  records.map((record) => [record.id, record.getCellValue('rating')])
)
