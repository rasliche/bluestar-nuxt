const mongoose = require('mongoose')
const config = require('config')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
  },
  // operators: [{
  //     operator: {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: 'Operator'
  //     },
  //     canManage: {
  //         type: Boolean,
  //         default: false,
  //     }
  // }],
  lessonScores: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'QuizResult',
    },
  ],
  roles: {
    admin: {
      type: Boolean,
      default: false,
    },
    manager: {
      type: Boolean,
      default: false,
    },
  },
})

// Method on User object that signs and returns a JSON Web Token
// Token contains User._id and is no longer valid after 2 hours.
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      iss: 'bluestar',
      aud: 'bluestar',
    },
    config.get('jwtPrivateKey'), // secret
    { expiresIn: '2h' }
  ) // claims
  return token
}

module.exports = mongoose.model('User', userSchema)
