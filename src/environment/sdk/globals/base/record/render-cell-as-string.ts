import { Field } from '../field'
import { DateTime, Duration } from 'luxon'

type DateFormat = 'local' | 'friendly' | 'us' | 'european' | 'iso' | undefined
/**
 * Converts the string format from Airtable's date fields into
 * something that Luxon can understand.
 *
 * @param format - The Airtable name of the format.
 */
const dateFormats = (format: DateFormat): string => {
  if (format === 'local' && __defaultDateLocale) {
    format = __defaultDateLocale
  }
  const formats: { [key: string]: string } = {
    local: 'L/d/yyyy',
    friendly: 'LLLL d, yyyy',
    us: 'L/d/yyyy',
    european: 'd/L/yyyy',
    iso: 'yyyy-LL-dd',
  }
  if (!format) {
    return formats.local
  }
  return formats[format as keyof typeof formats] || formats.local
}

const formatCreatedModifiedTime = (value: string, field: Field): string => {
  const result = field.options?.result as
    | { options: unknown; type: string }
    | undefined
  const formatOptions = result?.options as
    | {
        dateFormat: {
          name: DateFormat
        }
        timeFormat: { name: '24hour' | '12hour' }
        timeZone: string
      }
    | undefined
  const date = DateTime.fromISO(value)
  const format = [dateFormats(formatOptions?.dateFormat?.name)]
  if (result && result.type === 'dateTime') {
    format.push(
      formatOptions?.timeFormat?.name === '24hour' ? 'HH:mm' : 'h:mma'
    )
  }
  return date.isValid && formatOptions
    ? date
        .setZone(
          typeof formatOptions.timeZone === 'string'
            ? formatOptions.timeZone
            : 'utc'
        )
        .toFormat(format.join(' '))
        .toLocaleLowerCase()
    : value
}

/**
 * An object containing functions to render different field types. If a field
 * type is not here, we just return the value as is.
 *
 * Each function takes the field value (and optionally the field object) and returns
 * a string representation of that value.
 */
const fieldTypeRenderers = {
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#BARCODE
   */
  barcode: (value: { text: string | number }): string | number => value.text,
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#BUTTON
   */
  button: (value: { label?: string; url: string }): string => value.url,
  /**
   * Checkboxes are rendered as "checked" or "".
   * @see https://airtable.com/developers/extensions/api/FieldType#CHECKBOX
   */
  checkbox: (value: boolean): string => (value ? 'checked' : ''),
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#CREATED_BY
   */
  createdBy: (value: { name: string }): string => value.name,
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#CREATED_TIME
   */
  createdTime: (value: string, field: Field): string =>
    formatCreatedModifiedTime(value, field),
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#CURRENCY
   */
  currency: (value: number, field: Field): string =>
    `${field.options?.symbol || ''}${value.toFixed(
      typeof field.options?.precision === 'number' ? field.options.precision : 2
    )}`,
  /**
   * Note we are converting date formats from Moment.js to luxton using dateFormats()
   *
   * @see https://airtable.com/developers/extensions/api/FieldType#DATE
   */
  date: (value: string, field: Field): string => {
    const date = DateTime.fromISO(value)
    const dateFormat = field.options?.dateFormat as
      | { name: DateFormat }
      | undefined
    return date.isValid && dateFormat
      ? date.toFormat(dateFormats(dateFormat.name))
      : value
  },
  /**
   * Note we are converting date formats from Moment.js to luxton using dateFormats()
   *
   * @see https://airtable.com/developers/extensions/api/FieldType#DATE_TIME
   */
  dateTime: (value: string, field: Field): string => {
    const date = DateTime.fromISO(value)
    if (!date.isValid) {
      return value
    }
    const dateFormat = field.options?.dateFormat as
      | { name: DateFormat }
      | undefined
    const timeFormat = field.options?.timeFormat as
      | { name: '24hour' | '12hour' }
      | undefined
    const formattedDate = dateFormats(dateFormat?.name)
    const formattedTime =
      timeFormat && timeFormat.name === '24hour' ? 'HH:mm' : 'h:mma'
    return date
      .setZone(
        typeof field.options?.timeZone === 'string'
          ? field.options.timeZone
          : 'utc'
      )
      .toFormat(`${formattedDate} ${formattedTime}`)
      .toLocaleLowerCase()
  },
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#DURATION
   */
  duration: (value: number, field: Field): string => {
    const duration = Duration.fromObject({ seconds: value })
    const durationFormat = field.options?.durationFormat as string | undefined
    if (!duration.isValid) {
      return value.toString()
    }
    return duration.toFormat(durationFormat || 'h:mm:ss')
  },
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#EXTERNAL_SYNC_SOURCE
   */
  externalSyncSource: (value: { name: string }): string => value.name,
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#LAST_MODIFIED_BY
   */
  lastModifiedBy: (value: { name: string }): string => value.name,
  /**
   * Unliked date and dateTime, last modified time is both a date or a dateTime field.
   *
   * @see https://airtable.com/developers/extensions/api/FieldType#LAST_MODIFIED_TIME
   */
  lastModifiedTime: (value: string, field: Field): string =>
    formatCreatedModifiedTime(value, field),
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#MULTIPLE_ATTACHMENTS
   */
  multipleAttachments: (value: { filename: string; url: string }[]): string =>
    value
      .map((attachment) => `${attachment.filename} (${attachment.url})`)
      .join(', '),
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#MULTIPLE_COLLABORATORS
   */
  multipleCollaborators: (value: { name: string }[]): string =>
    value.map((collaborator) => collaborator.name).join(', '),
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#MULTIPLE_LOOKUP_VALUES
   */
  multipleLookupValues: (value: unknown[]): string => value.join(', '),
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#MULTIPLE_RECORD_LINKS
   */
  multipleRecordLinks: (value: { name: string }[]): string =>
    value.map((record) => record.name).join(', '),
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#MULTIPLE_SELECTS
   */
  multipleSelects: (value: { name: string }[]): string =>
    value.map((choice) => choice.name).join(', '),
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#NUMBER
   */
  number: (value: number, field: Field): string =>
    value.toFixed(
      typeof field.options?.precision === 'number' ? field.options.precision : 2
    ),
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#PERCENT
   */
  percent: (value: number, field: Field): string =>
    (value * 100).toFixed(
      typeof field.options?.precision === 'number' ? field.options.precision : 2
    ) + '%',
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#ROLLUP
   */
  rollup: (value: string[]): string => value.join(', '),
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#SINGLE_COLLABORATOR
   */
  singleCollaborator: (value: { name: string }): string => value.name,
  /**
   * @see https://airtable.com/developers/extensions/api/FieldType#SINGLE_SELECT
   */
  singleSelect: (value: { name: string }): string => value.name,
}

/**
 * Renders a cell for use in a getCellValueAsString function.
 */
const renderCellAsString = (field: Field, value: unknown) => {
  // @ts-ignore
  if (typeof fieldTypeRenderers[field.type] !== 'undefined') {
    // @ts-ignore
    return fieldTypeRenderers[field.type](value, field)
  }
  return value
}

export { renderCellAsString }
