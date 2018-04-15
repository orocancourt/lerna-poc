const { handler } = require('./demands-service');
const apiService = require('./api-service');

jest.mock('./api-service');

describe('demands-service', () => {
  const demands = [
    {
      service: 'maternite',
      domain: 'maternite',
      qualification: 'SAGE FEMME DE(F/H)',
      missions: [],
    },
  ];

  beforeEach(() => {
    apiService.get.mockResolvedValue(demands);
  });

  describe('demands', () => {
    let logger;

    it('should call apiService with correct parameters', async () => {
      // Given
      const demandsApiUrl = 'companies/companyB/demands';
      expect.assertions(1);

      // When
      await handler(logger);

      // Then
      expect(apiService.get).toBeCalledWith(demandsApiUrl, logger);
    });

    it('should return apiService response', async () => {
      // Given
      expect.assertions(1);

      // When
      const returnedDemands = await handler(logger);

      // Then
      expect(returnedDemands).toEqual(demands);
    });
  });
});
