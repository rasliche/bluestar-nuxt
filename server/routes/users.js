const router = require('express').Router()

router.get('/users', (req, res, next) => {
  const users = req.path
  res.send(users)
})

module.exports = router
