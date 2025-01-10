import type {
  EnvironmentContext,
  JestEnvironmentConfig,
} from '@jest/environment'
import NodeEnvironment from 'jest-environment-node'
import runAirtableScript, {
  RunScriptOptions,
  RunScriptResult,
} from './run-airtable-script'
import { MutationTypes } from './mutation-types'
import { OUTPUT_CLEAR } from './output-clear'

type StrictGlobal = {
  runAirtableScript: (options: RunScriptOptions) => Promise<RunScriptResult>
  MutationTypes: typeof MutationTypes
  OUTPUT_CLEAR: typeof OUTPUT_CLEAR
}

export type AirtableScriptGlobal = Required<StrictGlobal>

export class AirtableScriptEnvironment extends NodeEnvironment {
  constructor(config: JestEnvironmentConfig, _context: EnvironmentContext) {
    super(config, _context)
    this.global.runAirtableScript = runAirtableScript
    this.global.MutationTypes = MutationTypes
    this.global.OUTPUT_CLEAR = OUTPUT_CLEAR
  }
}
