require('dotenv').config()
const logger = require('./logger')
const { AuthError } = require('./error')

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  if (error.name === 'AuthError') {
    return response.status(401).json({ error: error.message })
  }

  next(error)
}

const requestValidator = async (request, response, next) => {
  if (request.method === 'GET') {
    next()
  } else {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      if (authorization.substring(7) === process.env.BEARER) {
        logger.info('Authorized request received.')
      } else {
        throw new AuthError('Invalid token!')
      }
    } else {
      throw new AuthError('Invalid token or missing!')
    }
    next()
  }
}

module.exports = {
  errorHandler, requestValidator
}