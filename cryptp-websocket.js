"use strict";

/**
 * This examples shows how to use tha alpaca data v2 websocket to subscribe to events.
 * You should use the alpaca api's data_steam_v2, also add feed besides the other parameters.
 * For subscribing (and unsubscribing) to trades, quotes and bars you should call
 * a function for each like below.
 */

const Alpaca = require("@alpacahq/alpaca-trade-api");
const API_KEY = "";
const API_SECRET = "";

class CryptoStream {
    constructor({ apiKey, secretKey }) {
        this.alpaca = new Alpaca({
            keyId: apiKey,
            secretKey,
            paper: true
        });

        const socket = this.alpaca.crypto_stream_v2;

        socket.onConnect(function () {
            console.log("Connected");
            socket.subscribeForQuotes(["SHIBUSD"]);
            socket.subscribeForTrades(["BTCUSD"]);
        });

        socket.onCryptoQuote((quote) => {
            console.log(quote);
        });

        socket.onCryptoTrade((trade) => {
            console.log(trade);
        });

        socket.onError((err) => {
            console.log(err);
        });

        socket.onDisconnect(() => {
            console.log("Disconnected");
        });

        socket.connect();
    }
}

let stream = new CryptoStream({
    apiKey: API_KEY,
    secretKey: API_SECRET,
});