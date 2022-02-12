let priceArrow = document.getElementById("priceArrow");
let dateArrow = document.getElementById("dateArrow");
let arrowSwitch = true;
let HighOrder = this.sessionStorage.getItem('arrowStatus');
// JSON.parse(HighOrder.toLowerCase());

// if (HighOrder == null){
//     sessionStorage.setItem('arrowStatus',true);
//     window.location.reload();
//     console.log("no val");
// } 

//setItem into sessionStorage

const pageAccessedByReload = (
    (window.PerformanceNavigationTiming && window.PerformanceNavigationTiming.type === 1) ||
    window.performance
    .getEntriesByType('navigation')
    .map((nav) => nav.type)
    .includes('reload')
);
    
if (HighOrder == null){
    sessionStorage.setItem('arrowStatus',false);
    window.location.reload();
} 

if(pageAccessedByReload === true){
    arrowSwitch = true;
    window.scrollBy(0,-900);
    console.log("here");
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


// priceArrow.addEventListener('click', function(){
//     if(HighOrder == true){
//         HighOrder = false;
//     }else if(HighOrder == false){
//         HighOrder = true;
//     }
//     console.log(HighOrder);
// });



priceArrow.addEventListener('click', function(){
    if (HighOrder == null){
        sessionStorage.setItem('arrowStatus',true);
        window.location.reload();
        console.log("no val");
    } 
    if(HighOrder == "true"){
        // HighOrder = false;
        sessionStorage.removeItem('arrowStatus');
        sessionStorage.setItem('arrowStatus',false);
        window.location.reload();``
        // console.log(sessionStorage)
    }else if(HighOrder == "false"){
        // HighOrder = true;
        sessionStorage.removeItem('arrowStatus')
        sessionStorage.setItem('arrowStatus',true)
        window.location.reload();
        // console.log(sessionStorage)
    } 
    // else if(HighOrder == false){
    //     HighOrder = true;
    //     sessionStorage.removeItem('arrowStatus')
    //     sessionStorage.setItem('arrowStatus','true')
    //     console.log(storage)
    // }

});