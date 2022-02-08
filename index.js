//Work out total Holdings, Total change
// Using chart.js


const symbols = [];

async function makeChart(){

    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['TSLA','APPL'],
            datasets: [{
                data: [12, 19],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
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
    getData();
}

async function getData(){
    const response = await fetch('./data/APPL-ledger-data.json')
    .then(response => response.json())
    .then(data => console.log(data));

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

