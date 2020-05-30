const mongoose = require('mongoose')
const Joi = require('joi')

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

function validateProgram(program) {
  const schema = {
    name: Joi.string().required()
  }
  return Joi.validate(program, schema)
}

module.exports.Program = mongoose.model('Program', programSchema)
module.exports.validateProgram = validateProgram
