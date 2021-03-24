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
      return res.status(422).json({ message: 'There was an error adding this shop on the server. Please try again.'})
    }
    const { name, accessCode } = req.body
    const operatorExists = await Operator.find({ name: name })
    if (operatorExists.length) { return res.status(400).send({ message: 'That operator already exists.' })}

    const operator = new Operator({
      name,
      accessCode
    })

    try {
      await operator.save()
    } catch (error) {
      return res.status(400).json({ message: 'There was an error adding this shop on the server. Please try again.'})
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
