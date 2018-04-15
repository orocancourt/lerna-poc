
const merge = require('webpack-merge');
const devEnv = require('./dev.env');

module.exports = merge(devEnv, {
  API_HOST: '"http://url-du-bff-staging-ou-integration"',
  API_URL: '"http://url-du-bff-staging-ou-integration/api/baseUrl/"',
  BASE_URL: '"/api/baseUrl/"',
  NODE_ENV: '"testing"',
});
