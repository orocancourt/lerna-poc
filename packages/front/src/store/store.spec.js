import { state } from './store'

const now = new Date('2017-12-12')
jest.mock('moment', () => () => new Date('2017-12-12'))

describe('store', () => {
  describe('state', () => {
    it('should initialize state.demands and state.status with an empty array', () => {
      // Then
      expect(state).toEqual({
        demands: [],
        status: {},
        currentDate: now,
      })
    })
  })
})
