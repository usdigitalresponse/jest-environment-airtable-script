/* eslint-disable no-var,@typescript-eslint/no-unsafe-function-type */
import type { Collaborator } from './collaborator'
import type { DefaultCursor } from './cursor'
import type { Mutation } from './mutations'
import type { FieldType } from './base/field'
import type { ViewType } from './base/view'

/**
 * The "fixture" types are loose types used to defined base objects
 * exported from the Test Fixture Generator extension. Since these
 * are pretty inconsisstent, there are anumber of optional keys.
 */
type FixtureField = {
  id: string
  name: string
  description?: string | null
  type: FieldType
  options?: { [key: string]: unknown } | null
}

type FixtureRecord = {
  id: string
  name?: string
  createdTime?: string
  cellValuesByFieldId: { [key: string]: unknown }
}

type FixtureView = {
  id: string
  name: string
  type: ViewType
  description?: string
  records: [{ id: string; name?: string }]
}

type FixtureTable = {
  id: string
  name: string
  description?: string | null
  fields: FixtureField[]
  views: FixtureView[]
  records: FixtureRecord[]
}

type FixtureBase = {
  id: string
  name: string
  color?: string
  tables: FixtureTable[]
  collaborators: Collaborator[]
}

/**
 * Declare all the global variables that are available in the scripting environment.
 */
declare global {
  var __currentUser: Collaborator | undefined
  var __inAutomation: boolean
  var __base: FixtureBase
  var __defaultCursor: DefaultCursor | false
  var __isAirtableScriptTestEnvironment: boolean
  var __secretValues: string[]
  var __mutations: Mutation[]
  var __mockInput: { [key: string]: unknown } | undefined
  var __mockFetch: Function | false
  var __defaultDateLocale: 'friendly' | 'us' | 'european' | 'iso'
} // Extend globalThis to include __mutations

export { FixtureTable, FixtureField, FixtureRecord, FixtureView, FixtureBase }
