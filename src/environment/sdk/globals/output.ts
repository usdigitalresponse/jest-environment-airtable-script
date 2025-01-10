import { OUTPUT_CLEAR } from '../../output-clear'

// eslint-disable-next-line no-var
declare var __output: Array<
  { key: string; value: unknown } | number | string | Array<string | number>
>

type AutomationOutput = {
  set: (key: string, value: unknown) => void
}

type ExtensionOutput = {
  text: (text: string | number) => void
  markdown: (markdown: string) => void
  table: (table: Array<unknown>) => void
  inspect: (object: unknown) => void
  clear: () => void
}

// @ts-ignore
globalThis.__output = []

/**
 * The output object if a script is being used within an automation.
 */
const automationOutput: AutomationOutput = {
  set: (key, value) => {
    __output.push({ key, value })
  },
}

/**
 * The output object if a script is being used within an extension.
 */
const extensionOutput: ExtensionOutput = {
  /**
   * Displays the given text on-screen.
   *
   * @see https://airtable.com/developers/scripting/api/output#text
   */
  text: (text) => {
    __output.push(text)
  },
  /**
   * Displays the given Markdown on-screen.
   *
   * @see https://airtable.com/developers/scripting/api/output#markdown
   */
  markdown: (markdown) => {
    __output.push(markdown)
  },
  /**
   * Outputs arrays or objects as tables. It mirrors the console.table API.
   *
   * @see https://airtable.com/developers/scripting/api/output#table
   */
  table: (table) => {
    const header: Array<string | number> = []
    for (const [key] of Object.entries(table)) {
      if (!header.includes(key)) {
        header.push(key)
      }
    }
    const htmlHeader = header.map((key) => `<th>${key}</th>`).join('')
    const htmlRows = table
      .map(
        (row: unknown) =>
          `<tr>${header
            // @ts-ignore
            .map((key) => `<td>${row[key] ? row[key] : ''}</td>`)
            .join('')}</tr>`
      )
      .join('')
    __output.push(
      `<table><thead><tr>${htmlHeader}</tr></thead><tbody>${htmlRows}</tbody></table>`
    )
  },
  /**
   * Stringifies the given object. Useful for inspecting objects.
   *
   * @see https://airtable.com/developers/scripting/api/output#inspect
   */
  inspect: (object) => {
    __output.push(JSON.stringify(object))
  },
  /**
   * Clears the output. For testing purposes, we instead just record that a clear
   * command was issued.
   *
   * @see https://airtable.com/developers/scripting/api/output#clear
   */
  clear: () => {
    __output.push(OUTPUT_CLEAR)
  },
}

// Use one of the two outputs based on the context (extension or automation)
const output: AutomationOutput | ExtensionOutput = globalThis.__inAutomation
  ? automationOutput
  : extensionOutput

// @ts-ignore
globalThis.output = output

export { automationOutput, extensionOutput, __output }
