import { shallow } from '@vue/test-utils'
import moment from 'moment'
import CalendarCell from './CalendarCell.vue'
import Mission from '../Mission/Mission.vue'

describe('components | CalendarCell', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(CalendarCell)
  })

  describe('template', () => {
    it('should have CalendarCell as a name', () => {
      // then
      expect(CalendarCell.name).toBe('CalendarCell')
    })

    it('should render mission', () => {
      expect(wrapper.find(Mission).element).toBeDefined()
    })
  })

  describe('props', () => {
    it('should have props cellDate with default today default value', () => {
      // Given
      const now = 1487076708000
      Date.now = jest.fn(() => now)

      // When
      wrapper = shallow(CalendarCell)

      // Then
      expect(wrapper.vm.$props.cellDate.format()).toEqual(moment(now).format())
    })
  })
})
