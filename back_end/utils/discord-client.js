const logger = require('../utils/logger')

// Tests are ran on different Discord server
const TOKEN = process.env.NODE_ENV === 'test'
  ? process.env.TEST_TOKEN
  : process.env.TOKEN

const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
})

client.login(TOKEN)
  .then(() => {
    logger.info('Connected to Discord API.')
  })
  .catch((error) => {
    logger.error('Error connecting to Discord API', error.message)
  })

module.exports = client