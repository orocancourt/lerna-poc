const { handler } = require('../services/status-service');
const { routeFactory } = require('./route-factory');

function createRoute() {
  return routeFactory('GET', 'status', handler);
}

module.exports = {
  createRoute,
};
