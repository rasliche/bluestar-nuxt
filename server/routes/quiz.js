const express = require('express')
const Quiz = require('../models/Quiz')
const QuizResult = require('../models/QuizResult')

const router = express.Router()

// Return all quizzes
router.get('/', async (req, res) => {
  const quizzes = await Quiz.find()
  res.json(quizzes)
})

// Return all quiz results
router.get('/results', async (req, res) => {
  const quizResults = await QuizResult.find()
  res.json(quizResults)
})

// Add or update a quiz
router.post('/add', (req, res) => {
  if (req.body && req.body.uuid) {
    // Get the UUID from the request
    const { uuid } = req.body

    // Create a new quiz and add its UUID
    Quiz.find({ uuid }).exec(async (err, quizzes) => {
      // Make a new Quiz
      let quiz = new Quiz()

      // If the quiz already exists, update it
      if (!err && quizzes.length > 0) {
        // Found a match
        quiz = quizzes[0]
      }

      // Update field(s)
      quiz.uuid = uuid

      // Save it
      await quiz.save()

      // Send the new quiz back
      res.json(quiz.toJSON())
    })
  } else {
    // Send an error message if no UUID was given
    res.status(400).json({
      error: true,
      message: 'UUID not given',
    })
  }
})

// Add or update a quiz result
router.post('/results/add', async (req, res) => {
  if (req.body && req.body.uuid && req.body.score && req.body.user) {
    // Get the quiz uuid, score, and user id from the request
    const { uuid, score, user } = req.body

    // Get the quiz from the DB
    const quizzes = await Quiz.find({ uuid }).limit(1)
    if (!quizzes || quizzes.length === 0) {
      return res.status(400).json({ error: true, message: 'Quiz not found' })
    }
    const quiz = quizzes[0]

    // Find an existing quiz result, else make a new one
    let results = await QuizResult.find({ quiz: quiz.id, user })
    if (!results || results.length === 0) {
      results = [new QuizResult()]
    }
    const result = results[0]

    // Update fields
    result.score = score
    result.quiz = quiz.id
    result.user = user

    // Save it
    await result.save()

    // Send back the quiz result
    return res.json(result.toJSON())
  } else {
    // Send an error if the required data wasn't given
    return res.status(400).json({
      error: true,
      message: 'Quiz UUID, score, and user id required',
    })
  }
})

// Return quiz results for a user
router.get('/results/for-user/:user', async (req, res) => {
  if (req.params && req.params.user) {
    const { user } = req.params
    const results = await QuizResult.find({ user })
    return res.json(results)
  } else {
    return res.status(400).json({
      error: true,
      message: 'User not given',
    })
  }
})

// Return quiz results for a quiz (UUID)
router.get('/results/for-quiz/:quiz', async (req, res) => {
  if (req.params && req.params.quiz) {
    const { quiz: uuid } = req.params
    const results = await QuizResult.find().populate({
      path: 'quiz',
      match: { uuid },
    })
    return res.json(
      results
        .filter(({ quiz }) => quiz != null)
        .map((doc) => {
          const { _id, score, user } = doc
          return { _id, score, user }
        })
    )
  } else {
    return res.status(400).json({
      error: true,
      message: 'Quiz UUID not given',
    })
  }
})

// Return quiz result for a quiz and user
router.get('/results/get/:user/:quiz', async (req, res) => {
  if (req.params && req.params.user && req.params.quiz) {
    const { quiz: uuid, user } = req.params
    let results = await QuizResult.find({ user }).populate({
      path: 'quiz',
      match: { uuid },
    })
    if (!results || results.length === 0) {
      return res.json({})
    }
    results = results.filter(({ quiz }) => quiz != null)
    results = results.map((doc) => {
      const { _id, score, user } = doc
      return { _id, score, user }
    })
    return res.json(results[0])
  } else {
    return res.status(400).json({
      error: true,
      message: 'Quiz UUID and user id required',
    })
  }
})

module.exports = router
