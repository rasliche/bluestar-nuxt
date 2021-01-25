const {
  Schema: {
    Types: { ObjectId },
  },
  Schema,
  model,
} = require('mongoose')

const quizSchema = new Schema({
  uuid: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true, // redundant
  },
  topic: {
    type: String,
    required: false, // TODO: Add topics to DB
    lowercase: true,
    trim: true,
  },
  lesson: {
    type: ObjectId,
    ref: 'Lesson',
    required: false, // TODO: enforce this
  },
  minimumScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
})

quizSchema.query.byUUID = (uuid) => {
  return this.where('uuid').equals(uuid)
}

module.exports = model('Quiz', quizSchema)
