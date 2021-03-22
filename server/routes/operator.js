/* eslint-disable no-console */
const router = require('express').Router()
const Operator = require('../models/operator')

router.post('/add', async (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).json({
      error: true,
      message: 'Operator name not provided!',
      body: req.body,
    })
  }
  const { name, accessCode } = req.body
  const operator = new Operator()
  operator.name = name
  if (accessCode) {
    operator.accessCode = accessCode
  }

  try {
    await operator.save()
  } catch (error) {
    return res.status(400).json(error)
  }

  return res.json(operator.toJSON())
})

router.get('/', async (_req, res) => {
  const operators = await Operator.find({}).populate({
    path: 'users',
    populate: {
      path: 'userID',
      select: '-password',
    },
  })
  res.send(operators)
})

module.exports = router
