import { uuid } from './uuid'

describe('uuid', () => {
  it('should generate a UUID of the default length', () => {
    const result = uuid()
    expect(result).toHaveLength(17)
  })

  it('should generate a UUID of the specified length', () => {
    const length = 10
    const result = uuid(length)
    expect(result).toHaveLength(length)
  })

  it('should generate a UUID containing only valid characters', () => {
    const result = uuid()
    const validCharacters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (const char of result) {
      expect(validCharacters).toContain(char)
    }
  })

  it('should generate unique UUIDs', () => {
    const uuid1 = uuid()
    const uuid2 = uuid()
    expect(uuid1).not.toEqual(uuid2)
  })
})
