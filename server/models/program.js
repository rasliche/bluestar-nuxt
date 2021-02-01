const mongoose = require('mongoose')

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports.Program = mongoose.model('Program', programSchema)

