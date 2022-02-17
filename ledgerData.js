//Script to be ran first, loads json into array objects

const APPLjson = "./data/APPL-ledger-data.json";
const TSLAjson = "./data/TSLA-ledger-data.json";
const TSLA0json = "./data/TSLA-0-ledger-data.json";
const CROjson = "./data/CRO-ledger-data.json";
const ledgerCollection = [];


function APPLCollection(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', APPLjson);
    xhr.onload = ()=> {
        var request = xhr.responseText;
        dataLength(JSON.parse(request));
    }
    function dataLength(json){
        numberOfLedgerRows = json.length;
        let APPLCollection = [...json];
        ledgerCollection.push(...APPLCollection);
    }
    xhr.send();
}

function TSLACollection(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', TSLAjson);
    xhr.onload = ()=> {
        var request = xhr.responseText;
        dataLength(JSON.parse(request));
    }
    function dataLength(json){
        numberOfLedgerRows = json.length;
        let TSLACollection = [...json];
        ledgerCollection.push(...TSLACollection);
    }
    xhr.send();
}

function TSLA0Collection(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', TSLA0json);
    xhr.onload = ()=> {
        var request = xhr.responseText;
        dataLength(JSON.parse(request));
    }
    function dataLength(json){
        numberOfLedgerRows = json.length;
        let TSLACollection = [...json];
        ledgerCollection.push(...TSLACollection);
    }
    xhr.send();
}

function CROCollection(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', CROjson);
    xhr.onload = ()=> {
        var request = xhr.responseText;
        dataLength(JSON.parse(request));
    }
    function dataLength(json){
        numberOfLedgerRows = json.length;
        let CROCollection = [...json];
        ledgerCollection.push(...CROCollection);
    }
    xhr.send();
}

APPLCollection();
TSLA0Collection();
TSLACollection();
CROCollection();
