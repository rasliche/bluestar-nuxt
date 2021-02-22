const mongoose = require('mongoose')

const operatorSchema = new mongoose.Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
)

operatorSchema.virtual('managers', {
  ref: 'UserOperatorRel',
  localField: '_id',
  foreignField: 'operatorID',
})

module.exports = mongoose.model('Operator', operatorSchema)
