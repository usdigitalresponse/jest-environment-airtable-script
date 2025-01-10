export { AirtableScriptEnvironment as TestEnvironment } from './environment'
export { AirtableScriptEnvironment as default } from './environment'

import type { AirtableScriptGlobal } from './environment'
import type {
  RunScriptOptions,
  RunScriptResult,
} from './environment/run-airtable-script'

declare global {
  /**
   * Runs a given Airtable script against a base fixture. Returns the output, console, and base
   * mutations that the script generated.
   *
   * @param {RunScriptOptions} options
   * @param {string} options.script The script to run, as a string.
   * @param {Base} options.base The base fixture to run the script against. Generate this using
   * the Test Fixture Generator extension.
   * @param {boolean} [options.inAutomation=false] Whether the script is running in an automation. Defaults to false.
   * @param {DefaultCursor | false} [options.defaultCursor=false] The default cursor to use for the script. Defaults to false.
   * @param {Collaborator | false} [options.currentUser=false] The current user to use for the script. Defaults to false.
   * @param {unknown} [options.mockInput=undefined] The mock input for the script. See the README for more information.
   * @param {Function | false} [options.mockFetch=false] A function that mocks any fetch requests.
   * @param {DefaultDateLocale} [options.defaultDateLocale='us'] The date format to use when a date field uses the "local" date format. Defaults to 'us'.
   * @returns {Promise<RunScriptResult>}
   */
  const runAirtableScript: (
    options: RunScriptOptions
  ) => Promise<RunScriptResult>
  /**
   * An object containing the different types of mutations that can be tracked in a script.
   */
  const MutationTypes: AirtableScriptGlobal['MutationTypes']
  /**
   * A special string that is used to denote that a call to output.clear() was made in the script.
   */
  const OUTPUT_CLEAR: AirtableScriptGlobal['OUTPUT_CLEAR']
}
