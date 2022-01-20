let arrow = document.getElementById("arrow");
let arrowSwitch = true;

arrow.addEventListener("click", function(){
    if (arrowSwitch == true){
        window.scrollBy(0,870);
        arrowSwitch = false;
    } else if (arrowSwitch == false){
        window.scrollBy(0,-870);
        arrowSwitch = true;
    }
});