/**
 * A standard placeholder for secret values that are redacted from console.log.
 * Airtable seems to just track all the secret values and redact them using a search
 * when outputting the console.
 */
const SECRET_VALUE_REDACTED: string = '[secret value is hidden]'

type ConsoleMessage = {
  type: 'log' | 'warn' | 'error'
  message: string
}

type ConsoleAggregator = {
  log: (message: string) => void
  warn: (message: string) => void
  error: (message: string) => void
  _getMessages: () => ConsoleMessage[]
  _addSecretValue: (value: string) => void
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

  const secretValues: string[] = []
  /**
   * Removes any secret values from console messages and
   * replaces them with a standard secret placeholder.
   */
  const redactSecrets = (message: string): string => {
    if (!secretValues.length) {
      return message
    }
    return secretValues.reduce(
      (acc, value) => acc.replace(value, SECRET_VALUE_REDACTED),
      message
    )
  }

  return {
    log: (message: string) => {
      consoleMessages.push({ type: 'log', message: redactSecrets(message) })
    },
    warn: (message: string) => {
      consoleMessages.push({ type: 'warn', message: redactSecrets(message) })
    },
    error: (message: string) => {
      consoleMessages.push({ type: 'error', message: redactSecrets(message) })
    },
    _getMessages: () => {
      return consoleMessages
    },
    _addSecretValue: (value) => {
      secretValues.push(value)
    },
  }
}

export {
  consoleAggregator,
  SECRET_VALUE_REDACTED,
  ConsoleAggregator,
  ConsoleMessage,
}
