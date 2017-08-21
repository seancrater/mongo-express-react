const webpack = require('webpack');

function init(app, config) {
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

module.exports = {
  init
}
