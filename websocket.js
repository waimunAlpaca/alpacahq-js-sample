const Alpaca = require('@alpacahq/alpaca-trade-api')

const API_KEY = ''
const API_SECRET = ''

class DataStream {
  constructor({ apiKey, secretKey }) {
    this.alpaca = new Alpaca({
      keyId: apiKey,
      secretKey,
      paper: true,
    })

    // const socket = this.alpaca.crypto_stream_v2
    const socket = this.alpaca.data_stream_v2

    socket.onConnect(function () {
      console.log('Connected')

      //   socket.subscribeForTrades(['BTCUSD'])
      //   socket.subscribeForTrades(['ETHUSD'])

      socket.subscribeForQuotes(['AAPL'])
      socket.subscribeForTrades(['FB'])
      socket.subscribeForBars(['SPY'])
      socket.subscribeForStatuses(['*'])
    })

    socket.onError((err) => {
      console.log(err)
    })

    // socket.onCryptoTrade((trade) => {
    //   console.log(trade)
    // })

    // socket.onCryptoQuote((quote) => {
    //   console.log(quote)
    // })

    socket.onCryptoTrade((trade) => {
      console.log(trade)
    })

    socket.onStockTrade((trade) => {
      console.log(trade)
    })

    socket.onStockQuote((quote) => {
      console.log(quote)
    })

    socket.onStockBar((bar) => {
      console.log(bar)
    })

    socket.onStatuses((s) => {
      console.log(s)
    })

    socket.onStateChange((state) => {
      console.log(state)
    })

    socket.onDisconnect(() => {
      console.log('Disconnected')
    })

    socket.connect()
  }
}

let stream = new DataStream({
  apiKey: API_KEY,
  secretKey: API_SECRET,
})
