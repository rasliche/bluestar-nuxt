const mongoose = require('mongoose')

const userOperatorRel = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  operatorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Operator',
  },
})

module.exports = mongoose.model('UserOperatorRel', userOperatorRel)
