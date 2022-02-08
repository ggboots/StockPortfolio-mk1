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



// //fetch() -> requires http URL to work


// //serve.js removed
// //git rm --cached server.js has been used to stop it from being tracked



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
