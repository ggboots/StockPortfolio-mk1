//Work out total Holdings, Total change
// require('dotenv').config();

// const api_key = process.env.API_KEYS;

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    setTimeout(function(){
        document.body.removeChild(loader);
    }),4000;
    
    // loader.addEventListener("transitionend", () => {
    //   document.body.removeChild(loader);
    // });
  })
  