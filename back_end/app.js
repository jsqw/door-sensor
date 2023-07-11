const express = require('express')
const app = express()
const cors = require('cors')
require('express-async-errors')

const statusRouter = require('./controllers/status')
const { errorHandler, requestValidator } = require('./utils/middleware')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use('/api/doorstatus', requestValidator, statusRouter)
app.use(errorHandler)

module.exports = app