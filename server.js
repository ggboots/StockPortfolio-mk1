// // allows to load module and give access to exports
const express = require('express')
const yahooFinance = require('yahoo-finance');
const axios = require('axios')
const redis = require('redis')
const responseTime = require('response-time')
const fs = require('fs')

const app = express()
const port = 299;

app.use(express.static())


// // API keys, how do they work


// //fetch() -> requires http URL to work


// //serve.js removed
// //git rm --cached server.js has been used to stop it from being tracked


app.get('/price', (req, res) => {
    const symbol = req.query.symbol;
    if (!symbol) {
        return res.status(404).send('Not found');
    }
    yahooFinance.quote({
        symbol: symbol,
        modules: ['financialData']
    }, function (err, quotes) {
        if (quotes && quotes.financialData && quotes.financialData.currentPrice) {
            res.send({
                symbol: symbol,
                price: quotes.financialData.currentPrice
            });
        } else {
            return res.status(404).send('Not found');
        }
    });
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
