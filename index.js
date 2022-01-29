//json does not support comment
//package.json used to track dependencies

// allows use to load module and give access to exports
const express = require('express')
const axios = require('axios')
const redis = require('redis')
const responseTime = require('response-time')
const {promisify} = require('util')

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

