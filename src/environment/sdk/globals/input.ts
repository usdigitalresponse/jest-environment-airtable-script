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

interface ExtensionInputConfig {
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
  viewAsync?: (label: string, table: Table | string) => string
  fieldAsync?: (label: string, table: Table | string) => string
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
  config: () => {
    checkMockInput('config')
    // @ts-ignore
    return (__mockInput as MockInput).config() || {}
  },
}

const extensionInput: ExtensionInput = {
  textAsync: (label) =>
    new Promise((resolve) => {
      checkMockInput('textAsync')
      // @ts-ignore
      resolve((__mockInput as MockInput).textAsync(label))
    }),
  buttonsAsync: (label, options): Promise<string> =>
    new Promise((resolve) => {
      checkMockInput('buttonsAsync')
      // @ts-ignore
      resolve((__mockInput as MockInput).buttonsAsync(label, options))
    }),
  tableAsync: (label) =>
    new Promise((resolve) => {
      checkMockInput('tableAsync')
      // @ts-ignore
      const tableId = (__mockInput as MockInput).tableAsync(label)
      // @ts-ignore
      resolve(globalThis.base.getTable(tableId))
    }),
  viewAsync: (label, table) =>
    new Promise((resolve) => {
      checkMockInput('viewAsync')
      const tableObj =
        // @ts-ignore
        typeof table === 'string' ? globalThis.base.getTable(table) : table
      // @ts-ignore
      const viewId = (__mockInput as MockInput).viewAsync(label, table)
      resolve(tableObj.getView(viewId))
    }),
  fieldAsync: (label, table) =>
    new Promise((resolve) => {
      checkMockInput('fieldAsync')
      const tableObj =
        // @ts-ignore
        typeof table === 'string' ? globalThis.base.getTable(table) : table
      // @ts-ignore
      const fieldId = (__mockInput as MockInput).fieldAsync(label, table)
      resolve(tableObj.getField(fieldId))
    }),
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
   * @todo need to document that the implementer is on their own for parsing
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
