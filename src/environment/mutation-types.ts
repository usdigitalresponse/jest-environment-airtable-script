/**
 * A list of mutation types that can be used in the environment.
 * Taken from:
 * @see https://github.com/Airtable/blocks/blob/6c0a2ed709a34e28cb3e999fc6cc6406eaa3817b/packages/sdk/src/types/mutations.ts
 */
const MutationTypes = Object.freeze({
  SET_MULTIPLE_RECORD_CELL_VALUES: 'setMultipleRecordCellValues' as const,
  DELETE_RECORD: 'deleteRecord' as const,
  CREATE_RECORD: 'createRecord' as const,
  CREATE_FIELD: 'createField' as const,
  UPDATE_FIELD_CONFIG: 'updateFieldConfig' as const,
  UPDATE_FIELD_DESCRIPTION: 'updateFieldDescription' as const,
  UPDATE_FIELD_NAME: 'updateFieldName' as const,
  CREATE_TABLE: 'createTable' as const,
})

export { MutationTypes }
