const Post = require('./post');

function init(app) {
  app.get('/post/add', function(req, res) {
    const title = req.query.title;

    if(title) {
      Post.create({
        title: title,
        timestamp: new Date().toLocaleString()
      });
    }

    res.jsonp({title});
  });
}

module.exports = {
  init
}
