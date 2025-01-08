/**
 * Mutations are objects that list a specific type and
 * then different arguments depending on the type.
 */
type Mutation = {
  type: string
  args: { [key: string]: unknown }
}

// eslint-disable-next-line no-var
declare var __mutations: Mutation[]

// @ts-ignore
globalThis.__mutations = []

export { Mutation, __mutations }
