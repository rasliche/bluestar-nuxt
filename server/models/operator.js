const mongoose = require('mongoose')

const operatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },
  accessCode: {
    type: String,
    default: 'floridakeys',
  },
  programs: [String],
  managers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  annualRecognition: [
    {
      year: Number,
      requirements: {
        onlineTraining: Boolean,
        continuingEducation: [
          {
            title: String,
            description: String,
            date: Date,
          },
        ],
        inPersonEvaluation: {
          date: Date,
          passed: Boolean,
          evaluator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
        },
      },
    },
  ],
})

module.exports.Operator = mongoose.model('Operator', operatorSchema)
