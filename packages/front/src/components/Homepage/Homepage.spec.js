import { createLocalVue, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import moment from 'moment'
import Vuex from 'vuex'
import Homepage from './Homepage.vue'
import Calendar from '../Calendar/Calendar.vue'

describe('components | Homepage', () => {
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
        status: { version: '1.0.0' },
      },
      dispatch: jest.fn(),
    })
  })

  describe('template', () => {
    it('should render nav', () => {
      const wrapper = mount(Homepage, { store, localVue })

      expect(wrapper.find('nav').element).toBeDefined()
    })
    it('should render Calendar', () => {
      const wrapper = mount(Homepage, { store, localVue })

      expect(wrapper.find(Calendar).element).toBeDefined()
    })
    it('should render aside', () => {
      const wrapper = mount(Homepage, { store, localVue })

      expect(wrapper.find('aside').element).toBeDefined()
    })
  })
})
