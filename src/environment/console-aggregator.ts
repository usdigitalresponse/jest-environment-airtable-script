type ConsoleMessage = {
  type: 'log' | 'warn' | 'error'
  message: string
}

type ConsoleAggregator = {
  log: (message: string) => void
  warn: (message: string) => void
  error: (message: string) => void
  _getMessages: () => ConsoleMessage[]
}

/**
 * Returns a console object that aggregates all messages logged to it.
 * Used to override the global console object in tests.
 *
 * The _getMessages method is called after a test is run to pass the
 * messages to the test runner.
 */
const consoleAggregator = (): ConsoleAggregator => {
  const consoleMessages: ConsoleMessage[] = []

  return {
    log: (message: string) => {
      consoleMessages.push({ type: 'log', message })
    },
    warn: (message: string) => {
      consoleMessages.push({ type: 'warn', message })
    },
    error: (message: string) => {
      consoleMessages.push({ type: 'error', message })
    },
    _getMessages: () => {
      return consoleMessages
    },
  }
}

export { consoleAggregator, ConsoleAggregator, ConsoleMessage }
