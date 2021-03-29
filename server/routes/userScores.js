const router = require('express').Router({ mergeParams: true})
const { validationResult, param, body } = require('express-validator')
const User = require('../models/User')
const BlueStarAuth = require('../strategies/BlueStarAuth')

router.get('/',
    BlueStarAuth,
    [
        param('userId').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            // Send an error if the required data wasn't given
            return res.status(422).json({
                error: true,
                message: 'UserID required',
                body: req.body
            })
        }
        const user = await User.findById(req.params.userId).select('lessonScores')
        if (user.length === 0) {
            return res.status(404).send({
                error: true,
                message: 'User not found with given userId.',
                body: req.params
            })
        }
        console.log(user.lessonScores)
        return res.status(200).json(user.lessonScores)
    })

router.get('/:uuid',
    BlueStarAuth,
    [
        param('userId').exists(),
        param('uuid').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            // Send an error if the required data wasn't given
            return res.status(422).json({
                error: true,
                message: 'Quiz UUID and user id required',
                body: req.body
            })
        }

        // Get the quiz uuid and user id from the request
        const { userId, uuid } = req.params
        console.log(uuid)
        const user = await User.findById(userId, '-password').limit(1)
        const currentScoreRecord = user.lessonScores.find(record => record.uuid === uuid)
        console.log(currentScoreRecord)

        if (!currentScoreRecord) {
            return res.status(404).json({
                error: true,
                message: "Current score not found for current user and lesson."
            })
        }

        res.status(200).send(currentScoreRecord)
})

router.post('/:uuid',
    BlueStarAuth,
    [
        param('userId').exists(),
        param('uuid').exists(),
        body('score').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            // Send an error if the required data wasn't given
            return res.status(422).json({
                error: true,
                message: 'Quiz UUID, score, and user id required',
                body: req.body
            })
        }
        // Get the quiz uuid, score, and user id from the request
        const { score } = req.body
        const { userId, uuid } = req.params
    
        // Get the quiz from the DB
        const user = await User.findById(userId, '-password').limit(1)
        let currentScoreRecord = user.lessonScores.find(record => record.uuid === uuid)

        console.log(user)
        console.log(currentScoreRecord)

        if (!currentScoreRecord) {
            currentScoreRecord = {
                uuid,
                score
            }
            console.log('here')
            user.lessonScores.push(currentScoreRecord)
            await user.save()
            return res.send(currentScoreRecord)
        }
        if (score >=  currentScoreRecord.score) {
            currentScoreRecord.score = Math.max(currentScoreRecord.score, score)
            currentScoreRecord.date = new Date()
            await user.save()
            return res.send(currentScoreRecord)
        }

        // if (!quizzes || quizzes.length === 0) {
        //   return res.status(400).json({ error: true, message: 'Quiz not found' })
        // }
        // const quiz = quizzes[0]
    
        // Find an existing quiz result, else make a new one
        // let results = await QuizResult.find({ quiz: quiz.id, user })
        // if (!results || results.length === 0) {
        //   results = [new QuizResult()]
        // }
        // const result = results[0]
    
        // Update fields
        // if (score >= result.score) {
        //   result.dateCompleted = new Date()
        // }
        // result.score = Math.max(result.score, score)
        // result.quiz = quiz.id
        // result.user = user
    
        // Save it
        // await result.save()
    
        // Send back the quiz result
        // return res.json(result.toJSON())
        // res.send({
        //     ok: true,
        //     userId: req.params.userId,
        //     lessonUuid: req.params.uuid
        // })
})

router.post('/', BlueStarAuth, async (req, res) => {
    res.send('OK')
})

module.exports = router