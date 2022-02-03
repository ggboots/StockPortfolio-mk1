const fs = require('fs')

let ledgerData = fs.readFileSync('./APPL-ledger-data.json')
let ledger = JSON.parse(ledgerData);

arraySwitch = 0;

for (i=0; i<ledger.length; i++){

    let ledgerDate = ledger[arraySwitch].date;
    let ledgerStock = ledger[arraySwitch].stock;
    let ledgerTransaction = ledger[arraySwitch].transaction;
    let ledgerUnits = ledger[arraySwitch].units;
    let ledgerPrice = ledger[arraySwitch].price;
    let ledgerCurrency= ledger[arraySwitch].currency;
    let ledgerTransactionAmount = ledger[arraySwitch].transactionAmount;

    arraySwitch++;
    console.log(ledgerDate, ledgerStock, ledgerTransaction, ledgerUnits, ledgerPrice, ledgerCurrency, ledgerTransactionAmount);

    let appendDate = document.getElementById("date");
    appendDate.innerHTML = ledgerDate;


}

