import testBase from './fixtures/test-base'
describe('Console', () => {
  it('should collect a console.log', async () => {
    const randomMessage = Math.random().toString(36).substring(7)
    const results = await runAirtableScript({
      script: `
      console.log('${randomMessage}')
    `,
      base: testBase,
    })
    expect(results.console[0]).toEqual({ message: randomMessage, type: 'log' })
  })
  it('should collect a console.error', async () => {
    const randomMessage = Math.random().toString(36).substring(7)
    const results = await runAirtableScript({
      script: `
      console.error('${randomMessage}')
    `,
      base: testBase,
    })
    expect(results.console[0]).toEqual({
      message: randomMessage,
      type: 'error',
    })
  })
  it('should collect a console.warn', async () => {
    const randomMessage = Math.random().toString(36).substring(7)
    const results = await runAirtableScript({
      script: `
      console.warn('${randomMessage}')
    `,
      base: testBase,
    })
    expect(results.console[0]).toEqual({ message: randomMessage, type: 'warn' })
  })
})
