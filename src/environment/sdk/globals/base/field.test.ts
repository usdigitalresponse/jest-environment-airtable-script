import { Field } from './field'

describe('Field', () => {
  let fieldData: any

  beforeEach(() => {
    fieldData = {
      id: 'fld123',
      name: 'Test Field',
      type: 'singleLineText',
      options: { option1: 'value1' },
      description: 'A test field',
    }
    globalThis.__mutations = []
  })

  it('should create a Field instance with correct properties', () => {
    const field = new Field(fieldData)
    expect(field.id).toBe(fieldData.id)
    expect(field.name).toBe(fieldData.name)
    expect(field.type).toBe(fieldData.type)
    expect(field.options).toEqual(fieldData.options)
    expect(field.description).toBe(fieldData.description)
  })

  it('should set description to null if not provided', () => {
    delete fieldData.description
    const field = new Field(fieldData)
    expect(field.description).toBeNull()
  })

  it('should set options to null if not provided', () => {
    delete fieldData.options
    const field = new Field(fieldData)
    expect(field.options).toBeNull()
  })

  it('should return true for isComputed if field type is computed', () => {
    fieldData.type = 'formula'
    const field = new Field(fieldData)
    expect(field.isComputed).toBe(true)
  })

  it('should return false for isComputed if field type is not computed', () => {
    const field = new Field(fieldData)
    expect(field.isComputed).toBe(false)
  })

  it('should update the description asynchronously', async () => {
    const field = new Field(fieldData)
    await field.updateDescriptionAsync('New description')
    expect(field.description).toBe('New description')
    expect(globalThis.__mutations).toEqual([
      {
        type: MutationTypes.UPDATE_FIELD_DESCRIPTION,
        args: {
          fieldId: field.id,
          description: 'New description',
        },
      },
    ])
  })

  it('should set description to empty string if null is passed', async () => {
    const field = new Field(fieldData)
    await field.updateDescriptionAsync(null)
    expect(field.description).toBe('')
    expect(globalThis.__mutations).toEqual([
      {
        type: MutationTypes.UPDATE_FIELD_DESCRIPTION,
        args: {
          fieldId: field.id,
          description: '',
        },
      },
    ])
  })

  it('should update the options asynchronously', async () => {
    const field = new Field(fieldData)
    const newOptions = { option2: 'value2' }
    await field.updateOptionsAsync(newOptions)
    expect(field.options).toEqual(newOptions)
    expect(globalThis.__mutations).toEqual([
      {
        type: MutationTypes.UPDATE_FIELD_CONFIG,
        args: {
          fieldId: field.id,
          options: newOptions,
        },
      },
    ])
  })

  it('should update the name asynchronously', async () => {
    const field = new Field(fieldData)
    await field.updateNameAsync('New Field Name')
    expect(field.name).toBe('New Field Name')
    expect(globalThis.__mutations).toEqual([
      {
        type: MutationTypes.UPDATE_FIELD_NAME,
        args: {
          fieldId: field.id,
          name: 'New Field Name',
        },
      },
    ])
  })
})
