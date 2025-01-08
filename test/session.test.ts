import randomRecords from './fixtures/random-records'

describe('Session test', () => {
  it('allows getting the session data', async () => {
    const results = await runAirtableScript({
      script: `
      const currentUser = session.currentUser
      output.text(currentUser.id)
    `,
      base: randomRecords,
      inAutomation: false,
      currentUser: {
        id: 'usr123',
        name: 'Test User',
        email: 'test@example.com',
      },
    })
    expect(results.output[0]).toBe('usr123')
  })

  it('does not have active session information for automation scripts', async () => {
    const results = await runAirtableScript({
      script: `
      output.set('sessionType', typeof session)
    `,
      base: randomRecords,
      inAutomation: true,
      currentUser: {
        id: 'usr123',
        name: 'Test User',
        email: 'test@example.com',
      },
    })
    expect(results.output[0]).toEqual({
      key: 'sessionType',
      value: 'undefined',
    })
  })
})
