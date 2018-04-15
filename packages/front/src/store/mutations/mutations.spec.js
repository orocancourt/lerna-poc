import moment from 'moment'
import {
  SET_DEMANDS,
  SET_STATUS,
  CURRENT_DATE_ADD_DAY,
  CURRENT_DATE_ADD_MONTH,
  CURRENT_DATE_REMOVE_DAY,
  CURRENT_DATE_REMOVE_MONTH,
} from './mutation-types'
import mutations from './mutations'

const demands = [ { some: 'data' } ]

describe('mutations', () => {

  describe('SET_STATUS', () => {
    it('should set status list with payload', () => {
      // Given
      const state = {
        status: { version: '0.0.1' },
      }

      const payload = {
        status: { version: '0.0.2' },
      }

      // When
      mutations[SET_STATUS](state, payload)

      // Then
      expect(state.status).toBe(payload.status)
    })
  })

  describe('SET_DEMANDS', () => {
    it('should set state demands with param demands', () => {
      // Given
      const state = {
        demands: [],
      }

      // When
      mutations[SET_DEMANDS](state, demands)

      // Then
      expect(state.demands).toBe(demands)
    })
  })

  describe('CURRENT_DATE_ADD_DAY', () => {
    it('should set state currentDate to the next day', () => {
      // Given
      const state = {
        currentDate: moment('1992-11-07'),
      }
      const expectedNextDay = '1992-11-08'

      // When
      mutations[CURRENT_DATE_ADD_DAY](state)

      // Then
      expect(state.currentDate.format('YYYY-MM-DD')).toEqual(expectedNextDay)
    })
  })

  describe('CURRENT_DATE_ADD_MONTH', () => {
    describe('when current day is contained in the next month', () => {
      it('should set state currentDate to the same day of the next month', () => {
        // Given
        const state = {
          currentDate: moment('2017-10-30'),
        }
        const expectedNextMonth = '2017-11-30'

        // When
        mutations[CURRENT_DATE_ADD_MONTH](state)

        // Then
        expect(state.currentDate.format('YYYY-MM-DD')).toEqual(expectedNextMonth)
      })
    })

    describe('when current day is not contained in the next month because it has less days', () => {
      it('should set state currentDate to the last day of the next month', () => {
        // Given
        const state = {
          currentDate: moment('2017-10-31'),
        }
        const expectedNextMonthWithLessDays = '2017-11-30'

        // When
        mutations[CURRENT_DATE_ADD_MONTH](state)

        // Then
        expect(state.currentDate.format('YYYY-MM-DD')).toEqual(expectedNextMonthWithLessDays)
      })
    })
  })

  describe('CURRENT_DATE_REMOVE_DAY', () => {
    it('should set state currentDate to the previous day', () => {
      // Given
      const state = {
        currentDate: moment('1992-11-07'),
      }
      const expectedPreviousDay = '1992-11-06'

      // When
      mutations[CURRENT_DATE_REMOVE_DAY](state)

      // Then
      expect(state.currentDate.format('YYYY-MM-DD')).toEqual(expectedPreviousDay)
    })
  })

  describe('CURRENT_DATE_REMOVE_MONTH', () => {
    describe('when current day is contained in the previous month', () => {
      it('should set state currentDate to the same day of the previous month', () => {
        // Given
        const state = {
          currentDate: moment('2017-10-30'),
        }
        const expectedPreviousMonth = '2017-09-30'

        // When
        mutations[CURRENT_DATE_REMOVE_MONTH](state)

        // Then
        expect(state.currentDate.format('YYYY-MM-DD')).toEqual(expectedPreviousMonth)
      })
    })

    describe('when current day is not contained in the previous month because it has less days', () => {
      it('should set state currentDate to the last day of the previous month', () => {
        // Given
        const state = {
          currentDate: moment('2017-10-31'),
        }
        const expectedPreviousMonthWithLessDays = '2017-09-30'

        // When
        mutations[CURRENT_DATE_REMOVE_MONTH](state)

        // Then
        expect(state.currentDate.format('YYYY-MM-DD')).toEqual(expectedPreviousMonthWithLessDays)
      })
    })
  })
})
