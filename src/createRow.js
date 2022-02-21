// using ledgerData.js
//using highOrder from helper.js

// keep count of line added for ID attribute
let ledgerRowsAdded = 0; 
let stockRowsAdded = 0;

//timeout for awaiting callback
const myAwait = setTimeout(await,100);
            
function await(){
    let elementValue = 0;
    let numberOfLedgerRows = ledgerCollection.length;
    let numberOfStockList = 3;
                
    function createStockRow(){
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
                stockElement.setAttribute("id", "tickerSymbol"+[stockRowsAdded]);
                stockElement.setAttribute("class", "stockElement");
                break;
            case 1:
                stockElement.setAttribute("id", "stockName"+[stockRowsAdded]);
                switch(elementValue){
                    case 0:
                        stockElement.innerHTML = "Apple Inc";
                        elementValue++;
                        break;
                    case 1:
                        stockElement.innerHTML = "Tesla Inc";
                        elementValue++;
                        break;
                    case 2:
                        stockElement.innerHTML = "Crypto.com";
                        elementValue++;
                }
                stockElement.setAttribute("class", "stockElement");
                break;
            case 2:
                stockElement.setAttribute("id", "holding"+[stockRowsAdded]);
                stockElement.setAttribute("class", "stockElement");

                break;
            case 3:
                stockElement.setAttribute("id", "stockUnits"+[stockRowsAdded]);
                stockElement.setAttribute("class", "stockElement");

                break;
            case 4:
                stockElement.setAttribute("id", "currentPrice"+[stockRowsAdded]);
                stockElement.setAttribute("class", "stockElement");
                break;
            case 5:
                stockElement.setAttribute("id", "changeDollar"+[stockRowsAdded]);
                if (elementValue == 5){
                    stockElement.innerHTML = "unavailable";
                }
                stockElement.setAttribute("class", "stockElement");
                break;
            case 6: 
                stockElement.setAttribute("id", "changePercentage"+[stockRowsAdded]);
                if (elementValue == 6){
                    stockElement.innerHTML = "Unavailable";
                }
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
    stockRowsAdded++;
    stockContainer.append(stockRow);
}

function createLedgerRow(){
    let ledgerContainer = document.getElementById("ledger-container");
    ledgerRow = document.createElement("div");
    ledgerRow.setAttribute("id","ledger-row");
    ledgerRow.setAttribute("class", "ledger-row")
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
            ledgerRow.append(ledgerElement);
            
        }
    ledgerRowsAdded++;
    ledgerContainer.append(ledgerRow);
}

while (numberOfLedgerRows !=0){
    createLedgerRow();
    numberOfLedgerRows--;
}

createLedgerRow(); //footer row to assist scroll UI
        
while (numberOfStockList !=0){
    createStockRow();
    numberOfStockList--;
}



    function appendData(){
            if (HighOrder == "false"){
                ledgerCollection.sort(GetSortOrderLowest("price"));
            } else if (HighOrder == "true"){
                ledgerCollection.sort(GetSortOrderHighest("price"));
            }
            populateData(ledgerCollection);


            //compare function
            function GetSortOrderLowest(prop){
                return function(a,b){
                    if(a[prop] > b[prop]){
                        return 1;
                    } else if (a[prop] < b[prop]){
                        return -1;
                    }
                    return 0;
                }
            }
            function GetSortOrderHighest(prop){
                return function(a,b){
                    if(a[prop] < b[prop]){
                        return 1;
                    } else if (a[prop] > b[prop]){
                        return -1;
                    }
                    return 0;
                }
            }


            function populateData(json){
                for(i=0;i<ledgerCollection.length;i++){
                    document.getElementById("date"+[i]).innerText = json[i].date;
                    document.getElementById("stock"+[i]).innerText = json[i].stock;
                    document.getElementById("transaction"+[i]).innerText = json[i].transaction;
                    document.getElementById("units"+[i]).innerText = json[i].units;
                    document.getElementById("price"+[i]).innerText = json[i].price;
                    document.getElementById("currency"+[i]).innerText = json[i].currency;
                    document.getElementById("transactionAmount"+[i]).innerText = '$'+json[i].transactionAmount;
                }
            }
        }

        appendData();

        
    }

