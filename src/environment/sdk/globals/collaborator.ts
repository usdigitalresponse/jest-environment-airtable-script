/**
 * Type for a base collaborator.
 *
 * @see https://airtable.com/developers/scripting/api/collaborator
 */
type Collaborator = {
  /**
   * The user or user group ID of the collaborator.
   */
  id: string
  /**
   * The name of the collaborator. Could be null if the user's Airtable account doesn't yet have a name.
   */
  name: string | null
  /**
   * The email address of the user collaborator or an RFC 2822 mailbox-list (comma-separated list of emails) that can be used to contact all members of the user group collaborator.
   */
  email: string
  /**
   * The URL of the collaborator's profile picture. Could be null if the user's Airtable account hasn't set a profile picture or the collaborator is a user group.
   */
  profilePicUrl?: string | null
}

export { Collaborator }
