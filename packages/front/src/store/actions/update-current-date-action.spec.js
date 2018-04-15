import {
  addDay,
  addMonth,
  removeDay,
  removeMonth,
} from './update-current-date-action'
import {
  CURRENT_DATE_ADD_DAY,
  CURRENT_DATE_ADD_MONTH,
  CURRENT_DATE_REMOVE_DAY,
  CURRENT_DATE_REMOVE_MONTH,
} from '../mutations/mutation-types'

describe('actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  describe('addDay', () => {
    it('should commit a CURRENT_DATE_ADD_DAY action', async () => {
      // Given
      expect.assertions(1)

      // When
      await addDay({ commit })

      // Then
      expect(commit).toBeCalledWith(CURRENT_DATE_ADD_DAY)
    })
  })

  describe('addMonth', () => {
    it('should commit a CURRENT_DATE_ADD_MONTH action', async () => {
      // Given
      expect.assertions(1)

      // When
      await addMonth({ commit })

      // Then
      expect(commit).toBeCalledWith(CURRENT_DATE_ADD_MONTH)
    })
  })

  describe('removeDay', () => {
    it('should commit a CURRENT_DATE_REMOVE_DAY action', async () => {
      // Given
      expect.assertions(1)

      // When
      await removeDay({ commit })

      // Then
      expect(commit).toBeCalledWith(CURRENT_DATE_REMOVE_DAY)
    })
  })

  describe('removeMonth', () => {
    it('should commit a CURRENT_DATE_REMOVE_MONTH action', async () => {
      // Given
      expect.assertions(1)

      // When
      await removeMonth({ commit })

      // Then
      expect(commit).toBeCalledWith(CURRENT_DATE_REMOVE_MONTH)
    })
  })
})
