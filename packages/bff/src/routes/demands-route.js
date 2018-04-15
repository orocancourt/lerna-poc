const { handler } = require('../services/demands-service');

function createRoute() {
  return {
    method: 'GET',
    path: 'demands',
    config: {
      handler,
      tags: ['api', 'demands'],
    },
  };
}

module.exports = {
  createRoute,
};
