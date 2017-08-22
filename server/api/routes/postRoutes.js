const Post = require('../models/post');

function init(app) {
  const postModel = Post.model();

  app.get('/post/add', (req, res) => {
    const title = req.query.title;

    if(title) {
      const newPost = new postModel({
        title: title,
        timestamp: new Date().toLocaleString()
      });

      newPost.save(function (err) {
        if (err) return console.error(err);
        console.log('Added')
      });
    }

    res.jsonp({title});
  });

  app.get('/post/get', (req, res) => {
    const title = req.query.title;

    postModel.find({title}, (err, posts) => {
      return res.jsonp(JSON.stringify(posts));
    });
  });
}

module.exports = {
  init
}
