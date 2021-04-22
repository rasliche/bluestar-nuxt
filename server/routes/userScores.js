const router = require('express').Router({ mergeParams: true})
const { validationResult, param, body } = require('express-validator')
const User = require('../models/User')
const Quiz = require('../models/Quiz')
const QuizResult = require('../models/QuizResult')
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
        const quiz = await Quiz.find({ uuid: uuid })
        let quizResult = await QuizResult.find({ user: userId, quiz: quiz[0]._id })

        if (quizResult.length === 0) {
            return res.status(404).json({
                error: true,
                message: "Score not found for current user and lesson."
            })
        }

        res.status(200).send(quizResult)
})

router.post('/:uuid',
    BlueStarAuth,
    [
        param('userId').exists(),
        param('uuid').exists(),
        body('score').exists(),
    ],
    async (req, res) => {
        try {
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
        
            // If a quiz result exists and the new score is higher
            // the score should be updated. If the score is lower,
            // the old score should be returned unchanged.
            const quiz = await Quiz.find({ uuid }).limit(1)
            let quizResult = await QuizResult.find({ user: userId, quiz: quiz[0]._id })
            console.log({ quizResult })
            if (quizResult.length < 1) { // && score >= quiz.minimumScore
                // Get the quiz from the DB
                quizResult = new QuizResult({
                    score,
                    quiz: quiz[0]._id,
                    user: userId,
                })

                await quizResult.save()
                return res.status(201).send(quizResult)
            }

            quizResult.score = Math.max(quizResult.score, score)
            quizResult.date = new Date()
            await quizResult.save()
            return res.send(quizResult)
        } catch (error) {
            return res.status(500).send({ message: "There was an error on the server." })
        }
})

router.post('/', BlueStarAuth, async (req, res) => {
    res.send('OK')
})

module.exports = router
