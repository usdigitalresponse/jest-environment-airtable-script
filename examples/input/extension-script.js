const table = await input.tableAsync('Select a table')
const record = await input.recordAsync('Select a record', table)

if (record) {
  output.markdown(`**Record ID:** ${record.id}`)
  output.markdown(`**Record rating:** ${record.getCellValueAsString('rating')}`)
} else {
  output.text('No record selected')
}
