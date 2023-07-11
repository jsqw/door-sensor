require('dotenv').config()
const router = require('express').Router()
const DISCORD_CLIENT = require('../utils/discord-client')

// Tests are completed on different Discord channel
const DISCORD_CHANNEL = process.env.NODE_ENV === 'test'
  ? process.env.TEST_CHANNEL
  : process.env.CHANNEL

const statusMessage = require('../utils/status-message')
const getTimeStamp = require('../utils/timestamp')

let status = true

router.get('/', (req, res) => {
  res.json(status)
})

router.post('/', (req, res) => {
  status = req.body.status
  if (typeof status !== 'boolean') {
    return res.status(400).json({
      error: 'Invalid request format.',
    })
  } else {
    const time = getTimeStamp()
    res.json(status)
    if (status) {
      statusMessage(
        DISCORD_CLIENT,
        DISCORD_CHANNEL,
        `The door has been open since ${time}. 🐧`
      )
    } else {
      statusMessage(
        DISCORD_CLIENT,
        DISCORD_CHANNEL,
        `The door has been closed since ${time}. 🐧`,
      )
    }
  }
})


module.exports = router