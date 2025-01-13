import type { Collaborator } from '../collaborator'
import { Table } from './table'
import { FieldType } from '@airtable/blocks/models'
import { allowedCreateFieldTypes } from './allowed-create-field-types'
import { pascalCase } from '../../lib/pascal-case'
import { MutationTypes } from '../../../mutation-types'
import { FixtureTable } from '../globals'

type Base = {
  id: string | null
  name: string | null
  activeCollaborators: Array<Collaborator> | null
  tables: Array<Table> | null
  getCollaborator: (idOrNameOrEmail: string) => Collaborator
  getTable: (tableIdOrName: string) => Table
  createTableAsync: (
    name: string,
    fields: Array<{
      name: string
      type: FieldType
      options?: { [key: string]: unknown } | null
      description?: string | null
    }>
  ) => Promise<string>
}

const base: Base = {
  /**
   * A getter that returns the ID of the current base.
   *
   * @type {string}
   */
  get id() {
    return __base.id || null
  },

  /**
   * A getter that returns the name of the current base.
   *
   * @type {string}
   */
  get name() {
    return __base.name || null
  },

  /**
   * Returns the active collaborators of the current base. This is referred to as the
   * "collaborators" in the base data generated by the Test Generator extension.
   *
   * @todo set the type from the Collaborator model
   * @type {Array<{ id: string, name: string }>}
   */
  get activeCollaborators() {
    return __base.collaborators || null
  },

  /**
   * A list of all the tables defined in the base. We wipe all the record
   * data out of the tables and views to mirror a model of the way tables exist
   * in the SDK as much as possible.
   *
   * @todo set the type from the Table model
   * @type {Array<{ id: string, name: string }>}
   */
  get tables() {
    return __base.tables.length > 0
      ? __base.tables.map((table: FixtureTable) => new Table(table))
      : null
  },

  /**
   * Returns the collaborator with the given ID, name, or email address.
   */
  getCollaborator: (idOrNameOrEmail) => {
    if (!__base.collaborators) {
      throw new Error('No collaborators found in the base')
    }
    const collaborator = __base.collaborators.find(
      (collaborator: Collaborator) =>
        collaborator.id === idOrNameOrEmail ||
        collaborator.name === idOrNameOrEmail ||
        collaborator.email === idOrNameOrEmail
    )
    if (!collaborator) {
      throw new Error(
        `No collaborator matching "${idOrNameOrEmail}" found in base "${__base.name}"`
      )
    }
    return collaborator
  },

  /**
   * Returns the table with the given ID or name.
   */
  getTable: (tableIdOrName) => {
    if (!__base.tables) {
      throw new Error('No tables found in the base')
    }
    const table = __base.tables.find(
      (table) => table.id === tableIdOrName || table.name === tableIdOrName
    )
    if (!table) {
      throw new Error(
        `No table matching "${tableIdOrName}" found in base "${__base.name}"`
      )
    }
    return new Table(table)
  },

  /**
   * Creates a new table in the base.
   */
  createTableAsync: async (name, fields) =>
    new Promise((resolve, reject) => {
      if (
        fields.some((field) => !allowedCreateFieldTypes.includes(field.type))
      ) {
        reject(new Error(`Can't create table: unsupported field type`))
      }

      const id = `tbl${pascalCase(name)}${__base.tables.length + 1}`

      __base.tables.push({
        id,
        name,
        description: null,
        fields: fields.map((field) => ({
          id: `fld${pascalCase(name)}`,
          name: field.name,
          type: field.type,
          options: field.options || null,
          description: field.description || null,
        })),
        views: [],
        records: [],
      })
      __mutations.push({
        type: MutationTypes.CREATE_TABLE,
        args: {
          tableId: id,
          name,
          fields,
        },
      })
      resolve(id)
    }),
}

// @ts-ignore
globalThis.base = base

export { base }
