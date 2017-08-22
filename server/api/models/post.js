const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: String,
  timestamp: String
});

const Post = mongoose.model('Post', postSchema);

function model() {
  return Post;
}

module.exports = {
  model
}
