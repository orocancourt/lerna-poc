const { get } = require('lodash');
const axios = require('axios');
const { env } = require('../env/env');

async function getUrl(path, logger) {
  try {
    const url = `${env('API_URL')}${path}`;
    const response = await axios(url, { json: true });
    return get(response, 'data');
  } catch (error) {
    // TODO test the following line
    error.body = get(error, 'response.data');
    logger.error(error);
    throw error;
  }
}

module.exports = {
  get: getUrl,
};
