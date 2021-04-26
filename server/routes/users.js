const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const UserOperatorRel = require('../models/UserOperatorRel')
const BlueStarAuth = require('../strategies/BlueStarAuth')
const BlueStarAdminAuth = require('../strategies/BlueStarAdminAuth')
const BlueStarManagerAuth = require('../strategies/BlueStarManagerAuth')

router.get('/me', BlueStarAuth, (req, res) => {
  const { name, email, roles, _id } = req.user
  res.send({ name, email, roles, _id })
})

router.get('/is-admin', BlueStarAdminAuth, (_req, res) => {
  res.send('OK')
})

router.get('/is-manager', BlueStarManagerAuth, (_req, res) => {
  res.send('OK')
})

router.get('/:id', BlueStarAuth, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password")
    res.send(user)
  } catch (e) {
    console.log(e)
  }
})

// Register a new user
router.post(
  '/register',
  [
    check('name').exists(),
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 6 }),
    check('passwordCopy')
      .exists()
      .custom((value, { req }) => value === req.body.password),
  ],
  async (req, res, _next) => {
    // check validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send(
          'There was an error processing your registration information on the server. Please try again.'
        )
    }

    // check that user does not already exist
    let user = await User.find({ email: req.body.email })
    if (user.length) { return res.status(400).send('User could not be created.') }
    
    // try creating the user
    try {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
      user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      })
      await user.save()
      const { password, ...userInfo } = user.toObject()
      return res.status(201).send({
        error: null,
        message: 'User created.',
        user: userInfo
      })
    } catch (e) {
      // eslint-disable-line no-unused-expressions
      console.log(e)
      return res.status(500).send(`Error creating user ${e}.`)
    }
  }
)

router.post('/link-operator', async (req, res) => {
  if (!req.body || !req.body.operator || !req.body.user) {
    return res.status(400).json({
      error: true,
      message: 'Operator ID and/or user not given!',
      body: req.body,
    })
  }
  const { operator, user } = req.body

  const rel = new UserOperatorRel()
  rel.userID = user
  rel.operatorID = operator

  await rel.save()

  res.json(rel.toJSON())
})

router.get('/', BlueStarAdminAuth, async (_req, res) => {
  const users = await User.find().select('-password')
  res.send(users)
})

router.put('/change-role', BlueStarAdminAuth, async (req, res) => {
  if (!req.body || !req.body.user || !req.body.role) {
    return res.status(400).json({
      error: true,
      message: 'User ID and/or role not given!',
      body: req.body,
    })
  }
  
  const { user: userID, role } = req.body
  const user = await User.findById(userID)

  if (role === 'admin') {
    user.roles.admin = true
    user.roles.manager = false
  } else if (role === 'manager') {
    user.roles.admin = false
    user.roles.manager = true
  } else if (role === 'user') {
    user.roles.admin = false
    user.roles.manager = false
  } else {
    return res.status(400).json({
      error: true,
      message: 'Invalid role!',
      role,
    })
  }
  await user.save()
  res.json(user.toJSON())
})

module.exports = router
