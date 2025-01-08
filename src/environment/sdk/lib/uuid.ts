/**
 * Generates a random UUID that is compatable with Airtable
 * unique identifiers.
 *
 * @param length The length of the UUID
 */
function uuid(length: number = 17): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export { uuid }
