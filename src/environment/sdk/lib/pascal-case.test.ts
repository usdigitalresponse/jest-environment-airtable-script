import { pascalCase } from './pascal-case'

describe('pascalCase', () => {
  it('should convert a single word to pascal case', () => {
    expect(pascalCase('hello')).toBe('Hello')
  })

  it('should convert multiple words to pascal case', () => {
    expect(pascalCase('hello world')).toBe('HelloWorld')
  })

  it('should handle strings with mixed casing', () => {
    expect(pascalCase('hElLo WoRLd')).toBe('HelloWorld')
  })

  it('should handle strings with leading and trailing spaces', () => {
    expect(pascalCase('  hello world  ')).toBe('HelloWorld')
  })

  it('should handle strings with multiple spaces between words', () => {
    expect(pascalCase('hello   world')).toBe('HelloWorld')
  })

  it('should handle empty strings', () => {
    expect(pascalCase('')).toBe('')
  })

  it('should handle strings with special characters', () => {
    expect(pascalCase('hello-world')).toBe('HelloWorld')
  })
})
