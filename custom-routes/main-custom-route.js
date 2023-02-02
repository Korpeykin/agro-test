const { agroTest } = require('./agro-test');

const pages = {
  enableRouter: true,
  customRoutes: [agroTest],
};

module.exports = { pages };
