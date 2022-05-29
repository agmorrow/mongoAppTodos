const { Schema, model } = require('mongoose');

//Todo Schema
const todoSchema = new Schema({
  userId: {
    // ObjectId type
    type: Schema.Types.ObjectId,
    // Ref means which Collection does this ObjectId reference?
    ref: 'User',
  },
  text: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;