// allows to load module and give access to exports
const express = require('express')
const yahooFinance = require('yahoo-finance');
const axios = require('axios')
const redis = require('redis')
const responseTime = require('response-time')
const fs = require('fs')


// fetch(USDAUD)
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// });
