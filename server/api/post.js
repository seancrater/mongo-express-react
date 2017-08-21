const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: String
});

const Post = mongoose.model('Post', postSchema);

function create(...postData) {
  const newPost = new Post(...postData);
  newPost.save(function (err) {
    if (err) return console.error(err);
    console.log('Added')
  });
}

module.exports = {
  create
}
