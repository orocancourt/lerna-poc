function routeFactory(method, path, handler, options) {
  return {
    method,
    path,
    config: {
      handler,
      tags: path.split(),
    },
    ...options,
  };
}

module.exports = {
  routeFactory,
};
