/**
 * Gets a JWT from the cookie
 * @param {Request} req Express request
 * @returns The JWT
 */
module.exports = (req) => {
  if (req && req.cookies) {
    return req.cookies['auth']
  }
}