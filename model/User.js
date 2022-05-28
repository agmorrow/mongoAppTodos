const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

// User Schema
const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    minLength: 4,
    maxLength: 12,
    required: [true, 'Username is required and must be a minimum of 4 and maximum of 12 characters.'],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(value) {
        return isEmail(value);
      },
      message: function(userObject) {
        return `${userObject.email} is not a valid email address`;
      }
    }
  },
  role: {
    type: String,
    // an emum on a String type means that when we save this field to the database
    // it can only be 1 of the specified values in the enum array
    enum: ['Admin', 'Employee', 'Manager'],
  },
});

const User = model('User', userSchema);

module.exports = User;