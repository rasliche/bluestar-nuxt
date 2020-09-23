const JwtStrategy = require('passport-jwt').Strategy
const config = require('config')
const User = require('../models/User')

/**
 * Extracts JWT from cookie
 * @param {Request} req The request object
 * @returns JWT if available
 */
function cookieExtractor(req) {
  let token = null
  if (req && req.cookies) {
    token = req.cookies['jwt']
  }
  return token
};

module.exports = new JwtStrategy({
  jwtFromRequest: cookieExtractor,
  secretOrKey: config.get('jwtPrivateKey'),
  issuer: 'bluestar', //TODO: replace with real url
  audience: 'bluestar', //TODO: replace with real url
}, (jwt_payload, done) => {
  User.findById(jwt_payload._id, function (err, user) {
    if (err) {
      return done(err, false)
    }
    if (user) {
      return done(null, user)
    } else {
      return done(null, false);
    }
  });
})
