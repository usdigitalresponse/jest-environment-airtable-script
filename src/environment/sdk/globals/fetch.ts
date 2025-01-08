export {}

declare global {
  // eslint-disable-next-line no-var
  var remoteFetchAsync: (
    url: RequestInfo | URL,
    options?: RequestInit
  ) => Promise<Response>
}

/**
 * A mocked version of the global fetch function.
 *
 * @see https://airtable.com/developers/scripting/api/fetch#browser-fetch
 */
globalThis.fetch = async (url: RequestInfo | URL, options?: RequestInit) => {
  if (globalThis.__mockFetch) {
    return globalThis.__mockFetch(url, options)
  }
  return fetch(url, options)
}

/**
 * Extension scripts have their own remoteFetchAsync function that does not respect CORS
 * requests. Since the fetch function should always be mocked in Node anyhow, we can just use
 * the global fetch object.
 *
 * @see https://airtable.com/developers/scripting/api/fetch#remote-fetch-async
 */
globalThis.remoteFetchAsync = async (
  url: RequestInfo | URL,
  options?: RequestInit
) => {
  // This should only be called in extension scripts
  if (globalThis.__inAutomation) {
    throw new Error('remoteFetchAsync can only be called in automation scripts')
  }
  return globalThis.fetch(url, options)
}
