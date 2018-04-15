import actions from './actions'
import {
  CURRENT_DATE_ADD_DAY,
  CURRENT_DATE_ADD_MONTH,
  CURRENT_DATE_REMOVE_DAY,
  CURRENT_DATE_REMOVE_MONTH,
  LOAD_DEMANDS,
  LOAD_STATUS,
} from './action-types'
import { loadDemands } from './load-demands-action'
import { loadStatus } from './load-status-action'
import {
  addDay,
  addMonth,
  removeDay,
  removeMonth,
} from './update-current-date-action'

describe('actions', () => {

  describe('LOAD_STATUS', () => {

    it('should call loadStatus action', () => {
      // When
      const action = actions[LOAD_STATUS]

      // Then
      expect(action).toBe(loadStatus)
    })
  })

  describe('LOAD_DEMANDS', () => {

    it('should call loadDemands action', () => {
      // When
      const action = actions[LOAD_DEMANDS]

      // Then
      expect(action).toBe(loadDemands)
    })
  })

  describe('CURRENT_DATE_ADD_DAY', () => {
    it('should call addDay action', () => {
      // When
      const action = actions[CURRENT_DATE_ADD_DAY]

      // Then
      expect(action).toBe(addDay)
    })
  })

  describe('CURRENT_DATE_ADD_MONTH', () => {
    it('should call addMonth action', () => {
      // When
      const action = actions[CURRENT_DATE_ADD_MONTH]

      // Then
      expect(action).toBe(addMonth)
    })
  })

  describe('CURRENT_DATE_REMOVE_DAY', () => {
    it('should call removeDay action', () => {
      // When
      const action = actions[CURRENT_DATE_REMOVE_DAY]

      // Then
      expect(action).toBe(removeDay)
    })
  })

  describe('CURRENT_DATE_REMOVE_MONTH', () => {
    it('should call removeMonth action', () => {
      // When
      const action = actions[CURRENT_DATE_REMOVE_MONTH]

      // Then
      expect(action).toBe(removeMonth)
    })
  })
})
