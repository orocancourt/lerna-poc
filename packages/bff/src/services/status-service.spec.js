const { handler } = require('./status-service');
const apiService = require('./api-service');

const status = { origin: '10.1.2.3' };


jest.mock('./api-service');

describe('status-service', () => {
  beforeEach(() => {
    apiService.get.mockResolvedValue(status);
  });

  const statusApiUrl = 'status';

  describe('status', () => {
    let logger;

    it('should call apiService with correct parameters', async () => {
      expect.assertions(1);

      // When
      await handler(logger);

      // Then
      expect(apiService.get).toBeCalledWith(statusApiUrl, logger);
    });

    it('should return apiService response', async () => {
      expect.assertions(1);

      // When
      const returnedDemands = await handler(logger);

      // Then
      expect(returnedDemands).toEqual(status);
    });
  });
});
