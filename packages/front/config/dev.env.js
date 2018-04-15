
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  API_HOST: '"http://localhost:9100"',
  API_URL: '"http://localhost:9100/api/"',
  BASE_URL: '"/api/"',
  NODE_ENV: '"development"',
});
