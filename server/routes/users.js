const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const BlueStarAuth = require('../strategies/BlueStarAuth')

router.get('/me', BlueStarAuth, (req, res) => {
  const {name, email, roles} = req.user
  res.send({name, email, roles})
})

// Register a new user
router.post('/register', [
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
      return res.status(422).send('There was an error processing your registration information on the server. Please try again.')
    }
    try {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
      await user.save()
      return res.status(201).send('User created.')
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
