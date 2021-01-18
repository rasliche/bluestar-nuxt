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
})

module.exports = model('QuizResult', quizResultSchema)
