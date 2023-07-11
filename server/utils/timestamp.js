// server is located in AMS so the timestamp is 2 hours earlier
const localTimeStamp = () => {
  const timeStamp = new Date()
  timeStamp.setHours(timeStamp.getHours() + 2)
  return timeStamp.toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
  })
}

module.exports = localTimeStamp