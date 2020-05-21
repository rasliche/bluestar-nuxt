const router = require('express').Router()

router.post('/login', (req, res, next) => {
  const user = { name: 'eric' }
  res.send(user)
})

module.exports = router
