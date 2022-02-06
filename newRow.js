let numberOfLedgerRows;
let numberOfStockList = 3;
// look to do timeout to find out

let linesAdded = 0; // keep count of line added for ID attribute
const APPLjson = "./APPL-ledger-data.json";
const TSLAjson = "./TSLA-ledger-data.json";

let whatIsThisValue;

function holdtheProgram(){

    const xhr = new XMLHttpRequest();

    xhr.open('get', "./APPL-ledger-data.json");
    xhr.onload = ()=> {
        var changeThis = xhr.responseText;
        var timeToUse = JSON.parse(changeThis);
        useThisData(timeToUse);

    }
    xhr.send();

}

function useThisData(json){
    let value = json.length;
    numberOfLedgerRows = value;
}
// look to use await to get numberOfledgerRows, before running rest of code
holdtheProgram();

function callMe(){
    console.log(numberOfLedgerRows);
}   

//Jquery example
// $.getJSON(APPLjson, function(data){
//     var stock = JSON.stringify(data)
//     var stockParse = JSON.parse(stock)
//     // Access array first, then access objects
//     console.log(stockParse)
//     console.log(stockParse.length)
//     console.log(stockParse[0].date)
// })

//fetch option
// fetch(APPLjson)
// .then (response => response.json())
// .then(data => console.log(data));

//Promises
// can be in 3 states, pending, resolve (does its job) or rejected (so error)
//const promise = new promise((resolve, reject) =>
//

function awaitThis(){

    console.log(numberOfLedgerRows);
function createStockRow(){
    let elementValue = 0;
    let stockContainer = document.getElementById("stock-container");
    stockRow = document.createElement("div");
    stockRow.setAttribute("id","stock-row");
    stockRow.setAttribute("class", "stock-row")

    stockChangeHeader = document.createElement("div");
    stockChangeHeader.setAttribute("class", "stock-row-change");
    stockChangeSpacing = document.createElement("div");
    stockChangeSpacing.setAttribute("class", "stock-row-change-options");

    for (i=0; i < 7;i++){
        stockElement = document.createElement("div");
        switch(i){
            case 0:
                stockElement.setAttribute("id", "tickerSymbol");
                if (elementValue == 0){
                    stockElement.innerHTML = "TSLA";
                };
                elementValue++;
                stockElement.setAttribute("class", "stockElement");

                break;
            case 1:
                stockElement.setAttribute("id", "stockName");
                if (elementValue == 1){
                    stockElement.innerHTML = "TSLA";
                }
                elementValue++;
                stockElement.setAttribute("class", "stockElement");
                break;
            case 2:
                stockElement.setAttribute("id", "holding");
                if (elementValue == 2){
                    stockElement.innerHTML = "TSLA";
                }
                elementValue++;
                stockElement.setAttribute("class", "stockElement");

                break;
            case 3:
                stockElement.setAttribute("id", "units");
                if (elementValue == 3){
                    stockElement.innerHTML = "TSLA";
                };
                elementValue++;
                stockElement.setAttribute("class", "stockElement");

                break;
            case 4:
                stockElement.setAttribute("id", "currentPrice");
                if (elementValue == 4){
                    stockElement.innerHTML = "TSLA";
                }
                elementValue++;
                stockElement.setAttribute("class", "stockElement");

                break;
            case 5:
                stockElement.setAttribute("id", "changeDollar");
                if (elementValue == 5){
                    stockElement.innerHTML = "TSLA";
                }
                elementValue++;
                stockElement.setAttribute("class", "stockElement");

                break;
            case 6: 
                stockElement.setAttribute("id", "changePercentage");
                if (elementValue == 6){
                    stockElement.innerHTML = "TSLA";
                }
                elementValue++;
                stockElement.setAttribute("class", "stockElement");


        }
        if (elementValue == 6){
            stockChangeSpacing.append(stockElement);
        } else if (elementValue == 7) {
            stockChangeSpacing.append(stockElement);
            stockChangeHeader.append(stockChangeSpacing);
            stockRow.append(stockChangeHeader);

        } else {
            stockRow.append(stockElement);
        }
    }
    stockContainer.append(stockRow);
}

function createLedgerRow(){
    let ledgerContainer = document.getElementById("ledger-container");
    ledgerRow = document.createElement("div");
    ledgerRow.setAttribute("id","ledger-row");
    ledgerRow.setAttribute("class", "ledger-row")


        // const xhr = new XMLHttpRequest();
        // xhr.onload = function(){
        //     var changeThis = xhr.responseText;
        //     var timeToUse = JSON.parse(changeThis);
        //     console.log(timeToUse[0].date);
        // }
        
        // xhr.open('get', APPLjson);
        // xhr.send();
    
        let elementValue = 0;

    for (i=0; i < 7;i++){
        ledgerElement = document.createElement("div");

        switch(elementValue){
            case 0:
                ledgerElement.setAttribute("id", "date"+[linesAdded]);
                if (elementValue == 0){
                    // ledgerElement.innerHTML = date;
                };
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");

                break;
            case 1:
                ledgerElement.setAttribute("id", "stock"+[linesAdded]);
                if (elementValue == 1){

                }
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");
                break;
            case 2:
                ledgerElement.setAttribute("id", "transaction"+[linesAdded]);
                if (elementValue == 2){
                    // ledgerElement.innerHTML = "Transaction";
                }
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");

                break;
            case 3:
                ledgerElement.setAttribute("id", "units"+[linesAdded]);
                if (elementValue == 3){
                    // ledgerElement.innerHTML = "units";
                };
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");

                break;
            case 4:
                ledgerElement.setAttribute("id", "price"+[linesAdded]);
                if (elementValue == 4){
                    // ledgerElement.innerHTML = "price";
                }
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");

                break;
            case 5:
                ledgerElement.setAttribute("id", "currency"+[linesAdded]);
                if (elementValue == 5){
                    // ledgerElement.innerHTML = "currency";
                }
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");

                break;
            case 6: 
                ledgerElement.setAttribute("id", "transactionAmount"+[linesAdded]);
                if (elementValue == 6){
                    // ledgerElement.innerHTML = "transactionAmount";
                }
                
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");
                
            }
            loadData();
       
        ledgerRow.append(ledgerElement);
        
    }
    linesAdded++;
    ledgerContainer.append(ledgerRow);

    function loadData() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', APPLjson);
        xhr.onload = ()=> {
            try {
            var changeThis = xhr.responseText;
            var data = JSON.parse(changeThis);
            populateData(data);
            } catch(e){
                console.warn("why is it undefined");
            }
        }

        xhr.send();

    }   

    function populateData(json){
        for(i=0;i<json.length;i++){
            document.getElementById("date"+[i]).innerHTML = json[i].date;
            document.getElementById("stock"+[i]).innerHTML = json[i].stock;
            document.getElementById("transaction"+[i]).innerHTML = json[i].transaction;
            document.getElementById("units"+[i]).innerHTML = json[i].units;
            document.getElementById("price"+[i]).innerHTML = json[i].price;
            document.getElementById("currency"+[i]).innerHTML = json[i].currency;
            document.getElementById("transactionAmount"+[i]).innerHTML = json[i].transactionAmount;
        }
    }

}

        while (numberOfLedgerRows !=0){
            createLedgerRow();
            numberOfLedgerRows--;
        }
        
        while (numberOfStockList !=0){
            createStockRow();
            numberOfStockList--;
        }

    }



// while (numberOfLedgerRows !=0){
//     createLedgerRow();
//     numberOfLedgerRows--;
// }

// while (numberOfStockList !=0){
//     createStockRow();
//     numberOfStockList--;
// }


// document.addEventListener("DOMContentLoaded", function(){
//     loadData();
// });

// function loadData() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('get', APPLjson);
//     xhr.onload = ()=> {
//         try {
//         var changeThis = xhr.responseText;
//         var timeToUse = JSON.parse(changeThis);
//         populateData(timeToUse);
//         } catch(e){
//             console.warn("not avaiable");
//         }
//     }

//     xhr.send();

// }   

// function populateData(json){
//     for(i=0;i<7;i++){
//         document.getElementById("date"+[i]).innerHTML = json[i].date;
//         document.getElementById("stock"+[i]).innerHTML = json[i].stock;
//         document.getElementById("transaction"+[i]).innerHTML = json[i].transaction;
//         document.getElementById("units"+[i]).innerHTML = json[i].units;
//         document.getElementById("price"+[i]).innerHTML = json[i].price;
//         document.getElementById("currency"+[i]).innerHTML = json[i].currency;
//         document.getElementById("transactionAmount"+[i]).innerHTML = json[i].transactionAmount;
//     }
// }

// document.addEventListener("DOMContentLoaded", function(){
//     loadData();
// });
