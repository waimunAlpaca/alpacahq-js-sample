const EventSource = require('EventSource')

const API_KEY = ''
const API_SECRET = ''

const API_URL = 'https://broker-api.sandbox.alpaca.markets'
// const API_URL = 'https://api.sandbox.alpaca.markets'

const token = `${API_KEY}:${API_SECRET}`
const encodedToken = Buffer.from(token).toString('base64')

// console.log('token ' + token)
// console.log('encodedToken ' + encodedToken)

const eventSourceHeaders = {
  headers: {
    Authorization: `Basic ${encodedToken}`,
  },
}
const es = new EventSource(
  'https://broker-api.sandbox.alpaca.markets/v1/events/accounts/status',
  eventSourceHeaders,
)

es.onmessage = (e) => {
  console.log(e.data)
}
