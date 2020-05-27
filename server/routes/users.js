const router = require('express').Router()
const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const authenticated = require('../middleware/authenticated')

router.get('/me', [authenticated], (req, res, next) => {
  const { name, email, roles } = req.user
  res.send({ name, email, roles })
})

// Register a new user
router.post('/', [
  check('name')
    .exists(),
  check('email')
    .isEmail()
    .normalizeEmail(),
  check('password')
    .isLength({ min: 6 }),
  check('passwordCopy')
    .exists()
    .custom((value, { req }) => value === req.body.password)
  ], 
  async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(422).send('There was an error processing your registration information on the server. Please try again.')
    }
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email
      })
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(req.body.password, salt)
        req.body.password
      await user.save()
      res.status(201).send('User created.')
    } catch (e) { // eslint-disable-line no-unused-expressions
      console.log(e)
      return res.status(500).send(`Error creating user ${e}.`)
    }
})

router.get('/', async (req, res, next) => {
  const users = await User.find({})
  res.send(users)
})

module.exports = router
