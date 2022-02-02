
// allows to load module and give access to exports
const express = require('express')
const axios = require('axios')
const redis = require('redis')
const responseTime = require('response-time')
const fs = require('fs')

const app = express()

let ledgerData = fs.readFileSync('./ledger-Data.json')
let ledger = JSON.parse(ledgerData);
console.log(ledger[0].stock)
module.exports = {ledger};

const PORT = 3000;
app.use(express.json())


app.listen(PORT, () => console.log(`listening to Port ${PORT}`))

// API keys, how do they work


//fetch() -> requires http URL to work



