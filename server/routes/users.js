const router = require('express').Router()

router.get('/', (req, res, next) => {
  const users = { name: 'eric' }
  res.send(users)
})

module.exports = router
