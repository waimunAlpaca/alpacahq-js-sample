# alpacahq-js-sample

A simple Node.js project to get you started on alpaca APIs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

@alpacahq/alpaca-trade-api is a Node.js library for the Alpaca Commission Free Trading API. Note that this package supports only **Node.js v14.x or newer & npm version 6 and above**.

Install the latest [Node.js](https://nodejs.org/en/download/) >= 14.x & [npm](https://nodejs.org/en/download/) >= 6.x.

Install the @alpacahq/alpaca-trade-api package.

```
npm install --save @alpacahq/alpaca-trade-api
```

### Setup the API KEY_ID and SECRET_KEY

1. Get the API Key & Secret from [Alpaca](https://app.alpaca.markets/paper/dashboard/overview).  

2. Set the `API_KEY` & `API_SECRET` values in `trade.js`, `websocket.js` & `crypto-websocket.js`.  

### Run the project

To run the trade service

```
node trade.js
```

To run the websocket service for Stocks

```
node websocket.js 
```

To run the websocket service for Crypto

```
node crypto-websocket.js 
```

To run the SSE service

```
node sse.js 
```

## References

In the [examples](https://github.com/alpacahq/alpaca-trade-api-js/tree/master/examples) folder there's a few algorithms that connect to the paper-trading API.
* Mean Reversion
* Long-Short Equity

## Built With

* Official client SDKs [alpaca-trade-api-js](https://github.com/alpacahq/alpaca-trade-api-js) / [npm](https://www.npmjs.com/package/@alpacahq/alpaca-trade-api)
* [alpaca Broker API](https://alpaca.markets/docs/broker/)
* [alpaca Trading API](https://alpaca.markets/docs/trading/)
* [alpaca Market Data API](https://alpaca.markets/docs/market-data/)
* [README.md](https://github.com/waimunAlpaca/README.md) - Yet another README.md template! 

## Contributing

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our [CONTRIBUTING.md](https://github.com/angular/angular/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Wai Mun** - *Initial work* - [waimunAlpaca](https://github.com/waimunAlpaca)

## License

This project is licensed under the Apache License License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* [CONTRIBUTING.md](https://github.com/angular/angular/blob/master/CONTRIBUTING.md) - Contributing to Angular.
* [Conventional Commits](https://www.conventionalcommits.org/) - A specification for adding human and machine readable meaning to commit messages.
