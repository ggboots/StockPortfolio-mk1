// Using chart.js
const symbols = [];
let APPLtotal = 0;
let TSLAtotal = 0;
let TSLAtotal1 = 0;

const newArray = [...ledgerCollection];


let filtered = ledgerCollection.filter(function(values){
    return ledgerCollection;
});

function test(){
    return 
}

// const test = ledgerTest.filter(function(value){
//     return value.age >= 25;
// })

// console.log(test);

async function makeChart(){
    await getData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: symbols,
            datasets: [{
                data: [APPLtotal, TSLAtotal],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(200,255,89,0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(200,255,89,1)'

                ],
            }]
        },
        options:{
            maintainAspectRatio: false,
            scale:{
                y:{
                    beginAtZero:true
                }
            }
        }
    });
}

async function getData(){
    await fetch('./data/APPL-ledger-data.json')
    .then(res => {
            return res.json();
    })
    .then(data => {
        symbols.push(data[0].stock)
        for (i=0; i<data.length; i++){
            let units = parseInt(data[i].units);
            // To find
            let price = parseInt(data[i].price);
            tradeAmount = units * price;
            APPLtotal = APPLtotal + tradeAmount;
        }
    })
    .catch(err => {
        console.log('error - APPL');
    })

    //.filter
    await fetch('./data/TSLA-ledger-data.json')
    .then(res => {
        return res.json();
    })
    .then(data => {
        symbols.push(data[1].stock)
        for (i=0; i<data.length; i++){
            let units = parseInt(data[i].units);
            // To find
            let price = parseInt(data[i].price);
            tradeAmount = units * price;
            TSLAtotal = TSLAtotal + tradeAmount;
        }
    })
    .catch(err => {
        console.log('error - TSLA')
    })

    await fetch('./data/TSLA-0-ledger-data.json')
    .then(res => {
        return res.json();
    })
    .then(data => {
        for (i=0; i<data.length; i++){
            let units = parseInt(data[i].units);
            // To find
            let price = parseInt(data[i].price);
            tradeAmount = units * price;
            TSLAtotal1 = TSLAtotal1 + tradeAmount;
            TSLAtotal = TSLAtotal + TSLAtotal1;
        }
    })
    .catch(err => {
        console.log('error - TSLA')
    })
}

makeChart();

