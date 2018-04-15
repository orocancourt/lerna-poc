import { shallow } from '@vue/test-utils'
import moment from 'moment'
import Mission from '../Mission/Mission.vue'

describe('components | Mission', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(Mission)
  })

  describe('template', () => {
    it('should have Mission as a name', () => {
      // then
      expect(Mission.name).toBe('Mission')
    })
  })

  describe('props', () => {
    it('should have props missionDate with default today default value', () => {
      // Given
      const now = 1487076708000
      Date.now = jest.fn(() => now)

      // When
      wrapper = shallow(Mission)

      // Then
      expect(wrapper.vm.$props.missionDate.format()).toEqual(moment(now).format())
    })
  })
})
