import { cursor } from './cursor'

describe('cursor', () => {
  beforeEach(() => {
    global.__defaultCursor = false
    global.__inAutomation = false
    global.__base = undefined
  })

  it('should return null for activeTableId if __defaultCursor and __base are undefined', () => {
    expect(cursor?.activeTableId).toBeNull()
  })

  it('should return null for activeViewId if __defaultCursor and __base are undefined', () => {
    expect(cursor?.activeViewId).toBeNull()
  })

  it('should return tableId from __defaultCursor if defined', () => {
    global.__defaultCursor = { tableId: 'table_1', viewId: 'view_1' }
    expect(cursor?.activeTableId).toBe('table_1')
  })

  it('should return viewId from __defaultCursor if defined', () => {
    global.__defaultCursor = { tableId: 'table_1', viewId: 'view_1' }
    expect(cursor?.activeViewId).toBe('view_1')
  })

  it('should return first table id from __base if __defaultCursor is undefined', () => {
    global.__base = { tables: [{ id: 'table_2', views: [{ id: 'view_2' }] }] }
    expect(cursor?.activeTableId).toBe('table_2')
  })

  it('should return first view id from __base if __defaultCursor is undefined', () => {
    global.__base = { tables: [{ id: 'table_2', views: [{ id: 'view_2' }] }] }
    expect(cursor?.activeViewId).toBe('view_2')
  })

  it('should return null for activeTableId if __base has no tables', () => {
    global.__base = { tables: [] }
    expect(cursor?.activeTableId).toBeNull()
  })

  it('should return null for activeViewId if __base has no tables', () => {
    global.__base = { tables: [] }
    expect(cursor?.activeViewId).toBeNull()
  })
})
