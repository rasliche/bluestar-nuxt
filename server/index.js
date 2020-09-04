const config = require('config')
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
// const session = require('express-session')
// const passport = require('passport')
const mongoose = require('mongoose')

const app = express()

// Import and Set Nuxt.js options
const nuxtConfig = require('../nuxt.config.js')
nuxtConfig.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(nuxtConfig)

  const host = process.env.HOST || nuxt.options.server.host
  const port = process.env.PORT || nuxt.options.server.port

  await nuxt.ready()
  // Build only in dev mode
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Connect to MongooDB using Mongoose
  try {
    await mongoose.connect(config.get('mongoURI'), {
      connectTimeoutMS: 3000,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    consola.ready({
      message: 'Connected to MongoDB',
      badge: true
    })
  } catch (e) {
    consola.error({
      message: `Error connecting to MongoDB: ${e.message}`,
      badge: true
    })
    process.exit(1)
  }

  // Middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  // app.use(
  //   session({
  //     name: 'blue-training',
  //     secret: 'big-bluestar-secret',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       maxAge: 2 * 60 * 60 * 1000 // hours * minutes * seconds * milliseconds
  //     }
  //   })
  // )

  // setup passport
  // app.use(passport.initialize())
  // app.use(passport.session())
  // User static methods provided by passport-local-mongoose
  // passport.use(User.createStrategy())
  // passport.serializeUser(User.serializeUser())
  // passport.deserializeUser(User.deserializeUser())

  // Add route
  app.use('/api/auth', require('./routes/auth'))
  app.use('/api/users', require('./routes/users'))

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
