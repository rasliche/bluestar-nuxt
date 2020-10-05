/**
 * Gets a JWT from Authorization header
 * @param {Request} req Express request
 * @param {Response} _res Express response
 * @param {import("express").NextFunction} next Calls the next middleware/route
 */
module.exports = (req, _res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    req.authToken = req.headers.authorization.split(' ')[1];
  }
  next();
}