const Alpaca = require('@alpacahq/alpaca-trade-api')

const API_KEY = ''
const API_SECRET = ''

const USE_POLYGON = false // by default we use the Alpaca data stream but you can change that

class Trade {
  constructor({ keyId, secretKey, paper = true }) {
    this.alpaca = new Alpaca({
      keyId: keyId,
      secretKey: secretKey,
      paper: paper,
      usePolygon: USE_POLYGON,
    })

    let stocks = ['', '']
    this.long = []
    this.short = []
  }

  async getAccount() {
    this.alpaca.getAccount().then((account) => {
      console.log('Current Account:', account)
    })
  }
}

let client = new Trade({
  keyId: API_KEY,
  secretKey: API_SECRET,
  paper: true,
})

client.getAccount()
