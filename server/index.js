const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const consola = require('consola')
const config = require('config')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const quizRoute = require('./routes/quiz')
const operatorRoute = require('./routes/operators')

const jwtStrategy = require('./strategies/jwt')
const getJwt = require('./strategies/getjwt')

const app = express()

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

app.use('/users', userRoute)
app.use('/auth', authRoute)
app.use('/quiz', quizRoute)
app.use('/operators', operatorRoute)

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3001

app.listen(port, host, () => {
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
})
