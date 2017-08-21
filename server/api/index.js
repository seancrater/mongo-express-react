const mongoose = require('mongoose');
const routes = require('./routes');

function init(app) {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://user:pass@ds149603.mlab.com:49603/seancraterblogtest', {
    useMongoClient: true
  }).then(
    () => {
      console.log('DB connected')
    },
    err => {
      console.log(err);
    }
  );

  routes.init(app);
}

module.exports = {
  init
}
