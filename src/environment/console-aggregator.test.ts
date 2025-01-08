import { consoleAggregator } from './console-aggregator'

describe('consoleAggregator', () => {
  let console: ReturnType<typeof consoleAggregator>

  beforeEach(() => {
    console = consoleAggregator()
  })

  it('should log messages', () => {
    console.log('test log message')
    const messages = console._getMessages()
    expect(messages).toEqual([{ type: 'log', message: 'test log message' }])
  })

  it('should warn messages', () => {
    console.warn('test warn message')
    const messages = console._getMessages()
    expect(messages).toEqual([{ type: 'warn', message: 'test warn message' }])
  })

  it('should error messages', () => {
    console.error('test error message')
    const messages = console._getMessages()
    expect(messages).toEqual([{ type: 'error', message: 'test error message' }])
  })

  it('should aggregate multiple messages', () => {
    console.log('first log message')
    console.warn('first warn message')
    console.error('first error message')
    console.log('second log message')
    const messages = console._getMessages()
    expect(messages).toEqual([
      { type: 'log', message: 'first log message' },
      { type: 'warn', message: 'first warn message' },
      { type: 'error', message: 'first error message' },
      { type: 'log', message: 'second log message' },
    ])
  })
})
