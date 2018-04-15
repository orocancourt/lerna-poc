import { createLocalVue, mount, shallow } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import moment from 'moment'
import Calendar from './Calendar.vue'
import CalendarDays from '../CalendarDays/CalendarDays.vue'
import CalendarContent from '../CalendarContent/CalendarContent.vue'

describe('components | Calendar', () => {
  let localVue
  let store
  const now = 1487076708000
  const expectedCurrentDate = moment(now)

  beforeEach(() => {
    Date.now = jest.fn(() => now)
    localVue = createLocalVue()
    localVue.use(Vuetify)
    localVue.use(Vuex)
    store = new Vuex.Store({
      state: {
        currentDate: expectedCurrentDate,
      },
    })
  })

  describe('template', () => {
    it('should match snapshot', () => {
      // When
      const wrapper = shallow(Calendar, { store, localVue })

      // Then
      expect(wrapper.element).toMatchSnapshot()
    })

    it('should render calendar-days', () => {
      // When
      const wrapper = mount(Calendar, { store, localVue })

      // Then
      expect(wrapper.find(CalendarDays).element).toBeDefined()
    })

    it('should render calendar-content', () => {
      // When
      const wrapper = mount(Calendar, { store, localVue })

      // Then
      expect(wrapper.find(CalendarContent).element).toBeDefined()
    })

    describe('computed property', () => {
      it('should have currentDate from store', () => {
        // When
        const store = new Vuex.Store({
          state: {
            currentDate: expectedCurrentDate,
          },
        })
        const wrapper = mount(Calendar, { localVue, store })

        // Then
        expect(wrapper.vm.currentDate).toEqual(expectedCurrentDate)
      })
    })

    it('should render current date', () => {
      // Given
      const expectedText = 'novembre 1992'
      const computed = {
        formattedCurrentDate() {
          return expectedText
        },
      }
      // When
      const wrapper = shallow(Calendar, { localVue, computed, store })

      // Then
      expect(wrapper.find('h1').element.textContent).toEqual(expectedText)
    })

    describe('CalendarDays component props', () => {
      it('should set numberOfDays', () => {
        // Given
        const numberOfDays = 5
        const wrapper = mount(Calendar, { store, localVue })

        // When
        wrapper.setData({ numberOfDays })

        // Then
        expect(wrapper.find(CalendarDays).vm.$props.numberOfDays).toEqual(numberOfDays)
      })

      it('should set numberOfPastDays', () => {
        // Given
        const numberOfPastDays = 4
        const wrapper = mount(Calendar, { store, localVue })

        // When
        wrapper.setData({ numberOfPastDays })

        // Then
        expect(wrapper.find(CalendarDays).vm.$props.numberOfPastDays).toEqual(numberOfPastDays)
      })
    })

    describe('CalendarContent component props', () => {
      it('should set numberOfDays', () => {
        // Given
        const numberOfDays = 6
        const wrapper = mount(Calendar, { store, localVue })

        // When
        wrapper.setData({ numberOfDays })

        // Then
        expect(wrapper.find(CalendarContent).vm.$props.numberOfDays).toEqual(numberOfDays)
      })

      it('should set numberOfPastDays', () => {
        // Given
        const numberOfPastDays = 1
        const wrapper = mount(Calendar, { store, localVue })

        // When
        wrapper.setData({ numberOfPastDays })

        // Then
        expect(wrapper.find(CalendarContent).vm.$props.numberOfPastDays).toEqual(numberOfPastDays)
      })
    })
  })

  describe('data', () => {
    it('should set numberOfDays', () => {
      // When
      const wrapper = shallow(Calendar, { localVue, store })

      // Then
      expect(wrapper.vm.$data.numberOfDays).toEqual(8)
    })
    it('should set numberOfPastDays', () => {
      // When
      const wrapper = shallow(Calendar, { localVue, store })

      // Then
      expect(wrapper.vm.$data.numberOfPastDays).toEqual(2)
    })
  })

  describe('methods', () => {
    describe('formatDate', () => {
      it('should return formatted date with month and year', () => {
        // Given
        const date = moment('1992-11-07')
        const wrapper = shallow(Calendar, { localVue, store })

        // When
        const formattedDate = wrapper.vm.formatDate(date)

        // Then
        expect(formattedDate).toEqual('novembre 1992')
      })
    })

    xdescribe('showPreviousMonth', () => {
      describe('when current day is contained in the previous month', () => {
        it('should set current date to the same day of the previous month', () => {
          // Given
          const currentDate = moment('2017-10-30')
          const expectedPreviousMonth = '2017-09-30'
          const wrapper = shallow(Calendar, { localVue, store })
          wrapper.setData({ currentDate })

          // When
          wrapper.vm.showPreviousMonth()

          // Then
          expect(wrapper.vm.currentDate.format('YYYY-MM-DD')).toEqual(expectedPreviousMonth)
        })
      })

      describe('when current day is not contained in the previous month because it has less days', () => {
        it('should set current date to the last day of the previous month', () => {
          // Given
          const currentDate = moment('2017-10-31')
          const expectedPreviousMonthWithLessDays = '2017-09-30'
          const wrapper = shallow(Calendar, { localVue, store })
          wrapper.setData({ currentDate })

          // When
          wrapper.vm.showPreviousMonth()

          // Then
          expect(wrapper.vm.currentDate.format('YYYY-MM-DD')).toEqual(expectedPreviousMonthWithLessDays)
        })
      })
    })

    xdescribe('showNextMonth', () => {
      describe('when current day is contained in the next month', () => {
        it('should set current date to the same day of the next month', () => {
          // Given
          const currentDate = moment('2017-10-30')
          const expectedNextMonth = '2017-11-30'
          const wrapper = shallow(Calendar, { localVue, store })
          wrapper.setData({ currentDate })

          // When
          wrapper.vm.showNextMonth()

          // Then
          expect(wrapper.vm.currentDate.format('YYYY-MM-DD')).toEqual(expectedNextMonth)
        })
      })

      describe('when current day is not contained in the next month because it has less days', () => {
        it('should set current date to the last day of the next month', () => {
          // Given
          const currentDate = moment('2017-10-31')
          const expectedNextMonthWithLessDays = '2017-11-30'
          const wrapper = shallow(Calendar, { localVue, store })
          wrapper.setData({ currentDate })

          // When
          wrapper.vm.showNextMonth()

          // Then
          expect(wrapper.vm.currentDate.format('YYYY-MM-DD')).toEqual(expectedNextMonthWithLessDays)
        })
      })
    })
  })
})
