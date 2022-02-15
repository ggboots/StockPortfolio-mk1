let priceArrow = document.getElementById("priceArrow");
let dateArrow = document.getElementById("dateArrow");
let transactionAmountArrow = document.getElementById("transactionAmountArrow");
let arrowSwitch = true;
let HighOrder = this.sessionStorage.getItem('arrowStatus');
let dateOrder = this.sessionStorage.getItem('dateStatus');
let transactionAmountOrder = this.sessionStorage.getItem('transactionAmountStatus');

const pageAccessedByReload = (
    (window.PerformanceNavigationTiming && window.PerformanceNavigationTiming.type === 1) ||
    window.performance
    .getEntriesByType('navigation')
    .map((nav) => nav.type)
    .includes('reload')
);
    
if (HighOrder == null && dateOrder == null){
    sessionStorage.setItem('arrowStatus',false);
    // sessionStorage.setItem('dateStatus',false);
    // sessionStorage.setItem('transactionAmountStatus',false);
    window.location.reload();
} 

if(pageAccessedByReload === true){
    arrowSwitch = true;
    window.scrollBy(0,-900);
}


arrow.addEventListener("click", function(){
    if (arrowSwitch == true){
        window.scrollBy(0,870);
        arrowSwitch = false;
    } else if (arrowSwitch == false){
        window.scrollBy(0,-870);
        arrowSwitch = true;
    }
});



priceArrow.addEventListener('click', function(){
    if(HighOrder == "true"){
        sessionStorage.removeItem('arrowStatus');
        sessionStorage.setItem('arrowStatus',false);
        window.location.reload();
    }else if(HighOrder == "false"){
        sessionStorage.removeItem('arrowStatus');
        sessionStorage.setItem('arrowStatus',true);
        window.location.reload();
    } 

});

// dateArrow.addEventListener('click', function(){
//     if(dateOrder == "true"){
//         sessionStorage.removeItem('dateStatus');
//         sessionStorage.setItem('dateStatus',false);
//         window.location.reload();
//     }else if(dateOrder == "false"){
//         sessionStorage.removeItem('dateStatus');
//         sessionStorage.setItem('dateStatus',true);
//         window.location.reload();
//     } 

// });

// transactionAmountArrow.addEventListener('click', function(){
//     if(transactionAmountOrder == "true"){
//         sessionStorage.removeItem('transactionAmountStatus');
//         sessionStorage.setItem('transactionAmountStatus',false);
//         window.location.reload();
//     }else if(transactionAmountOrder == "false"){
//         sessionStorage.removeItem('transactionAmountStatus');
//         sessionStorage.setItem('transactionAmountStatus',true);
//         window.location.reload();
//     } 

// });


//When clicking on a drop down menu, set rest to null