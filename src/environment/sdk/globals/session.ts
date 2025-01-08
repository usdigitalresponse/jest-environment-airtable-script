import type { Collaborator } from './collaborator'

/**
 * A Session contains information about the user currently running the script.
 * There is only ever one session when a user runs a script. It can be accessed via the session global variable.
 *
 * @see https://airtable.com/developers/scripting/api/session
 */

type Session = {
  currentUser: Collaborator | null
}

const session: Session = {
  get currentUser() {
    if (typeof __currentUser !== 'undefined') {
      return __currentUser
    }
    return null
  },
}

declare global {
  // eslint-disable-next-line no-var
  var session: Session | undefined
}

globalThis.session = globalThis.__inAutomation ? undefined : session

export { session, Session }
