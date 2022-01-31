// allows to load module and give access to exports

// Bedtime research
// what is a CORSc--> security policy to allow data to be exchanged from two URLs
//CrossOriginResourceSharing
// MIME Type --> specifies the type of data
// API keys, how do they work


const express = require('express')
const axios = require('axios')
const redis = require('redis')
const responseTime = require('response-time')

const app = express()
app.use(responseTime())

app.get('/rockets', async (req, res, next) => {
    try{
        const response = await axios.get('https://api.spacexdata.com/v3/rockets')
        res.send(response.data)
    }catch (error){
        res.send(error.message)
    }
})

app.listen(3000, () => console.log("hello"))

//ISSUE, not specifing in header the attribute



// const ledgerData = require("ledger-Data.json");

//fetch() -> requires http URL to work


// const PORT = process.env.PORT || 5000;
// const REDIS_PORT = process.env.PORT || 6379;

// const client = redis.createClient(REDIS_PORT);




// import Helper from '/src/helper.js';

// export {
//     Helper,
// }
//best way of indexing multiple javascript files to html



// var request = new XMLHttpRequest()

// request.open('GET', 'https://api.spacexdata.com/v3/cores', true)

// request.onload = function (){
//     var data = JSON.parse(this.response)

//     if (request.status >= 200 && request.status < 400){
//         data.forEach(movie => {
//             console.log(movie.title)
//         })
//     } else {
//         console.log('error')
//     }
// }

// request.send()

