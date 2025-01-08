import { session } from './session'
import type { Collaborator } from './collaborator'

describe('session', () => {
  beforeAll(() => {
    globalThis.__inAutomation = false
  })

  afterEach(() => {
    // Reset global variables after each test
    delete globalThis.__currentUser
  })

  it('should return null if __currentUser is undefined', () => {
    expect(session.currentUser).toBeNull()
  })

  it('should return the current user if __currentUser is defined', () => {
    const mockUser: Collaborator = {
      id: 'user1',
      name: 'Test User',
      email: 'test@example.com',
      profilePicUrl: null,
    }
    globalThis.__currentUser = mockUser
    expect(session.currentUser).toBe(mockUser)
  })
})
