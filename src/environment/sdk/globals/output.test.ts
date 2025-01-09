import { OUTPUT_CLEAR } from '../../output-clear'
import { automationOutput, extensionOutput, __output } from './output'

describe('automationOutput', () => {
  beforeEach(() => {
    __output.length = 0
  })

  it('should set key and value', () => {
    automationOutput.set('key1', 'value1')
    expect(__output).toEqual([{ key: 'key1', value: 'value1' }])
  })
})

describe('extensionOutput', () => {
  beforeEach(() => {
    __output.length = 0
  })

  it('should add text to output', () => {
    extensionOutput.text('some text')
    expect(__output).toEqual(['some text'])
  })

  it('should add markdown to output', () => {
    extensionOutput.markdown('**some** markdown')
    expect(__output).toEqual(['**some** markdown'])
  })

  it('should add table to output', () => {
    const table = [
      ['a', 1],
      ['b', 2],
    ]
    extensionOutput.table(table)
    expect(__output).toEqual([
      '<table><thead><tr><th>0</th><th>1</th></tr></thead><tbody><tr><td>a</td><td>1</td></tr><tr><td>b</td><td>2</td></tr></tbody></table>',
    ])
  })

  it('should add inspected object to output', () => {
    const obj = { key: 'value' }
    extensionOutput.inspect(obj)
    expect(__output).toEqual([JSON.stringify(obj)])
  })

  it('should clear the output', () => {
    extensionOutput.text('some text')
    extensionOutput.clear()
    expect(__output[0]).toEqual('some text')
    expect(__output[1]).toEqual(OUTPUT_CLEAR)
  })
})
