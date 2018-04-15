const dotenv = require('dotenv');

const env = dotenv.config();

module.exports = {
  env: key => env.parsed[key],
};
