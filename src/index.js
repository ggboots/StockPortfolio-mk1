// import Helper from '/src/helper.js';

// export {
//     Helper,
// }
//best way of indexing multiple javascript files to html

let elementValue = 0;

let stockContainer = document.getElementById("stock-container");
stockRow = document.createElement("div");
stockRow.setAttribute("id","stock-row");
stockRow.setAttribute("class", "stock-row")
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
            stockElement.setAttribute("class", "stockElement");

            break;
        case 5:
            stockElement.setAttribute("id", "changeDollar");
            if (elementValue == 5){
                stockElement.innerHTML = "TSLA";
            }
            stockElement.setAttribute("class", "stockElement");

            break;
        case 6: 
            stockElement.setAttribute("id", "changePercentage");
            if (elementValue == 6){
                stockElement.innerHTML = "TSLA";
            }
            stockElement.setAttribute("class", "stockElement");


    }
    stockRow.append(stockElement);
}
stockContainer.append(stockRow);
