/**
 * A pascal case utility function.
 */
const pascalCase = (str: string): string =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, ' ') // Remove all special characters
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+/g, '')
    .replace(/^\w/, (c) => c.toUpperCase())

export { pascalCase }
