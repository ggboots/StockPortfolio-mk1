// const {ledger} = require('../ledger-Data.json')
// console.log(ledger);
let numberOfLedgerRows = 10;
let numberOfStockList = 3;


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
    let elementValue = 0;
    let ledgerContainer = document.getElementById("ledger-container");
    ledgerRow = document.createElement("div");
    ledgerRow.setAttribute("id","ledger-row");
    ledgerRow.setAttribute("class", "ledger-row")

    for (i=0; i < 7;i++){
        ledgerElement = document.createElement("div");
        switch(i){
            case 0:
                ledgerElement.setAttribute("id", "date");
                if (elementValue == 0){
                    ledgerElement.innerHTML = "-";
                };
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");

                break;
            case 1:
                ledgerElement.setAttribute("id", "stock");
                if (elementValue == 1){
                    ledgerElement.innerHTML = "Stock";
                }
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");
                break;
            case 2:
                ledgerElement.setAttribute("id", "transaction");
                if (elementValue == 2){
                    ledgerElement.innerHTML = "Transaction";
                }
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");

                break;
            case 3:
                ledgerElement.setAttribute("id", "units");
                if (elementValue == 3){
                    ledgerElement.innerHTML = "units";
                };
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");

                break;
            case 4:
                ledgerElement.setAttribute("id", "price");
                if (elementValue == 4){
                    ledgerElement.innerHTML = "price";
                }
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");

                break;
            case 5:
                ledgerElement.setAttribute("id", "currency");
                if (elementValue == 5){
                    ledgerElement.innerHTML = "currency";
                }
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");

                break;
            case 6: 
                ledgerElement.setAttribute("id", "transactionAmount");
                if (elementValue == 6){
                    ledgerElement.innerHTML = "transactionAmount";
                }
                elementValue++;
                ledgerElement.setAttribute("class", "ledgerElement");


        }
        ledgerRow.append(ledgerElement);
        
    }
    ledgerContainer.append(ledgerRow);
}

while (numberOfLedgerRows !=0){
    createLedgerRow();
    numberOfLedgerRows--;
}

while (numberOfStockList !=0){
    createStockRow();
    numberOfStockList--;
}