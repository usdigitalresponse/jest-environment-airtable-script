type Cursor = {
  activeTableId: string | null
  activeViewId: string | null
}

type DefaultCursor = {
  tableId: string
  viewId: string
}

type Base = {
  tables: { id: string; views: { id: string }[] }[]
}

declare const __base: Base | undefined
declare const __defaultCursor: DefaultCursor | undefined

/**
 * An implementation of the global cursor script SDK object.
 *
 * @see https://airtable.com/developers/scripting/api/cursor
 */
const extensionCursor: Cursor = {
  /**
   * The currently active table ID. Can be null if the active table is still loading in the Airtable UI.
   *
   * This will be null if the __base object is not defined.
   * This can be set to whatever the __defaultCursor object is set to.
   * If __defaultCursor is not defined, this will be set to the first table ID in the __base object.
   */
  get activeTableId() {
    if (__defaultCursor) {
      return __defaultCursor.tableId
    }
    if (
      typeof __base !== 'undefined' &&
      __base.tables &&
      __base.tables.length > 0
    ) {
      return __base.tables[0].id
    }
    return null
  },

  /**
   * The currently active table ID. The currently active view ID. This will always be a view belonging to activeTableId.
   * Can be null when the active view has changed and is not yet loaded, and can also refer to a view that is not yet loaded.
   *
   * This will be null if the __base object is not defined.
   * This can be set to whatever the __defaultCursor object is set to.
   * If __defaultCursor is not defined, this will be set to the first view ID in the first table in the __base object.
   */
  get activeViewId() {
    if (__defaultCursor) {
      return __defaultCursor.viewId
    }
    if (
      typeof __base !== 'undefined' &&
      __base.tables &&
      __base.tables.length > 0
    ) {
      return __base.tables[0].views[0].id
    }
    return null
  },
}

const cursor = globalThis.__inAutomation ? undefined : extensionCursor

declare global {
  // eslint-disable-next-line no-var
  var cursor: Cursor | undefined
}

globalThis.cursor = cursor

export { cursor, Cursor, DefaultCursor }
