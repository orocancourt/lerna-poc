import { loadDemands } from './load-demands-action'
import apiService from '../../services/api-service'
import { SET_DEMANDS } from '../mutations/mutation-types'

const demands = [{ some: 'data' }]

describe('load-demands-action', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
    apiService.get = jest.fn()
  })

  describe('loadDemands', () => {
    describe('when the promise resolves demands', () => {
      beforeEach(() => {
        apiService.get.mockResolvedValue(demands)
      })

      it('should call the correct API demands endpoint', async () => {
        // Given
        expect.assertions(1)

        // When
        await loadDemands({ commit })

        // Then
        expect(apiService.get).toBeCalledWith('companies/companyB/demands')
      })

      it('should commit a SET_DEMANDS mutation', async () => {
        // Given
        expect.assertions(1)

        // When
        await loadDemands({ commit })

        // Then
        expect(commit).toBeCalledWith(SET_DEMANDS, { demands })
      })
    })
  })
})
