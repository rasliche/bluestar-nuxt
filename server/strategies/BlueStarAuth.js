const passport = require('passport')
const User = require('../models/User')
const express = require('express')
const verifyJwt = require('./verifyjwt')

/**
 * Verifies user account and fetches user profile
 * @param {Request} req Express request
 * @param {Response} res Express response
 * @param {import("express").NextFunction} next Calls the next middleware/route
 */
module.exports = (req, res, next) => {
  const auth = passport.authenticate('BlueStarAuth', {session: false})
  auth(req, res, () => {
    if (!req.authToken) {
      return res.status(401).send("Token missing from Authorization header")
    }
    verifyJwt(req.authToken, (err, data) => {
      if (err) return res.status(401).send(err.message)

      if (data._id) {
        User.findById(data._id).exec((err, document) => {
          if (err) return res.status(401).send(err.message)
          req.user = document
          next()
        })
      }
    })
  })
}