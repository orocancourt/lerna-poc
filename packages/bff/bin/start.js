const Hapi = require('hapi');
const { getRoutes } = require('../src/routes/routes');

const server = Hapi.server({
  port: 9100,
  routes: { cors: true },
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
}

function initRoutes() {
  getRoutes().map(route => server.route(route));
}

initRoutes();
start();
