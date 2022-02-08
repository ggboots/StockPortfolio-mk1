//Work out total Holdings, Total change
// Using chart.js


const symbols = [];
let APPLtotal = 0;
let TSLAtotal = 0;

async function makeChart(){
    await getData();

    console.log(symbols)
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
        symbols.push(data[2].stock)
        for (i=0; i<data.length; i++){
            let carryForward = parseInt(data[i].transactionAmount);
            APPLtotal = APPLtotal + carryForward;
        }
    })
    .catch(err => {
        console.log('error - APPL');
    })

    await fetch('./data/TSLA-ledger-data.json')
    .then(res => {
        return res.json();
    })
    .then(data => {
        symbols.push(data[1].stock)
        for (i=0; i<data.length; i++){
            let carryForward = parseInt(data[i].transactionAmount);
            TSLAtotal = TSLAtotal + carryForward;
        }
    })
    .catch(err => {
        console.log('error - TSLA')
    })
}

makeChart();




// const ctx = document.getElementById('chart');
// const symbols = [];

// const config = {
//     type: 'doughnut',
//     data: {
//         labels:[],
//         datasets:[{
//            label: 'Portfolio',
//            backgroundColor: [],
//            data: [] 
//         }]
//     },
//     options:{}
// }

// const myChart = new Chart(
//     document.getElementById('chart'),
//     config
// )

// function addSymbol(symbol, shares){
//     fetch("/price?symbol="+symbol)
//     .then(response => response.json())
//     .then(data => {
//         const symbolData = {...data,shares};
//         symbols.push(symbolData);
//         addDataToChart(symbolData);
//     })
// }

// function addDataToChart(symbol){
//     myChart.data.label.push(symbol.symbol);
//     myChart.update();
// }

