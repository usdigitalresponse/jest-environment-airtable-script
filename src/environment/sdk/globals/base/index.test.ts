import { base } from './index'

// @ts-ignore
globalThis.__base = {
  name: 'Test Base',
  id: 'app123',
  tables: [
    {
      id: 'tbl1',
      name: 'Table 1',
    },
    {
      id: 'tbl2',
      name: 'Table 2',
    },
  ],
  collaborators: [
    {
      id: 'usr1',
      email: 'name@example.com',
      name: 'Name',
    },
    {
      id: 'usr2',
      email: 'name2@example.com',
      name: 'Name 2',
    },
  ],
}

describe('Base SDK test', () => {
  beforeEach(() => {
    globalThis.__mutations = []
  })

  describe('Properties', () => {
    it('get the base ID', () => {
      expect(base.id).toBe('app123')
    })

    it('get the base Name', () => {
      expect(base.name).toBe('Test Base')
    })

    it('gets the active collaborators', () => {
      const collaborators = base.activeCollaborators
      if (!collaborators) {
        throw new Error('No collaborators found')
      }
      expect(collaborators.length).toBe(2)
      expect(collaborators[0].id).toBe('usr1')
      expect(collaborators[0].email).toBe('name@example.com')
    })

    it('gets all tables', () => {
      const tables = base.tables
      if (!tables) {
        throw new Error('No tables found')
      }
      expect(tables.length).toBe(2)
      expect(tables[0].id).toBe('tbl1')
      expect(tables[0].name).toBe('Table 1')
    })
  })

  describe('Collaborators', () => {
    it('finds a collaborator by ID', () => {
      const collaborator = base.getCollaborator('usr1')
      expect(collaborator.id).toBe('usr1')
    })

    it('finds a collaborator by name', () => {
      const collaborator = base.getCollaborator('Name')
      expect(collaborator.name).toBe('Name')
    })

    it('finds a collaborator by email', () => {
      const collaborator = base.getCollaborator('name@example.com')
      expect(collaborator.email).toBe('name@example.com')
    })
  })

  describe('getTable', () => {
    it('finds a table by ID', () => {
      const table = base.getTable('tbl1')
      expect(table.id).toBe('tbl1')
    })

    it('finds a table by name', () => {
      const table = base.getTable('Table 1')
      expect(table.name).toBe('Table 1')
    })
  })

  describe('createTable', () => {
    it('creates a table', async () => {
      const tableId = await base.createTableAsync('New Table', [
        {
          name: 'Field 1',
          type: 'singleLineText',
        },
        {
          name: 'Field 2',
          type: 'number',
        },
      ])
      expect(tableId).toBe('tblNewTable3')
      expect(globalThis.__mutations).toEqual([
        {
          type: MutationTypes.CREATE_TABLE,
          args: {
            tableId: 'tblNewTable3',
            name: 'New Table',
            fields: [
              {
                name: 'Field 1',
                type: 'singleLineText',
              },
              {
                name: 'Field 2',
                type: 'number',
              },
            ],
          },
        },
      ])
    })

    it('throws an error if a field has an invalid type', async () => {
      expect(async () =>
        base.createTableAsync('New Table', [
          {
            name: 'Field 1',
            type: 'invalidType',
          },
        ])
      ).rejects.toThrow("Can't create table: unsupported field type")
    })
  })
})
