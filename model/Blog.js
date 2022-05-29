const { Schema, model } = require('mongoose');

// Blog Schema
const blogSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
  }
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;