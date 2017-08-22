const postRoutes = require('./postRoutes');

function init(app) {
  postRoutes.init(app);
}

module.exports = {
  init
}
