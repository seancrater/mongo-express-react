const mongoose = require('mongoose');
const Post = require('./post');

function init(app) {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://ds149603.mlab.com:49603/seancraterblogtest', {
    useMongoClient: true
  }).then(
    () => {
      console.log('DB connected')
    },
    err => {
      console.log(err);
    }
  );

  Post.create({title: 'Test Object Title!'});
}

module.exports = {
  init
}
