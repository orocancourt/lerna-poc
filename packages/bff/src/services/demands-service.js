const apiService = require('./api-service');

async function handler(logger) {
  return apiService.get('companies/companyB/demands', logger);
}

module.exports = {
  handler,
};
