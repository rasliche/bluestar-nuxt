const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')

router.post(
  '/login',
  [
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 6 }),
  ],
  async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send('There was an error processing your login. Try again.')
    }

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(404).send('User not found.')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) {
      return res.status(400).send('Invalid email or password')
    }

    const token = user.generateAuthToken()
    res.send(token)
  }
)

router.post(
  '/admin',
  [
    check('name').exists(),
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 6 }),
    check('passwordCopy')
      .exists()
      .custom((value, { req }) => value === req.body.password),
    check('adminPassword').equals(process.env.ADMIN_REGISTER_PASSWORD),
    // TODO pluck an admin password from env and check for it here
  ],
  async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send(
          'There was an error processing your registration information on the server. Please try again.'
        )
    }
    try {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        roles: { admin: true },
      })
      console.log(user)
      await user.save()
      return res.status(201).send('User created.')
    } catch (e) {
      // eslint-disable-line no-unused-expressions
      console.log(e)
      return res.status(500).send(`Error creating user ${e}.`)
    }
  }
)

router.post(
  '/manager',
  [
    check('name').exists(),
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 6 }),
    check('passwordCopy')
      .exists()
      .custom((value, { req }) => value === req.body.password),
    check('managerPassword').equals(process.env.MANAGER_REGISTER_PASSWORD),
    // TODO pluck an manager password from env and check for it here
  ],
  async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send(
          'There was an error processing your registration information on the server. Please try again.'
        )
    }
    try {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        roles: { manager: true },
      })
      console.log(user)
      await user.save()
      return res.status(201).send('User created.')
    } catch (e) {
      // eslint-disable-line no-unused-expressions
      console.log(e)
      return res.status(500).send(`Error creating user ${e}.`)
    }
  }
)

module.exports = router
