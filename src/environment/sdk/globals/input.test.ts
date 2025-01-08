import './index'
import { automationInput, extensionInput } from './input'

// @ts-ignore
globalThis.__base = {
  name: 'Test Base',
  id: 'app123',
  tables: [
    {
      id: 'tbl1',
      name: 'Table 1',
      fields: [
        {
          id: 'fld1',
          name: 'Field 1',
          type: 'text',
        },
        {
          id: 'fld2',
          name: 'Field 2',
          type: 'number',
        },
      ],
      views: [
        {
          id: 'view1',
          name: 'View 1',
          type: 'grid',
          records: [
            {
              id: 'rec2',
              name: 'rec2',
            },
          ],
        },
        {
          id: 'view2',
          name: 'View 2',
          type: 'grid',
          records: [
            {
              id: 'rec2',
              name: 'rec2',
            },
          ],
        },
      ],
      records: [
        {
          id: 'rec1',
          cellValuesByFieldId: {
            fld1: 'Value 1',
            fld2: 10,
          },
        },
        {
          id: 'rec2',
          cellValuesByFieldId: {
            fld1: 'Value 2',
            fld2: 20,
          },
        },
      ],
    },
    {
      id: 'tbl2',
      name: 'Table 2',
    },
  ],
}

describe('automationInput', () => {
  it('should return the results of a config callback', () => {
    globalThis.__mockInput = {
      config: () => ({ key: 'value' }),
    }
    const result = automationInput.config()
    expect(result).toEqual({ key: 'value' })
  })

  it('should throw an error if no config callback is provided', () => {
    globalThis.__mockInput = {}
    expect(() => automationInput.config()).toThrow(
      'input.config() is called, but mockInput.config() is not implemented'
    )
  })
})

describe('extensionInput', () => {
  describe('textAsync', () => {
    it('should return the results of a textAsync callback', async () => {
      const randomLabel = `Text label ${Math.random()}`
      globalThis.__mockInput = {
        textAsync: (label: string) => {
          if (label === randomLabel) {
            return 'some text'
          }
          return 'missing text'
        },
      }
      const result = await extensionInput.textAsync(randomLabel)
      expect(result).toEqual('some text')
    })

    it('should throw an error if no textAsync callback is provided', async () => {
      globalThis.__mockInput = {}
      const randomLabel = `Text label ${Math.random()}`
      await expect(extensionInput.textAsync(randomLabel)).rejects.toThrow(
        'input.textAsync() is called, but mockInput.textAsync() is not implemented'
      )
    })
  })

  describe('buttonsAsync', () => {
    it('should return the results of a buttonsAsync callback', async () => {
      const randomLabel = `Buttons label ${Math.random()}`
      globalThis.__mockInput = {
        buttonsAsync: (label: string, options: any) => {
          if (label === randomLabel) {
            return options[1]
          }
          return 'missing buttons'
        },
      }

      const result = await extensionInput.buttonsAsync(randomLabel, [
        'option1',
        'option2',
      ])
      expect(result).toEqual('option2')
    })

    it('should throw an error if no buttonsAsync callback is provided', async () => {
      globalThis.__mockInput = {}
      const randomLabel = `Buttons label ${Math.random()}`
      await expect(
        extensionInput.buttonsAsync(randomLabel, ['option1', 'option2'])
      ).rejects.toThrow(
        'input.buttonsAsync() is called, but mockInput.buttonsAsync() is not implemented'
      )
    })
  })

  describe('tableAsync', () => {
    it('should return the results of a tableAsync callback', async () => {
      const randomLabel = `Table label ${Math.random()}`
      globalThis.__mockInput = {
        tableAsync: (label: string) => {
          if (label === randomLabel) {
            return 'tbl1'
          }
          return 'missing table'
        },
      }
      const result = await extensionInput.tableAsync(randomLabel)
      expect(result.id).toEqual('tbl1')
    })

    it('should throw an error if no tableAsync callback is provided', async () => {
      globalThis.__mockInput = {}
      const randomLabel = `Table label ${Math.random()}`
      await expect(extensionInput.tableAsync(randomLabel)).rejects.toThrow(
        'input.tableAsync() is called, but mockInput.tableAsync() is not implemented'
      )
    })
  })

  describe('viewAsync', () => {
    it('should return the results of a viewAsync callback', async () => {
      const randomLabel = `View label ${Math.random()}`
      globalThis.__mockInput = {
        viewAsync: (label: string) => {
          if (label === randomLabel) {
            return 'view1'
          }
          return 'missing view'
        },
      }
      const result = await extensionInput.viewAsync(randomLabel, 'tbl1')
      expect(result.id).toEqual('view1')
    })

    it('should accept a table object in the viewAsync method', async () => {
      const randomLabel = `View label ${Math.random()}`
      globalThis.__mockInput = {
        viewAsync: (label: string) => {
          if (label === randomLabel) {
            return 'view2'
          }
          return 'missing view'
        },
      }
      // @ts-ignore
      const table = globalThis.base.getTable('tbl1')
      const result = await extensionInput.viewAsync(randomLabel, table)
      expect(result.id).toEqual('view2')
    })

    it('should throw an error if no viewAsync callback is provided', async () => {
      globalThis.__mockInput = {}
      const randomLabel = `View label ${Math.random()}`
      await expect(
        extensionInput.viewAsync(randomLabel, 'tbl1')
      ).rejects.toThrow(
        'input.viewAsync() is called, but mockInput.viewAsync() is not implemented'
      )
    })
  })

  describe('fieldAsync', () => {
    it('should return the results of a fieldAsync callback', async () => {
      const randomLabel = `Field label ${Math.random()}`
      globalThis.__mockInput = {
        fieldAsync: (label: string) => {
          if (label === randomLabel) {
            return 'fld1'
          }
          return 'missing field'
        },
      }
      const result = await extensionInput.fieldAsync(randomLabel, 'tbl1')
      expect(result.id).toEqual('fld1')
    })

    it('should throw an error if no fieldAsync callback is provided', async () => {
      globalThis.__mockInput = {}
      const randomLabel = `Field label ${Math.random()}`
      await expect(
        extensionInput.fieldAsync(randomLabel, 'tbl1')
      ).rejects.toThrow(
        'input.fieldAsync() is called, but mockInput.fieldAsync() is not implemented'
      )
    })
  })

  describe('recordAsync', () => {
    it('should return a record when given a Table object', async () => {
      const randomLabel = `Record label ${Math.random()}`
      globalThis.__mockInput = {
        recordAsync: (label: string) => {
          if (label === randomLabel) {
            return 'rec1'
          }
          return 'missing field'
        },
      }
      // @ts-ignore
      const table = globalThis.base.getTable('tbl1')
      const result = await extensionInput.recordAsync(randomLabel, table)
      expect(result.id).toEqual('rec1')
    })

    it('should return a record when given a View object', async () => {
      const randomLabel = `Record label ${Math.random()}`
      globalThis.__mockInput = {
        recordAsync: (label: string) => {
          if (label === randomLabel) {
            return 'rec2'
          }
          return 'missing field'
        },
      }
      // @ts-ignore
      const view = globalThis.base.getTable('tbl1').getView('view1')
      const result = await extensionInput.recordAsync(randomLabel, view)
      expect(result.id).toEqual('rec2')
    })

    it('should return a record when given a RecordQueryResult object', async () => {
      const randomLabel = `Record label ${Math.random()}`
      globalThis.__mockInput = {
        recordAsync: (label: string) => {
          if (label === randomLabel) {
            return 'rec1'
          }
          return 'missing field'
        },
      }
      // @ts-ignore
      const records = await globalThis.base
        .getTable('tbl1')
        .selectRecordsAsync()
      const result = await extensionInput.recordAsync(randomLabel, records)
      expect(result.id).toEqual('rec1')
    })

    it('should return a record when given an array of records', async () => {
      const randomLabel = `Record label ${Math.random()}`
      globalThis.__mockInput = {
        recordAsync: (label: string) => {
          if (label === randomLabel) {
            return 'rec1'
          }
          return 'missing field'
        },
      }
      // @ts-ignore
      const records = await globalThis.base
        .getTable('tbl1')
        .selectRecordsAsync()
      const result = await extensionInput.recordAsync(
        randomLabel,
        records.records
      )
      expect(result.id).toEqual('rec1')
    })

    it('should throw an error if given an invalid source', async () => {
      const randomLabel = `Record label ${Math.random()}`
      globalThis.__mockInput = {
        recordAsync: (label: string) => {
          if (label === randomLabel) {
            return 'rec1'
          }
          return 'missing field'
        },
      }
      await expect(
        extensionInput.recordAsync(randomLabel, 'tbl1')
      ).rejects.toThrow('Invalid source type')
    })

    it('should throw an error if no recordAsync callback is provided', async () => {
      globalThis.__mockInput = {}
      const randomLabel = `Record label ${Math.random()}`
      await expect(
        extensionInput.recordAsync(randomLabel, 'tbl1')
      ).rejects.toThrow(
        'input.recordAsync() is called, but mockInput.recordAsync() is not implemented'
      )
    })
  })
  describe('fileAsync', () => {
    it('should return a text file without any parsed input', async () => {
      const randomLabel = `File label ${Math.random()}`
      globalThis.__mockInput = {
        fileAsync: (label: string) => {
          if (label === randomLabel) {
            return {
              file: {
                name: 'file1.txt',
                type: 'text/plain',
              },
              parsedContents: 'file1',
            }
          }
          return 'missing file'
        },
      }
      const result = await extensionInput.fileAsync(randomLabel)
      expect(result.parsedContents).toEqual('file1')
      expect(result.file.name).toEqual('file1.txt')
    })

    it('should throw an error if no fileAsync callback is provided', async () => {
      globalThis.__mockInput = {}
      const randomLabel = `File label ${Math.random()}`
      await expect(extensionInput.fileAsync(randomLabel)).rejects.toThrow(
        'input.fileAsync() is called, but mockInput.fileAsync() is not implemented'
      )
    })
  })
  describe('config', () => {
    // @ts-ignore
    let items = []
    beforeEach(() => {
      items = [
        extensionInput.config.table('ordersTable', {
          label: 'Orders table',
          description: 'The table in which you track orders for your store',
        }),
        extensionInput.config.field('priceField', {
          label: 'Price field',
          parentTable: 'ordersTable',
        }),
        extensionInput.config.view('openOrdersView', {
          label: 'Open orders',
          description:
            'The view which filters for orders that are currently open',
          parentTable: 'ordersTable',
        }),
        extensionInput.config.text('companyName', {
          label: 'Company name',
        }),
        extensionInput.config.number('maxItemsPerOrder', {
          label: 'Maximum number of items per order',
        }),
        extensionInput.config.select('country', {
          label: 'Country',
          description: 'Country in which your business operates',
          options: [
            { label: 'USA', value: 'usa' },
            { label: 'UK', value: 'uk' },
            { label: 'Australia', value: 'aus' },
          ],
        }),
      ]
    })
    it('should return the results of a config callback', () => {
      globalThis.__mockInput = {
        config: () => ({ key: 'value' }),
      }
      // @ts-ignore
      const result = extensionInput.config({ title: 'title', items })
      expect(result).toEqual({ key: 'value' })
    })

    it('should set an item with a Table object', () => {
      globalThis.__mockInput = {
        // @ts-ignore
        config: (settings, base) => ({ ordersTable: base.getTable('tbl1') }),
      }
      // @ts-ignore
      const result = extensionInput.config({ title: 'title', items })
      // @ts-ignore
      expect(result.ordersTable.id).toEqual('tbl1')
    })

    it('should set an item with a View object', () => {
      globalThis.__mockInput = {
        // @ts-ignore
        config: (settings, base) => ({
          openOrdersView: base.getTable('tbl1').getView('view1'),
        }),
      }
      // @ts-ignore
      const result = extensionInput.config({ title: 'title', items })
      // @ts-ignore
      expect(result.openOrdersView.id).toEqual('view1')
    })

    it('should set an item with a Field object', () => {
      globalThis.__mockInput = {
        // @ts-ignore
        config: (settings, base) => ({
          priceField: base.getTable('tbl1').getField('fld1'),
        }),
      }
      // @ts-ignore
      const result = extensionInput.config({ title: 'title', items })
      // @ts-ignore
      expect(result.priceField.id).toEqual('fld1')
    })

    it('should set a text item', () => {
      const companyName = `Company name ${Math.random()}`
      globalThis.__mockInput = {
        config: () => ({
          companyName,
        }),
      }
      // @ts-ignore
      const result = extensionInput.config({ title: 'title', items })
      expect(result.companyName).toEqual(companyName)
    })

    it('should set a number item', () => {
      const maxItemsPerOrder = Math.random()
      globalThis.__mockInput = {
        config: () => ({
          maxItemsPerOrder,
        }),
      }
      // @ts-ignore
      const result = extensionInput.config({ title: 'title', items })
      expect(result.maxItemsPerOrder).toEqual(maxItemsPerOrder)
    })

    it('should set a select item', () => {
      globalThis.__mockInput = {
        // @ts-ignore
        config: (settings) => ({
          // @ts-ignore
          country: settings.items.find((item) => item.key === 'country')
            .options[0].value,
        }),
      }
      // @ts-ignore
      const result = extensionInput.config({ title: 'title', items })
      expect(result.country).toEqual('usa')
    })

    it('should throw an error if no config callback is provided', () => {
      globalThis.__mockInput = {}
      // @ts-ignore
      expect(() => extensionInput.config({ title: 'title', items })).toThrow(
        'input.config() is called, but mockInput.config() is not implemented'
      )
    })
  })
})
