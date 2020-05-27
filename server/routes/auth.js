const router = require('express').Router()
const User = require('../models/User')
// const passport = require('passport')
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
      console.log(errors)
      return res.status(422).send('There was an error processing your login information on the server. Please try again.')
    }

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(404).send('User not found.')

    try {
      const token = user.generateAuthToken()
      return res.send(token)
    } catch(e) {
      res.status(500).send('error')
    }
})

router.post('/logout', (req, res, next) => {
  req.logout()
  console.log('logout route')
  res.send('logged out')
})
module.exports = router
