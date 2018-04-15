const apiService = require('./api-service');

async function handler(logger) {
  return apiService.get('status', logger);
}

module.exports = {
  handler,
};
