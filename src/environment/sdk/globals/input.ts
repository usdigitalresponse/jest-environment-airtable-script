/* eslint-disable @typescript-eslint/no-unsafe-function-type */
// Eslint incorrectly flags the ExtensionInputConfig type as unsafe
import './base/index'
import { Table } from './base/table'
import { View } from './base/view'
import { Field } from './base/field'
import { Record } from './base/record'
import { RecordQueryResult } from '../globals/base/record-query-result'
import { base } from './base/index'

type ConfigItem = {
  type: string
  key: string
  label: string
  description?: string
  options?: unknown
}

/**
 * A plain record type used when a mock input directly sets a record object
 * that has not been turned into a class by a Table.
 */
type EmptyRecord = {
  id: string
  [key: string]: unknown
}

type ExtensionInputConfig = {
  (settings: { title: string; description?: string; items: unknown[] }): {
    [key: string]: Table | Field | string | number
  }
  table: Function
  field: Function
  view: Function
  text: Function
  number: Function
  select: Function
}

type MockInput = {
  config?: () => { [key: string]: unknown }
  textAsync?: (label: string) => string
  buttonsAsync?: (
    label: string,
    options: Array<
      | string
      | {
          label: string
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value?: any
          variant?: 'default' | 'danger' | 'primary' | 'secondary'
        }
    >
  ) => string
  tableAsync?: (label: string) => string
  viewAsync?: (
    label: string,
    tableOrTableNameOrTableId: Table | string
  ) => string
  fieldAsync?: (
    label: string,
    tableOrTableNameOrTableId: Table | string
  ) => string
  recordAsync?: (
    label: string,
    options: {
      source: Table | View | Array<Record> | RecordQueryResult
      options: {
        fields?: Array<Field | string>
        shouldAllowCreatingRecord?: boolean
      }
    }
  ) => string
  fileAsync?: (
    label: string,
    options?: {
      hasHeaderRow?: boolean
      allowedFileTypes?: Array<string>
      useRawValues?: boolean
    }
  ) => { file: File; parsedContents: unknown }
}

type AutomationInput = {
  config: () => { [key: string]: unknown }
}

type ExtensionInput = {
  textAsync: (label: string) => Promise<string>
  buttonsAsync: (
    label: string,
    options: Array<
      | string
      | {
          label: string
          value?: unknown
          variant?: 'default' | 'danger' | 'primary' | 'secondary'
        }
    >
  ) => Promise<string>
  tableAsync: (label: string) => Promise<Table>
  viewAsync: (label: string, table: Table | string) => Promise<View>
  fieldAsync: (label: string, table: Table | string) => Promise<Field>
  recordAsync: (
    label: string,
    source: Table | View | Array<Record> | RecordQueryResult,
    options: {
      fields?: Array<Field | string>
      shouldAllowCreatingRecord?: boolean
    }
  ) => Promise<Record | EmptyRecord | null>
  fileAsync: (
    label: string,
    options?: {
      hasHeaderRow?: boolean
      allowedFileTypes?: Array<string>
      useRawValues?: boolean
    }
  ) => Promise<{ file: File; parsedContents: unknown }>
  config: ExtensionInputConfig
}

/**
 * Checks whether a mock input method exists. If not, throws an error.
 *
 * @param string The name of the input method.
 */
const checkMockInput = (method: string): void => {
  if (!__mockInput) {
    throw new Error('mockInput is not defined')
  }
  if (!__mockInput[method]) {
    throw new Error(
      `input.${method}() is called, but mockInput.${method}() is not implemented`
    )
  }
}

const automationInput: AutomationInput = {
  /**
   * Automations only get one source of input: an object of config values.
   * Returns an object with all input keys mapped to their corresponding values.
   *
   * @see https://airtable.com/developers/scripting/api/input#config
   */
  config: () => {
    checkMockInput('config')
    // @ts-ignore
    return (__mockInput as MockInput).config() || {}
  },
}

const extensionInput: ExtensionInput = {
  /**
   * Prompts the user to enter text. It's similar to prompt() in normal JavaScript, but looks much nicer.
   *
   * @see https://airtable.com/developers/scripting/api/input#text-async
   */
  textAsync: (label) =>
    new Promise((resolve) => {
      checkMockInput('textAsync')
      // @ts-ignore
      resolve((__mockInput as MockInput).textAsync(label))
    }),

  /**
   * Prompts the user to choose one from a list of several options.

You can mix and match both string and object options. The function will return either the label string, or the value from the object if one is specified.
   * 
   * @see https://airtable.com/developers/scripting/api/input#buttons-async 
   */
  buttonsAsync: (label, options): Promise<string> =>
    new Promise((resolve) => {
      checkMockInput('buttonsAsync')
      // @ts-ignore
      resolve((__mockInput as MockInput).buttonsAsync(label, options))
    }),

  /**
   * Prompts the user to choose a table from a list of all tables in the base.
   *
   * @see https://airtable.com/developers/scripting/api/input#table-async
   */
  tableAsync: (label) =>
    new Promise((resolve) => {
      checkMockInput('tableAsync')
      // @ts-ignore
      const tableId = (__mockInput as MockInput).tableAsync(label)
      // @ts-ignore
      resolve(globalThis.base.getTable(tableId))
    }),
  /**
   * Prompts the user to choose a view belonging to the table specified by tableOrTableNameOrTableId
   *
   * @see https://airtable.com/developers/scripting/api/input#view-async
   */
  viewAsync: (label, tableOrTableNameOrTableId) =>
    new Promise((resolve) => {
      checkMockInput('viewAsync')
      const table =
        typeof tableOrTableNameOrTableId === 'string'
          ? // @ts-ignore
            globalThis.base.getTable(tableOrTableNameOrTableId)
          : tableOrTableNameOrTableId
      // @ts-ignore
      const viewId = (__mockInput as MockInput).viewAsync(label, table)
      resolve(table.getView(viewId))
    }),
  /**
   * Prompts the user to choose a field belonging to the table specified by tableOrTableNameOrTableId.
   *
   * @see https://airtable.com/developers/scripting/api/input#field-async
   */
  fieldAsync: (label, tableOrTableNameOrTableId) =>
    new Promise((resolve) => {
      checkMockInput('fieldAsync')
      const table =
        typeof tableOrTableNameOrTableId === 'string'
          ? // @ts-ignore
            globalThis.base.getTable(tableOrTableNameOrTableId)
          : tableOrTableNameOrTableId
      // @ts-ignore
      const fieldId = (__mockInput as MockInput).fieldAsync(
        label,
        tableOrTableNameOrTableId
      )
      resolve(table.getField(fieldId))
    }),
  /**
   * Expands a list of records in the Airtable UI, and prompts the user to pick one.

If the user picks a record, the record instance is returned. If the user dismisses the picker, null is returned. If there are no records to pick from in the source, the picker is not shown and null is returned.
   *
   * @see https://airtable.com/developers/scripting/api/input#record-async
   */
  recordAsync: (
    label,
    source: Table | View | Array<Record> | RecordQueryResult,
    options: {
      fields?: Array<Field | string>
      shouldAllowCreatingRecord?: boolean
    }
  ): Promise<Record | EmptyRecord | null> =>
    new Promise((resolve, reject) => {
      checkMockInput('recordAsync')
      // @ts-ignore
      const recordId = (__mockInput as MockInput).recordAsync(label, {
        options,
        source,
      })
      if (source instanceof Table || source instanceof View) {
        source.selectRecordAsync(recordId).then((record) => resolve(record))
        return
      }
      if (source instanceof RecordQueryResult) {
        const record = source.getRecord(recordId)
        resolve(record || null)
        return
      }
      if (Array.isArray(source)) {
        const record = source.find((record) => record.id === recordId)
        resolve(record || null)
        return
      }
      reject(new Error('Invalid source type'))
    }),
  /**
   * Prompts the user to import a file.
   *
   * @todo need to document that the implementer is on their own for parsing
   * @see https://airtable.com/developers/scripting/api/input#file-async
   */
  fileAsync: (
    label,
    options?: {
      hasHeaderRow?: boolean
      allowedFileTypes?: Array<string>
      useRawValues?: boolean
    }
  ) =>
    new Promise((resolve) => {
      checkMockInput('fileAsync')
      // @ts-ignore
      resolve((__mockInput as MockInput).fileAsync(label, options))
    }),
  /**
   * The extension input object exposes settings configurable through the settings
   * button of the extension.
   *
   * @see https://airtable.com/developers/scripting/api/config
   */
  config: Object.assign(
    (settings: {
      title: string
      description?: string
      items: unknown[]
    }): { [key: string]: Table | Field | string | number } => {
      checkMockInput('config')
      // @ts-ignore
      return (__mockInput as MockInput).config(settings, base)
    },
    {
      /**
       * Defines a setting for a Table.
       *
       * @see https://airtable.com/developers/scripting/api/config#input-config-table
       */
      table: (
        key: string,
        options?:
          | {
              label?: string | undefined
              description?: string | undefined
            }
          | undefined
      ): ConfigItem => {
        return {
          type: 'table',
          key,
          label: options?.label || key,
          description: options?.description,
        }
      },
      /**
       * Defines a setting for a Field.
       *
       * @see https://airtable.com/developers/scripting/api/config#input-config-field
       */
      field: (
        key: string,
        options?:
          | {
              label?: string | undefined
              description?: string | undefined
            }
          | undefined
      ): ConfigItem => {
        return {
          type: 'field',
          key,
          label: options?.label || key,
          description: options?.description,
        }
      },
      /**
       * Defines a setting for a View.
       *
       * @see https://airtable.com/developers/scripting/api/config#input-config-view
       */
      view: (
        key: string,
        options?:
          | {
              parentTable: string
              label?: string | undefined
              description?: string | undefined
            }
          | undefined
      ): ConfigItem => {
        return {
          type: 'view',
          key,
          label: options?.label || key,
          description: options?.description,
        }
      },
      /**
       * Defines a setting for a text variable.
       *
       * @see https://airtable.com/developers/scripting/api/config#input-config-text
       */
      text: (
        key: string,
        options?:
          | {
              label?: string | undefined
              description?: string | undefined
            }
          | undefined
      ): ConfigItem => {
        return {
          type: 'text',
          key,
          label: options?.label || key,
          description: options?.description,
        }
      },
      /**
       * Defines a setting for a number variable.
       *
       * @see https://airtable.com/developers/scripting/api/config#input-config-number
       */
      number: (
        key: string,
        options?:
          | {
              label?: string | undefined
              description?: string | undefined
            }
          | undefined
      ): ConfigItem => {
        return {
          type: 'number',
          key,
          label: options?.label || key,
          description: options?.description,
        }
      },
      /**
       * Defines a setting for a select option.
       * The value returned will be the string value of the currently selected option.
       *
       * @see https://airtable.com/developers/scripting/api/config#input-config-select
       */
      select: (
        key: string,
        options: {
          options: {
            value: string
            label?: string | undefined
          }[]
          label?: string | undefined
          description?: string | undefined
        }
      ): ConfigItem => {
        return {
          type: 'select',
          key,
          label: options?.label || key,
          description: options?.description,
          options: options.options,
        }
      },
    }
  ),
}

const input: AutomationInput | ExtensionInput = globalThis.__inAutomation
  ? automationInput
  : extensionInput

// @ts-ignore
globalThis.input = input

export { automationInput, extensionInput, input, MockInput }
