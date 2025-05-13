import * as vm from 'node:vm'
import * as fs from 'fs'
import type { Collaborator } from './sdk/globals/collaborator'
import type { DefaultCursor } from './sdk/globals/cursor'
import type { Mutation } from './sdk/globals/mutations'
import {
  consoleAggregator,
  ConsoleAggregator,
  ConsoleMessage,
} from './console-aggregator'

type DefaultDateLocale = 'friendly' | 'us' | 'european' | 'iso'

type Output = [string, number, boolean] | { key: string; value: string }[]

type RunScriptOptions = {
  script: string
  base: { base: unknown } | unknown
  inAutomation?: boolean
  defaultCursor?: DefaultCursor | false
  currentUser?: Collaborator | false
  mockInput?: unknown
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  mockFetch?: Function | false
  defaultDateLocale?: DefaultDateLocale
}

type RunScriptResult = {
  output: Output
  mutations: Mutation[]
  console: ConsoleMessage[]
  thrownError: unknown
}

type RunContext = {
  __base: unknown
  __inAutomation: boolean
  __output?: unknown[]
  __mutations?: Mutation[]
  __defaultCursor: DefaultCursor | false
  __currentUser: Collaborator | false
  __isAirtableScriptTestEnvironment: boolean
  __mockInput?: unknown
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  __mockFetch?: Function | false
  __input?: unknown
  __scriptError: false | Error
  __defaultDateLocale: DefaultDateLocale
  console: ConsoleAggregator
}

let sdkScript: string | null = null

/**
 * Runs a given Airtable script against a base fixture. Full definition is in src/environment/index.ts
 */
const runAirtableScript = async ({
  script,
  base,
  inAutomation = false,
  defaultCursor = false,
  currentUser = false,
  mockInput = undefined,
  mockFetch = false,
  defaultDateLocale = 'us',
}: RunScriptOptions): Promise<RunScriptResult> => {
  if (!sdkScript) {
    // The path is dynamically rewritten in the build script
    const sdkScriptPath = process.env.JEST_AIRTABLE_TS_DEV
      ? './src/environment/sdk.js'
      : __dirname + '/sdk.js'
    sdkScript = fs.readFileSync(sdkScriptPath, 'utf8').toString()
  }

  const context: RunContext = {
    // @ts-ignore
    __base: base.base ? { ...base.base } : base,
    __inAutomation: inAutomation,
    __defaultCursor: defaultCursor,
    __currentUser: currentUser,
    __isAirtableScriptTestEnvironment: true,
    __mockInput: mockInput,
    __mockFetch: mockFetch,
    __defaultDateLocale: defaultDateLocale,
    __scriptError: false,
    console: consoleAggregator(),
  }

  vm.createContext(context)
  vm.runInContext(sdkScript, context)

  let thrownError: unknown

  try {
    // We need to run the script in an async function so that we can use await
    // directly inside the script.
    await vm.runInContext(
      `;(async () => {
      try {
      ${script}
      } catch(e) {
      this.__scriptError = e;
      }
    })()`,
      context
    )
    thrownError = context.__scriptError || false
  } catch (error) {
    thrownError = error
  }

  return {
    output: (context.__output as Output) || [],
    mutations: context.__mutations || [],
    console: context.console._getMessages(),
    thrownError,
  }
}
export default runAirtableScript

export { RunScriptOptions, RunScriptResult }
