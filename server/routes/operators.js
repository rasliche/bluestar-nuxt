/* eslint-disable no-console */
const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const Operator = require('../models/operator')
const BlueStarAuth = require('../strategies/BlueStarAuth')
const BlueStarAdminAuth = require('../strategies/BlueStarAdminAuth')

router.post(
  '/',
  BlueStarAdminAuth,
  [
    check('name').exists()
  ],
  async (req, res, _next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: true,
        message: 'There was an error adding this shop on the server. Please try again.',
        body: req.body
      })
    }
    const { name, accessCode } = req.body
    const operatorExists = await Operator.find({ name: name })
    if (operatorExists.length) { return res.status(400).send({ message: 'That operator already exists.' })}

    const operator = new Operator({name})
    if (accessCode) {
      operator.accessCode = accessCode
    }

    try {
      await operator.save()
    } catch (error) {
      return res.status(500).json({ message: 'There was an error adding this shop on the server. Please try again.'})
    }

    return res.json(operator.toJSON())
  })

router.get('/', BlueStarAuth, async (_req, res) => {
  const operators = await Operator.find({}).populate({
    path: 'users',
    populate: {
      path: 'userID',
      select: '-password',
    },
  })
  res.send(operators)
})

router.get('/:id', async (req, res, _next) => {
  try {
    const operator = await Operator.findById(req.params.id).populate({
      path: 'users',
      populate: {
        path: 'userID',
        select: '-password',
      },
    })
    res.send(operator)
  } catch (error) {
    res.status(404).send('Operator not found.')
  }
})

module.exports = router
