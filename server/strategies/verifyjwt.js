const jwt = require('jsonwebtoken')
const config = require('config')

/**
 * Verifies and decodes a JWT
 * @param {string} token JWT
 * @param {(err: Error, data: object) => void} callback runs after token is verified
 */
module.exports = (token, callback) => {
  jwt.verify(token, config.get('jwtPrivateKey'), {issuer: 'bluestar', audience: 'bluestar'}, (error, decodedToken) => {
    return callback(error, decodedToken)
  })
}