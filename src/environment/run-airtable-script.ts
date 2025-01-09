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
  output: unknown[]
  mutations: Mutation[]
  console: ConsoleMessage[]
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
  __defaultDateLocale: DefaultDateLocale
  console: ConsoleAggregator
}

let sdkScript: string | null = null

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
      : './sdk.js'
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
    console: consoleAggregator(),
  }
  vm.createContext(context)

  vm.runInContext(sdkScript, context)
  // We need to run the script in an async function so that we can use await
  // directly inside the script.
  vm.runInContext(
    `;(async () => {
    ${script}
  })()`,
    context
  )

  return {
    output: context.__output || [],
    mutations: context.__mutations || [],
    console: context.console._getMessages(),
  }
}
export default runAirtableScript

export { RunScriptOptions, RunScriptResult }
