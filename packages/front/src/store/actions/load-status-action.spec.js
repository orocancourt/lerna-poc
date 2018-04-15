import { loadStatus } from './load-status-action'
import apiService from '../../services/api-service'
import { SET_STATUS } from '../mutations/mutation-types'

describe('actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
    apiService.get = jest.fn()
  })

  describe('LOAD_STATUS', () => {

    describe('when the promise resolves data', () => {

      const status = { hello: 'world' }

      beforeEach(() => {
        apiService.get.mockResolvedValue(status)
      })

      it('should call the correct API status endpoint', async () => {
        // Given
        expect.assertions(1)

        // When
        await loadStatus({ commit })

        // Then
        expect(apiService.get).toBeCalledWith('status')
      })

      it('should commit a SET_STATUS action', async () => {
        // Given
        expect.assertions(1)

        // When
        await loadStatus({ commit })

        // Then
        expect(commit).toBeCalledWith(SET_STATUS, { status })
      })
    })
  })
})
