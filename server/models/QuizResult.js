const {
  Schema: {
    Types: { ObjectId },
  },
  model,
  Schema,
} = require('mongoose')

const quizResultSchema = new Schema({
  score: {
    type: Number,
    required: true,
    default: 0
  },
  quiz: {
    type: ObjectId,
    ref: 'Quiz',
    required: true,
  },
  user: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  dateCompleted: {
    type: Date,
    required: true,
    default: new Date()
  }
})

quizResultSchema.pre('find', function() {
  this.populate('quiz')
})

module.exports = model('QuizResult', quizResultSchema)
