const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const consola = require('consola')
const config = require('config')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const userRoutes = require('./routes/users')
const userScoresRoutes = require('./routes/userScores')
const authRoutes = require('./routes/auth')
const quizRoutes = require('./routes/quiz')
const operatorRoutes = require('./routes/operators')

const jwtStrategy = require('./strategies/jwt')
const getJwt = require('./strategies/getjwt')

const app = express()
app.disable('x-powered-by')

mongoose
  .connect(config.get('mongoURI'), {
    connectTimeoutMS: 3000,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    consola.ready({
      message: 'Connected to MongoDB',
      badge: true,
    })
  })
  .catch((e) => {
    consola.error({
      message: `Error connecting to MongoDB: ${e.message}`,
      badge: true,
    })
    process.exit(1) //TODO: handle better
  })

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
  })
)
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser());
app.use(getJwt)

app.use(passport.initialize())
passport.use('BlueStarAuth', jwtStrategy)

app.use('/users', userRoutes)
app.use('/users/:userId/scores',userScoresRoutes)
app.use('/auth', authRoutes)
app.use('/quiz', quizRoutes)
app.use('/operators', operatorRoutes)

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3001

const server = app.listen(port, host, () => {
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
})

module.exports = server