import { shallow, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import moment from 'moment'
import CalendarDays from './CalendarDays.vue'

describe('components | CalendarDays', () => {
  let localVue = createLocalVue()

  beforeEach(() => {
    localVue.use(Vuetify)
  })

  describe('computed', () => {
    describe('startDate', () => {
      describe('when numberOfPastDays is 2', () => {
        it('should return 2 days before the current date', () => {
          // Given
          const numberOfPastDays = 2
          const currentDate = moment('2018-02-10')
          const expectedStartDate = '2018-02-08'
          const wrapper = shallow(CalendarDays, { localVue })
          wrapper.setProps({ currentDate, numberOfPastDays })

          // When
          const startDate = wrapper.vm.startDate

          // Then
          expect(startDate.format('YYYY-MM-DD')).toEqual(expectedStartDate)
        })
      })

      describe('when numberOfPastDays is 3', () => {
        it('should return 3 days before the current date', () => {
          // Given
          const numberOfPastDays = 3
          const currentDate = moment('2018-02-10')
          const expectedStartDate = '2018-02-07'
          const wrapper = shallow(CalendarDays, { localVue })
          wrapper.setProps({ currentDate, numberOfPastDays })

          // When
          const startDate = wrapper.vm.startDate

          // Then
          expect(startDate.format('YYYY-MM-DD')).toEqual(expectedStartDate)
        })
      })
    })

    describe('days', () => {
      describe('when numberOfDays is 2', () => {
        it('should return an array of 2 days', () => {
          // Given
          const numberOfDays = 2
          const wrapper = shallow(CalendarDays, { localVue })
          wrapper.setProps({ numberOfDays })

          // When
          const days = wrapper.vm.days

          // Then
          expect(days).toHaveLength(2)
        })
      })

      describe('when numberOfDays is 3', () => {
        it('should return an array of 3 days', () => {
          // Given
          const numberOfDays = 3
          const wrapper = shallow(CalendarDays, { localVue })
          wrapper.setProps({ numberOfDays })

          // When
          const days = wrapper.vm.days

          // Then
          expect(days).toHaveLength(3)
        })
      })

      it('should return an array with following dates from start date', () => {
        // Given
        const numberOfDays = 3
        const propsData = { numberOfDays }
        const computed = {
          startDate() {
            return moment('2018-02-01')
          },
        }
        const expectedDays = [
          {
            'digit': '1',
            'isCurrentDate': false,
            'isToday': false,
            'isFutureDay': false,
            'isPastDay': true,
            'weekday': 'jeu',
          },
          {
            'digit': '2',
            'isCurrentDate': false,
            'isToday': false,
            'isFutureDay': false,
            'isPastDay': true,
            'weekday': 'ven',
          },
          {
            'digit': '3',
            'isCurrentDate': false,
            'isToday': false,
            'isFutureDay': false,
            'isPastDay': true,
            'weekday': 'sam',
          },
        ]
        const wrapper = shallow(CalendarDays, { localVue, propsData, computed })

        // When
        const days = wrapper.vm.days

        // Then
        expect(days).toEqual(expectedDays)
      })
    })
  })

  describe('methods', () => {
    describe('formatDayDigitFromDate', () => {
      it('should return formatted digit from given date', () => {
        // Given
        const date = moment('2018-02-01')
        const wrapper = shallow(CalendarDays, { localVue })

        // When
        const digit = wrapper.vm.formatDayDigitFromDate(date)

        // Then
        expect(digit).toEqual('1')
      })
    })

    describe('formatWeekdayFromDate', () => {
      it('should return formatted weekday from given date', () => {
        // Given
        const date = moment('2018-02-01')
        const wrapper = shallow(CalendarDays, { localVue })

        // When
        const weekday = wrapper.vm.formatWeekdayFromDate(date)

        // Then
        expect(weekday).toEqual('jeu')
      })
    })

    describe('isCurrentDate', () => {
      describe('when date is the current one', () => {
        it('should return true', () => {
          // Given
          const date = moment()
          const today = moment()
          const wrapper = shallow(CalendarDays, { localVue })
          wrapper.setProps({ currentDate: today })

          // When
          const isCurrentDate = wrapper.vm.isCurrentDate(date)

          // Then
          expect(isCurrentDate).toBeTruthy()
        })
      })

      describe('when date is not the current one', () => {
        it('should return false', () => {
          // Given
          const date = moment()
          const tomorrow = moment().add(1, 'day')
          const wrapper = shallow(CalendarDays, { localVue })
          wrapper.setProps({ currentDate: tomorrow })

          // When
          const isCurrentDate = wrapper.vm.isCurrentDate(date)

          // Then
          expect(isCurrentDate).toBeFalsy()
        })
      })
    })

    describe('isToday', () => {
      describe('when date is now', () => {
        it('should return true', () => {
          // Given
          const date = moment()
          const wrapper = shallow(CalendarDays, { localVue })

          // When
          const isToday = wrapper.vm.isToday(date)

          // Then
          expect(isToday).toBeTruthy()
        })
      })

      describe('when date is not now', () => {
        it('should return false', () => {
          // Given
          const date = moment().add(1, 'day')
          const wrapper = shallow(CalendarDays, { localVue })

          // When
          const isToday = wrapper.vm.isToday(date)

          // Then
          expect(isToday).toBeFalsy()
        })
      })
    })

    describe('isPastDay', () => {
      describe('when date is before today', () => {
        it('should return true', () => {
          // Given
          const date = moment().subtract(1, 'day')
          const wrapper = shallow(CalendarDays, { localVue })

          // When
          const isPastDay = wrapper.vm.isPastDay(date)

          // Then
          expect(isPastDay).toBeTruthy()
        })
      })

      describe('when date is not strictly before today', () => {
        it('should return false', () => {
          // Given
          const date = moment()
          const wrapper = shallow(CalendarDays, { localVue })

          // When
          const isPastDay = wrapper.vm.isPastDay(date)

          // Then
          expect(isPastDay).toBeFalsy()
        })
      })
    })

    describe('isFutureDay', () => {
      describe('when date is after today', () => {
        it('should return true', () => {
          // Given
          const date = moment().add(1, 'day')
          const wrapper = shallow(CalendarDays, { localVue })

          // When
          const isFutureDay = wrapper.vm.isFutureDay(date)

          // Then
          expect(isFutureDay).toBeTruthy()
        })
      })

      describe('when date is not strictly after today', () => {
        it('should return false', () => {
          // Given
          const date = moment()
          const wrapper = shallow(CalendarDays, { localVue })

          // When
          const isFutureDay = wrapper.vm.isFutureDay(date)

          // Then
          expect(isFutureDay).toBeFalsy()
        })
      })
    })

    describe('showPreviousDay', () => {
      it('should set current date to the previous day', () => {
        // Given
        const currentDate = moment('1992-11-07')
        const expectedPreviousDay = '1992-11-06'
        const wrapper = shallow(CalendarDays, { localVue })
        wrapper.setData({ currentDate })

        // When
        wrapper.vm.showPreviousDay()

        // Then
        expect(wrapper.vm.currentDate.format('YYYY-MM-DD')).toEqual(expectedPreviousDay)
      })
    })

    describe('showNextDay', () => {
      it('should set current date to the next day', () => {
        // Given
        const currentDate = moment('1992-11-07')
        const expectedNextDay = '1992-11-08'
        const wrapper = shallow(CalendarDays, { localVue })
        wrapper.setData({ currentDate })

        // When
        wrapper.vm.showNextDay()

        // Then
        expect(wrapper.vm.currentDate.format('YYYY-MM-DD')).toEqual(expectedNextDay)
      })
    })
  })
})
