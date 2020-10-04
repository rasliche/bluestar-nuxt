const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')

router.post('/login',
  [
    check('email')
      .isEmail()
      .normalizeEmail(),
    check('password')
      .isLength({ min: 6 })
  ],
  async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(422).send('There was an error processing your login. Try again.')
    }

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(404).send('User not found.')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) { return res.status(400).send('Invalid email or password') }

    const token = user.generateAuthToken()
    res.send(token)
})

module.exports = router
