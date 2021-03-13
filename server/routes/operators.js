/* eslint-disable no-console */
const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const Operator = require('../models/operator')

router.post(
  '/',
  [
    check('name').exists(),
    check('accessCode').exists()
  ],
  async (req, res, _next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).send('There was an error processing your registration information on the server. Please try again.')
    }
    // if (!req.body || !req.body.name) {
    //   return res.status(400).json({
    //     error: true,
    //     message: 'Operator name not provided!',
    //     body: req.body,
    //   })
    // }
    const { name, accessCode } = req.body
    const operator = new Operator({
      name,
      accessCode
    })
    // operator.name = name
    // if (accessCode) {
    //   operator.accessCode = accessCode
    // }

    try {
      await operator.save()
    } catch (error) {
      return res.status(400).json(error)
    }

    return res.json(operator.toJSON())
  })

router.get('/', async (_req, res) => {
  const operators = await Operator.find({}).populate('managers')
  res.send(operators)
})

router.get('/:id', async (req, res, _next) => {
  const operator = await Operator.findById(req.params.id).populate('managers')
  res.send(operator)
})

module.exports = router
