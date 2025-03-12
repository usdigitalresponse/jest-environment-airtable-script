**Please review USDR’s general guidelines for software & data, too: https://policies.usdigitalresponse.org/data-and-software-guidelines**

[![Code of Conduct](https://img.shields.io/badge/%E2%9D%A4-code%20of%20conduct-blue.svg?style=flat)](./CODE_OF_CONDUCT.md) ![Test and lint](https://github.com/usdigitalresponse/jest-environment-airtable-script/actions/workflows/ci.yml/badge.svg)

# Jest Airtable Script

A Jest environment for [Airtable Scripts](https://airtable.com/developers/scripting).

## Setup & Installation

You need to install both this package and @airtable/blocks to run tests. The `@airtable/blocks` package is required by the base snapshots generated by Airtable's Testing Fixture extension.

```bash
npm install --save-dev jest-airtable-script @airtable/blocks
```

## Code of Conduct

This repository falls under [U.S. Digital Response’s Code of Conduct](./CODE_OF_CONDUCT.md), and we will hold all participants in issues, pull requests, discussions, and other spaces related to this project to that Code of Conduct. Please see [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for the full code.

## Usage

Add the following to your `jest.config.js` file:

```js
{
  testEnvironment: 'jest-environment-airtable-script'
}
```

### Getting base fixture data

> [!WARNING]  
> You should generate fixture data from a copy of your base that has non-sensitive test data. You can generate fake records using the [Random record generator](https://airtable.com/marketplace/blkuZ6kbfEjCTxSNV/random-record-generator) extension.

Airtable scripts are always run within the context of a base. To test your scripts locally, you will need to generate an object that stores all the tables, fields, views, and records in your base. You can do this by using the [Test Fixture Generator extension](https://airtable.com/marketplace/blk5qI32GYyYb1Rbm/test-fixture-generator).

> [!IMPORTANT]
> The Test Fixture Generator extension assumes you are generating code for testing within an Airtable extension. You will need to change the output before importing it into your test.

To fix the file generated by the Test Fixture Generator extension, you need to remove the `TestDriver` class and export the fixture data object directly:

```js
import { FieldType, ViewType } from '@airtable/blocks/models'
import TestDriver from '@airtable/blocks-testing'
export default new TestDriver({ ...data })
```

Remove all references to `TestDriver` so that you just export the fixture data object:

```js
import { FieldType, ViewType } from '@airtable/blocks/models'

export default { ...data }
```

Then you can import the fixture data in your test files:

```js
import baseFixture from './base-fixture.js'
```

### Writing tests

You will probably want to load your Airtable scripts from a separate file for testing. Here is an example of how you might do that:

```js
// my-script.js
const table = base.getTable('My Table')
output.text(table.name)
```

```js
// my-script.test.js
import fs from 'fs'
import baseFixture from './base-fixture.js'

describe('My Script', () => {
  const myScript = fs.readFileSync(__dirname + '/my-script.js', 'utf8')

  it('should output the table name', async () => {
    const result = await runAirtableScript({
      script: myScript,
      base: baseFixture,
    })
    expect(result.output[0]).toEqual('My Table')
  })
})
```

### A note on IDs

The Test Fixtures extension automatically changes IDs for tables, fields, views, and records to strings like `fldFirstName` for a "First name" field. As this envrionment is mostly designed for developing scripts that run in multiple bases, IDs should not be depended on anyhow, and table or field names should be used instead.

If you **really** need to use IDs, you can use the global `__isAirtableScriptTestEnvironment` variable to conditionally use IDs in your script:

```js
const table = base.getTable(
  globalThis.__isAirtableScriptTestEnvironment ? 'tblMyTable' : 'My Table'
)
```

### Detecting if the script is running in the test environment

When a script is running in the test environment, the global `globalThis.__isAirtableScriptTestEnvironment` is set to `true`. This can be used to conditionally run code that should only be executed in the test environment.

### Local date formats

The Date, Last updated time, and Created time fields all support multiple date formats, including "Local," which can change depending on the client. This can make it hard to test the results of a call to a records' `getCellValueAsString` method. To make this easier, you can set the `defaultDateLocale` option when calling `runAirtableScript` to specify the date format you want to use. This will set the date format for all date fields in the base.

```js
const result = await runAirtableScript({
  script: myScript,
  base: baseFixture,
  defaultDateLocale: 'us',
})
```

You can pass one of `us`, `friendly`, `european`, or `iso`.

### Mocking fetch requests

Airtable scripts can either use `fetch`, or in extensions `remoteFetchAsync` to make HTTP requests. You can mock these requests using the `fetchMock` setting:

```js
const result = await runAirtableScript({
  script: myScript,
  base: baseFixture,
  fetchMock: (url, request) => {
    return {
      status: 200,
      body: JSON.stringify({ message: 'Hello, world!' }),
    }
  },
})
```

### Mocking user inputs

You can mock any `input` from either an automation input or user interaction using the `mockInput` setting:

```js
const results = await runAirtableScript({
  script: `
  const text = await input.textAsync('Select a table')
  output.inspect(text)
`,
  base: randomRecords,
  mockInput: {
    // @ts-ignore
    textAsync: (label) => {
      if (label === 'Select a table') {
        return 'text123'
      }
    },
  },
})
```

Every [input method for extensions or automations](https://airtable.com/developers/scripting/api/input) are available to be mocked. Check out the [input.test.ts](./test/input.test.ts) file for examples.

### Results

The results from calling `runAirtableScript` are an object with several properties:

- `output`: An array of all the calls to the built-in `output` object.
- `mutations`: An array of all the changes made to the base, including creating, updating, and deleting tables, fields, and records.
- `console`: An array of all the calls to the `console` object, like `console.log`.

#### Output

The `output` property is an array of all the calls to the [built-in output object](https://airtable.com/developers/scripting/api/output). Different types of output methods return different types of items.

To persist data for test purposes, if your script calls `output.clear()`, we instead just add a new record in the output array with the contnets of the global `OUTPUT_CLEAR` variable. To test this, you can check for that variable:

```js
it('outputs one text, then clears, then another text', async () => {
  const { output } = await runAirtableScript({
    script: `
      output.text('first output')
      output.clear()
      output.text('second output')
    `,
    base: randomRecords,
  })
  expect(output).toEqual(['first output', OUTPUT_CLEAR, 'second output'])
})
```

#### Mutations: Changes to tables, fields, and records

Any changes you make to the base are recorded and returned in the `mutations` property. The following types of mutations are supported and are defined in the global `MutationTypes` object:

- `SET_MULTIPLE_RECORD_CELL_VALUES`
- `DELETE_RECORD`
- `CREATE_RECORD`
- `CREATE_FIELD`
- `UPDATE_FIELD_CONFIG`
- `UPDATE_FIELD_DESCRIPTION`
- `UPDATE_FIELD_NAME`
- `CREATE_TABLE`

Each mutation has one of the above `type` properties and an `args` property that contains the arguments passed to the method that caused the mutation.

An example of using a mutation in a test:

```js
it('creates a record', async () => {
  const { mutations } = await runAirtableScript({
    script: `
      const table = base.getTable('tblTableA')
      await table.createRecordAsync({
        fldName: 'New Name',
      })
    `,
    base: testBase,
  })
  expect(mutations[0].type).toEqual(MutationTypes.CREATE_RECORD)
  expect(mutations[0].args.cellValuesByFieldId).toEqual({
    fldName: 'New Name',
  })
})
```

#### Console

We overwrite the default `console` object in Airtable scripts to capture all calls to `console.log`, `console.warn`, and `console.error`. These are returned in the `console` property of the results object. It is structured as an array of objects that include a `type` property (one of `log`, `warn`, or `error`) and a `message` property with the message that was logged.

An example of using the console in a test:

```js
it('logs a message', async () => {
  const { console } = await runAirtableScript({
    script: `
      console.log('Hello, world!')
    `,
    base: testBase,
  })
  expect(console[0].type).toEqual('log')
  expect(console[0].message).toEqual('Hello, world!')
})
```

#### Thrown errors

If your script throws a new error to stop execution, you can catch that error in the results object. The error is stored in the `thrownErrors` property of the results object:

```js
it('throws an error', async () => {
  const { thrownError } = await runAirtableScript({
    script: `
      throw new Error('This is an error')
    `,
    base: testBase,
  })
  expect(thrownError.message).toEqual('This is an error')
})
```

## Developing locally

The environment variable `JEST_AIRTABLE_TS_DEV` should be set to `true` so that the `runScript` function pulls the compiled SDK mock from the `./src/environment/sdk/__sdk.js` file. This is already set to `true` in the `package.json` file.

Note that because of the unique way that the SDK is mocked, including needing a pretty broad set of global variables being set up, there are files where some eslint rules are ignored.

## License & Copyright

Copyright (C) 2022 U.S. Digital Response (USDR)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this software except in compliance with the License. You may obtain a copy of the License at:

[`LICENSE`](./LICENSE) in this repository or <http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
