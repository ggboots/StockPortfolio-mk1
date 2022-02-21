// require('dotenv').config();

// 8 API calls per minute
const twelveDataBaseUrl = `https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,IXIC&interval=1min&apikey=demo`

// const AAPLBaseUrl = `https://api.twelvedata.com/time_series?symbol=AAPL,USD/EUR,IXIC&interval=1min&apikey=${api_key}`
// const TSLABaseUrl = `https://api.twelvedata.com/time_series?symbol=TSLA,USD/EUR,IXIC&interval=1min&apikey=${api_key}`
// const CROBaseUrl = `https://api.twelvedata.com/time_series?symbol=CRO,USD/EUR,IXIC&interval=1min&apikey=${api_key}`
// function which takes parameter, only runs one block of code instead of repeating

const AAPLLedgerData = './data/APPL-ledger-data.json';
const TSLALedgerData = './data/TSLA-ledger-data.json';
const TSLA0LedgerData = './data/TSLA-0-ledger-data.json';
const CROLedgerData = './data/CRO-ledger-data.json';


fetch(twelveDataBaseUrl)
.then(response => response.json())
.then(data => {
    async function waitingAPPLrow(){
        const tickerSymbol = document.getElementById('tickerSymbol0');
        let holding = document.getElementById('holding0');
        let stockUnits = document.getElementById('stockUnits0');
        const currentPrice = document.getElementById('currentPrice0');    
        tickerSymbol.innerText = data.AAPL.meta.symbol;
        currentPrice.innerText = data.AAPL.values[0].close;
        let currentPriceHolding = data.AAPL.values[0].close;
        let AAPLtotal = 0;


        async function loadDataAPPL() {
            const xhr = new XMLHttpRequest();
            xhr.open('get', AAPLLedgerData);
            xhr.onload = ()=> {
                try {
                var respsonseText = xhr.responseText;
                var data = JSON.parse(respsonseText);
                populateData(data);
                } catch(e){
                    console.warn("why is it undefined");
                }
            }
            xhr.send();
        }   
        function populateData(json){
            for(i=0;i<json.length;i++){
                let holdingCatch = parseInt(json[i].units);
                AAPLtotal = AAPLtotal + holdingCatch;
            }
            stockUnits.innerText = AAPLtotal;
            let TwoDecimal = AAPLtotal * currentPriceHolding;
            holding.innerText = '$'+TwoDecimal.toFixed(2);
        }

        await loadDataAPPL();

    
    }
    setTimeout(waitingAPPLrow,200);
    setInterval(waitingAPPLrow,100000);

});


fetch(TSLABaseUrl)
.then(response => response.json())
.then(data => {
    async function waitingTSLArow(){
        const tickerSymbol = document.getElementById('tickerSymbol1');
        let holding = document.getElementById('holding1');
        let stockUnits = document.getElementById('stockUnits1');
        const currentPrice = document.getElementById('currentPrice1');
    
        tickerSymbol.innerText = data.TSLA.meta.symbol;
        currentPrice.innerText = data.TSLA.values[0].close;
        let currentPriceHolding = data.TSLA.values[0].close;
        let TSLAtotal = 0;


        async function loadDataTSLA() {
            const xhr = new XMLHttpRequest();
            xhr.open('get', TSLALedgerData);
            xhr.onload = ()=> {
                try {
                var respsonseText = xhr.responseText;
                var data = JSON.parse(respsonseText);
                populateData(data);
                } catch(e){
                    console.warn("why is it undefined");
                }
            }
            xhr.send();
        }   
        function populateData(json){
            for(i=0;i<json.length;i++){
                let holdingCatch = parseInt(json[i].units);
                TSLAtotal = TSLAtotal + holdingCatch;
            }
            stockUnits.innerText = TSLAtotal;
            let TwoDecimal = TSLAtotal * currentPriceHolding;
            totalHoldingIntegerValue = totalHoldingIntegerValue + TwoDecimal;
            holding.innerText = '$'+TwoDecimal.toFixed(2);
        }

        async function loadData0TSLA() {
            const xhr = new XMLHttpRequest();
            xhr.open('get', TSLA0LedgerData);
            xhr.onload = ()=> {
                try {
                var respsonseText = xhr.responseText;
                var data = JSON.parse(respsonseText);
                populateData(data);
                } catch(e){
                    console.warn("why is it undefined");
                }
            }
            xhr.send();
        }   
        function populateData(json){
            for(i=0;i<json.length;i++){
                let holdingCatch = parseInt(json[i].units);
                TSLAtotal = TSLAtotal + holdingCatch;
            }
            stockUnits.innerText = TSLAtotal;
            let TwoDecimal = TSLAtotal * currentPriceHolding;
            totalHoldingIntegerValue = totalHoldingIntegerValue + TwoDecimal;
            holding.innerText = '$'+TwoDecimal.toFixed(2);
        }

        await loadDataTSLA();
        await loadData0TSLA();
        // let totalHoldings = document.getElementById('total-holding');

    
    }
    setTimeout(waitingTSLArow, 200);
    setInterval(waitingTSLArow,100000);
});

// fetch(CROBaseUrl)
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//No valid API for CRO  
async function waitingCROrow(){
        // const tickerSymbol = document.getElementById('tickerSymbol2');
    let holding = document.getElementById('holding2');
    let stockUnits = document.getElementById('stockUnits2');
        // const currentPrice = document.getElementById('currentPrice2');
    
        // tickerSymbol.innerText = data.TSLA.meta.symbol;
        // currentPrice.innerText = data.TSLA.values[0].close;
        // let currentPriceHolding = data.TSLA.values[0].close;
        let TSLAtotal = 0;


        async function loadDataCRO() {
            const xhr = new XMLHttpRequest();
            xhr.open('get', CROLedgerData);
            xhr.onload = ()=> {
                try {
                var responseText = xhr.responseText;
                var data = JSON.parse(responseText);
                populateData(data);
                } catch(e){
                    console.warn("why is it undefined");
                }
            }
            xhr.send();
        }   
        function populateData(json){
            for(i=0;i<json.length;i++){
                let holdingCatch = parseInt(json[i].units);
                TSLAtotal = TSLAtotal + holdingCatch;
            }
            stockUnits.innerText = TSLAtotal;
            let TwoDecimal = TSLAtotal * currentPriceHolding;
            holding.innerText = '$'+TwoDecimal.toFixed(2);
        }

        await loadDataCRO();
       


    
    }
    setTimeout(waitingCROrow, 200);
    setInterval(waitingCROrow,100000);



// //code is unlinked
