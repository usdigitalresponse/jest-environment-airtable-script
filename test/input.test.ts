import randomRecords from './fixtures/random-records'

describe('Input', () => {
  describe('automation script', () => {
    it('passes a configuration object', async () => {
      const key = `key-${Math.random()}`
      const results = await runAirtableScript({
        script: `
        const config = input.config()
        output.set('config', JSON.stringify(config))
      `,
        base: randomRecords,
        inAutomation: true,
        mockInput: {
          config: () => ({ [key]: 'tbl123' }),
        },
      })
      expect(results.output[0].key).toEqual('config')
      expect(results.output[0].value).toEqual(
        JSON.stringify({ [key]: 'tbl123' })
      )
    })
  })
  describe('extension script', () => {
    it('passes a text item', async () => {
      const randomLabel = `label-${Math.random()}`
      const results = await runAirtableScript({
        script: `
      const text = await input.textAsync('${randomLabel}')
      output.inspect(text)
    `,
        base: randomRecords,
        mockInput: {
          // @ts-ignore
          textAsync: (label) => {
            if (label === randomLabel) {
              return 'text123'
            }
          },
        },
      })
      expect(results.output[0]).toEqual(JSON.stringify('text123'))
    })

    it('passes a buttonsAsync item', async () => {
      const randomLabel = `label-${Math.random()}`
      const results = await runAirtableScript({
        script: `
      const button = await input.buttonsAsync('${randomLabel}', ['button1', 'button2'])
      output.inspect(button)
    `,
        base: randomRecords,
        mockInput: {
          // @ts-ignore
          buttonsAsync: (label) => {
            if (label === randomLabel) {
              return 'button1'
            }
          },
        },
      })
      expect(results.output[0]).toEqual(JSON.stringify('button1'))
    })

    it('passes a tableAsync item', async () => {
      const randomLabel = `label-${Math.random()}`
      const results = await runAirtableScript({
        script: `
      const table = await input.tableAsync('${randomLabel}')
      output.inspect(table.id)
    `,
        base: randomRecords,
        mockInput: {
          // @ts-ignore
          tableAsync: (label) => {
            if (label === randomLabel) {
              return 'tblTableA'
            }
          },
        },
      })
      expect(results.output[0]).toEqual(JSON.stringify('tblTableA'))
    })

    it('passes a viewAsync item', async () => {
      const randomLabel = `label-${Math.random()}`
      const results = await runAirtableScript({
        script: `
      const view = await input.viewAsync('${randomLabel}', 'tblTableA')
      output.inspect(view.id)
    `,
        base: randomRecords,
        mockInput: {
          // @ts-ignore
          viewAsync: (label) => {
            if (label === randomLabel) {
              return 'viwAllRecords'
            }
          },
        },
      })
      expect(results.output[0]).toEqual(JSON.stringify('viwAllRecords'))
    })

    it('passes a recordAsync item', async () => {
      const randomLabel = `label-${Math.random()}`
      const results = await runAirtableScript({
        script: `
      const record = await input.recordAsync('${randomLabel}', base.getTable('tblTableA'))
      output.inspect(record.id)
    `,
        base: randomRecords,
        mockInput: {
          // @ts-ignore
          recordAsync: (label) => {
            if (label === randomLabel) {
              return 'recRomanHammes'
            }
          },
        },
      })
      expect(results.output[0]).toEqual(JSON.stringify('recRomanHammes'))
    })

    it('passes a fieldAsync item', async () => {
      const randomLabel = `label-${Math.random()}`
      const results = await runAirtableScript({
        script: `
      const field = await input.fieldAsync('${randomLabel}', base.getTable('tblTableA'))
      output.inspect(field.id)
    `,
        base: randomRecords,
        mockInput: {
          // @ts-ignore
          fieldAsync: (label) => {
            if (label === randomLabel) {
              return 'fldLinkMultiple'
            }
          },
        },
      })
      expect(results.output[0]).toEqual(JSON.stringify('fldLinkMultiple'))
    })

    it('passes a fileAsync item', async () => {
      const randomLabel = `label-${Math.random()}`
      const results = await runAirtableScript({
        script: `
      const {file} = await input.fileAsync('${randomLabel}')
      output.inspect(file.name)
    `,
        base: randomRecords,
        mockInput: {
          // @ts-ignore
          fileAsync: (label) => {
            if (label === randomLabel) {
              return {
                file: { name: 'attAttachment.csv' },
                parsedContents: null,
              }
            }
          },
        },
      })
      expect(results.output[0]).toEqual(JSON.stringify('attAttachment.csv'))
    })

    it('passes a configuration object', async () => {
      const key = `key-${Math.random()}`
      const results = await runAirtableScript({
        script: `
      const config = input.config({
          title: 'Configuration',
          items: [
            input.config.text('${key}', {
              label: 'test-value',
        })]})
            
        output.inspect(config)
    `,
        base: randomRecords,
        mockInput: {
          config: () => ({ [key]: 'test-value' }),
        },
      })
      expect(results.output[0]).toEqual(JSON.stringify({ [key]: 'test-value' }))
    })
  })
})
