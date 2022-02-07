// Using chart.js

const ctx = document.getElementById('chart');
const symbols = [];

const config = {
    type: 'doughnut',
    data: {
        labels:[],
        datasets:[{
           label: 'Portfolio',
           backgroundColor: [],
           data: [] 
        }]
    },
    options:{}
}

const myChart = new Chart(
    document.getElementById('chart'),
    config
)

function addSymbol(symbol, shares){
    fetch("/price?symbol="+symbol)
    .then(response => response.json())
    .then(data => {
        const symbolData = {...data,shares};
        symbols.push(symbolData);
        addDataToChart(symbolData);
    })
}

function addDataToChart(symbol){
    myChart.data.label.push(symbol.symbol);
    myChart.update();
}

