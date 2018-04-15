const { createRoute } = require('./demands-route');
const { handler } = require('../services/demands-service');

describe('demands-route', () => {
  it('should create route with correct params', () => {
    // When
    const route = createRoute();

    // Then
    expect(route).toEqual({
      method: 'GET',
      path: 'demands',
      config: {
        handler,
        tags: ['api', 'demands'],
      },
    });
  });
});

