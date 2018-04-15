/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const path = require('path');
const fs = require('fs');

const PATH_PREFIX = '/api/';

function getRoutes() {
  return fs.readdirSync(__dirname)
    .filter(filename => !filename.startsWith('.'))
    .filter(filename => filename.endsWith('-route.js'))
    .map(routeFile => require(path.join(__dirname, routeFile)))
    .map(({ createRoute }) => createRoute())
    .map(route => ({ ...route, path: PATH_PREFIX + route.path }));
}

module.exports = {
  getRoutes,
};

