import { createLocalVue, mount, shallow } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import CalendarContent from './CalendarContent.vue'
import CalendarCell from '../CalendarCell/CalendarCell.vue'

describe('components | CalendarContent', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuetify)
    localVue.use(Vuex)
  })

  describe('template', () => {
    it('should have CalendarContent as a name', () => {
      // Then
      expect(CalendarContent.name).toBe('CalendarContent')
    })

    it('should render as many calendar-cell as prop numberOfDays', () => {
      // Given
      const wrapper = mount(CalendarContent, { localVue })
      const numberOfDays = 6

      // When
      wrapper.setProps({ numberOfDays })

      // Then
      expect(wrapper.findAll(CalendarCell)).toHaveLength(numberOfDays)
    })
  })

  describe('computed property', () => {
    it('should have currentDate from store', () => {
      // When
      const store = new Vuex.Store({
        state: {
          currentDate: 'toto',
        },
      })
      const wrapper = mount(CalendarContent, { localVue, store })

      // Then
      expect(wrapper.vm.currentDate).toEqual('toto')
    })
  })

  describe('default props', () => {
    it('should have props numberOfDays with a default value of 8', () => {
      // When
      const wrapper = shallow(CalendarContent, { localVue })

      // Then
      expect(wrapper.vm.$props.numberOfDays).toEqual(8)
    })

    it('should have props numberOfPastDays with a default value of 2', () => {
      // When
      const wrapper = shallow(CalendarContent, { localVue })

      // Then
      expect(wrapper.vm.$props.numberOfPastDays).toEqual(2)
    })
  })
})
