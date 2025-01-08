export { AirtableScriptEnvironment as TestEnvironment } from './environment'
export { AirtableScriptEnvironment as default } from './environment'

import type { AirtableScriptGlobal } from './environment'

declare global {
  const runAirtableScript: AirtableScriptGlobal['runAirtableScript']
  const MutationTypes: AirtableScriptGlobal['MutationTypes']
  const OUTPUT_CLEAR: AirtableScriptGlobal['OUTPUT_CLEAR']
}
