let arrow = document.getElementById("arrow");
let arrowSwitch = true;

// Copied from Stackoverflow
// Learn PerformanceNavigationTiming
//.map, .includes, /getEntriesByType
const pageAccessedByReload = (
    (window.PerformanceNavigationTiming && window.PerformanceNavigationTiming.type === 1) ||
      window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
  );
if(pageAccessedByReload === true){
    arrowSwitch = true;
    window.scrollBy(0,-870);
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