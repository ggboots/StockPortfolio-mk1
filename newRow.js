let numberOfLedgerRows;
let numberOfStockList = 3;

// look to do timeout to find out
let ledgerRowsAdded = 0; // keep count of line added for ID attribute

const APPLjson = "./data/APPL-ledger-data.json";
const TSLAjson = "./data/TSLA-ledger-data.json";

function holdtheProgram(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', APPLjson);
    xhr.onload = ()=> {
        var changeThis = xhr.responseText;
        var timeToUse = JSON.parse(changeThis);
        dataLength(timeToUse);
    }
    xhr.send();

    function dataLength(json){
        let value = json.length;
        numberOfLedgerRows = value;
    }
}

//rename
holdtheProgram();

//timeout for awaiting callback
const myAwait = setTimeout(await,1000);

function await(){

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
    loadData();

    for (i=0; i < 7;i++){
        ledgerElement = document.createElement("div");

        switch(i){
            case 0:
                ledgerElement.setAttribute("id", "date"+[ledgerRowsAdded]);
                ledgerElement.setAttribute("class", "ledgerElement");
                break;
            case 1:
                ledgerElement.setAttribute("id", "stock"+[ledgerRowsAdded]);
                ledgerElement.setAttribute("class", "ledgerElement");
                break;
            case 2:
                ledgerElement.setAttribute("id", "transaction"+[ledgerRowsAdded]);
                ledgerElement.setAttribute("class", "ledgerElement");
                break;
            case 3:
                ledgerElement.setAttribute("id", "units"+[ledgerRowsAdded]);
                ledgerElement.setAttribute("class", "ledgerElement");
                break;
            case 4:
                ledgerElement.setAttribute("id", "price"+[ledgerRowsAdded]);
                ledgerElement.setAttribute("class", "ledgerElement");
                break;
            case 5:
                ledgerElement.setAttribute("id", "currency"+[ledgerRowsAdded]);
                ledgerElement.setAttribute("class", "ledgerElement");
                break;
            case 6: 
                ledgerElement.setAttribute("id", "transactionAmount"+[ledgerRowsAdded]);
                ledgerElement.setAttribute("class", "ledgerElement");
            }
            // loadData();
       
        ledgerRow.append(ledgerElement);
        
    }
    ledgerRowsAdded++;
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




     // const highestAmount = json.filter(function(json){
        //     if(json.price >= 67){
        //         return true;
        //     }
        // })

        // console.log(highestAmount)
