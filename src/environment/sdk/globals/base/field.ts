import { MutationTypes } from '../../../mutation-types'
import type { FixtureField } from '../globals.d'

type FieldType =
  | 'aiText'
  | 'autoNumber'
  | 'barcode'
  | 'button'
  | 'checkbox'
  | 'count'
  | 'createdBy'
  | 'createdTime'
  | 'currency'
  | 'date'
  | 'dateTime'
  | 'duration'
  | 'email'
  | 'externalSyncSource'
  | 'formula'
  | 'lastModifiedBy'
  | 'lastModifiedTime'
  | 'multilineText'
  | 'multipleAttachments'
  | 'multipleCollaborators'
  | 'multipleLookupValues'
  | 'multipleRecordLinks'
  | 'multipleSelects'
  | 'number'
  | 'percent'
  | 'phoneNumber'
  | 'rating'
  | 'richText'
  | 'rollup'
  | 'singleCollaborator'
  | 'singleLineText'
  | 'singleSelect'
  | 'url'

/**
 * A field belonging to a table in your base. Each table has at least one field.
 */
class Field {
  /**
   * The unique ID of this field.
   */
  id: string
  /**
   * The name of the field.
   */
  name: string
  /**
   * The description of this field, if it has one.
   */
  description: string | null
  /**
   * The type of the field, such as Email, Percent, or Linked Records.
   */
  type: FieldType
  /**
   * The configuration options of the field. The structure of the field's options depend on the field's type.
   */
  options?: null | {
    [key: string]: unknown
  }

  constructor(data: FixtureField) {
    this.id = data.id
    this.name = data.name
    this.type = data.type
    this.options = data.options || null
    this.description = data.description || null
  }

  /**
   * true if this field is computed, false otherwise. A field is "computed" if it's value is not set by user input (e.g. autoNumber, formula, etc.).
   */
  get isComputed(): boolean {
    const computedFieldTypes = [
      'formula',
      'rollup',
      'count',
      'multipleLookupValues',
      'autoNumber',
    ]
    return computedFieldTypes.includes(this.type)
  }

  /**
   * Updates the description for this field.
   * To remove an existing description, pass '' as the new description. null is also accepted and will be coerced to '' for consistency with field creation.
   * Throws an error if the user does not have permission to update the field, or if invalid description is provided.
   * This action is asynchronous: you must add await before each call to this method to ensure it takes effect.
   *
   * @param description - The new description for this field, or null to remove the description.
   */
  updateDescriptionAsync(description: string | null): Promise<void> {
    return new Promise((resolve) => {
      this.description = description || ''
      __mutations.push({
        type: MutationTypes.UPDATE_FIELD_DESCRIPTION,
        args: {
          fieldId: this.id,
          description: this.description,
        },
      })
      resolve()
    })
  }

  /**
   * Updates the options for this field.
   * Throws an error if the user does not have permission to update the field, if invalid options are provided, if this field has no writable options, or if updates to this field type is not supported. See Cell values & field options for the options format for each field type.
   * @todo Check if the options are valid for the field type.
   *
   * @param options - New options for the field.
   */
  updateOptionsAsync(options: unknown): Promise<void> {
    return new Promise((resolve) => {
      this.options = options as { [key: string]: unknown } | null
      globalThis.__mutations.push({
        type: MutationTypes.UPDATE_FIELD_CONFIG,
        args: {
          fieldId: this.id,
          options: this.options,
        },
      })
      resolve()
    })
  }

  /**
   * Updates the name for this field.
   * Throws an error if the user does not have permission to update the field, or if invalid name is provided.
   * @todo - Check if the name is valid.
   *
   * @param name - New name for the field.
   */
  updateNameAsync(name: string): Promise<void> {
    return new Promise((resolve) => {
      this.name = name
      __mutations.push({
        type: MutationTypes.UPDATE_FIELD_NAME,
        args: {
          fieldId: this.id,
          name: this.name,
        },
      })
      resolve()
    })
  }
}

export { Field, FieldType }
