/**
 * The list of field types that can be created in a table using the
 * scripting SDK.
 *
 * @see https://airtable.com/developers/scripting/api/table#create-field-async
 */
const allowedCreateFieldTypes = [
  'checkbox',
  'singleSelect',
  'multipleSelects',
  'singleCollaborator',
  'multipleCollaborators',
  'number',
  'percent',
  'currency',
  'duration',
  'singleLineText',
  'email',
  'url',
  'multilineText',
  'phoneNumber',
  'richText',
  'barcode',
  'multipleAttachments',
  'date',
  'dateTime',
  'rating',
  'multipleRecordLinks',
]

export { allowedCreateFieldTypes }
