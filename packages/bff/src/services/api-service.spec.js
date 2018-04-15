const nock = require('nock');
const apiService = require('./api-service');
const { env } = require('../env/env');

jest.mock('../env/env');

describe('api-service', () => {
  const API_HOST = 'http://localhost:9100';
  const API_URL = 'http://localhost:9100/api/';
  const BASE_URL = '/api/';
  let mockApiV2Randstad;

  beforeAll(() => {
    mockApiV2Randstad = nock(API_HOST)
      .defaultReplyHeaders({
        'Access-Control-Allow-Origin': '*',
      });
  });

  beforeEach(() => {
    env.mockReturnValue(API_URL);
  });

  describe('api', () => {
    let logger;
    const path = 'companies/companyB/demands';
    const apiUrl = `${BASE_URL}${path}`;

    describe('when call succeeds', () => {
      it('should call correct apiUrl including path', async () => {
        expect.assertions(1);
        // Given
        const mockApiRandstad =
          mockApiV2Randstad
            .get(apiUrl)
            .reply(200);

        // When
        await apiService.get(path);

        // Then
        expect(mockApiRandstad.isDone()).toBeTruthy();
      });

      it('should return correct response', async () => {
        expect.assertions(1);
        // Given
        const responseBody = { some: 'data' };
        mockApiV2Randstad
          .get(apiUrl)
          .reply(200, responseBody);

        // When
        const returnedDemands = await apiService.get(path);

        // Then
        expect(returnedDemands).toEqual(responseBody);
      });
    });

    describe('when call fails', () => {
      const expectedError = {
        errorMessage: 'my custom error',
      };
      logger = { error: jest.fn() };

      it('should throw the error', async () => {
        expect.assertions(1);
        // Given
        mockApiV2Randstad
          .get(apiUrl)
          .reply(400, expectedError);

        // When
        try {
          await apiService.get(path, logger);
        } catch (error) {
          // Then
          expect(error.body).toEqual(expectedError);
        }
      });

      it('should log the error', async () => {
        expect.assertions(1);
        // Given
        mockApiV2Randstad
          .get(apiUrl)
          .reply(400, expectedError);

        // When
        try {
          await apiService.get(path, logger);
        } catch (error) {
          // Then
          expect(logger.error).toBeCalledWith(error);
        }
      });
    });
  });
});
