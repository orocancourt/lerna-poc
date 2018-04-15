import axios from 'axios'
import logger from '../logger/logger'
import apiService from './api-service'
import { env } from '../env/env'

jest.mock('axios')
jest.mock('../env/env')

describe('apiService', () => {
  const API_URL = 'http://localhost:9100/api/'

  beforeEach(() => {
    logger.error = jest.fn()
  })

  describe('get', () => {
    const path = 'status'

    describe('when the promise resolves data', () => {

      const data = { hello: 'world' }

      beforeEach(() => {
        env.mockReturnValue(API_URL)
        axios.get.mockResolvedValue({ data })
      })

      it('should call the correct API status endpoint', async () => {
        // Given
        expect.assertions(1)
        const url = `${API_URL}${path}`

        // When
        await apiService.get(path)

        // Then
        expect(axios.get).toBeCalledWith(url, { json: true })
      })

      it('should return response data', async () => {
        // Given
        expect.assertions(1)

        // When
        const response = await apiService.get(path)

        // Then
        expect(response).toEqual(data)
      })
    })

    describe('when the promise rejects', () => {
      beforeEach(() => {
        axios.get.mockRejectedValue(new Error('Async error'))
      })

      it('should log the error', async () => {
        // Given
        expect.assertions(1)

        // When
        await apiService.get(path)

        // Then
        expect(logger.error).toBeCalledWith('Async error')
      })
    })
  })
})
