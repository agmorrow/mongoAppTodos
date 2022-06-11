const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

// User Schema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: {
    type: String,
    trim: true,
    // minLength: 4,
    // maxLength: 12,
    // required: [true, 'Username is required and must be a minimum of 4 and maximum of 12 characters.'],
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
  todoIds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo'
    }
  ],

}, {
  toJSON: {
    virtuals: true,
  },
id: false,
});
    
userSchema.virtual('fullName').get(function() {
return `${this.firstName} ${this.lastName}`;
});

userSchema.virtual('fullName').set(function(currentValueBeingSet, theObjectWeCallSetOn, documentBeingSaved) {
  console.log(currentValueBeingSet, 48);
  console.log(theObjectWeCallSetOn, 49);
  console.log(documentBeingSaved, 50);
});

//Model methods
userSchema.statics.findByRole = async function(role) {
  return await this.find({ role });
}

//Instance methods
userSchema.methods.greeting = function() {
  // this === the single document that is calling the greeting function
  console.log(`Hi my username is ${this.username} my role is ${this.role}`);
}

const User = model('User', userSchema);

module.exports = User;