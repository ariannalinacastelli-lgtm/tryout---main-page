// we want to wait for the page to load before executing the script
document.addEventListener("DOMContentLoaded", function(){

//create our own adafruitIO object


const IO = new AdafruitIO("IO_USERNAME", "IO_KEY");

//CODE TO RUN WHEN THE HTML PAGE IS LOADed



// to connect the page to get data from ADa fruit IO


    /* */
    const delayBetweenRequest = 5000;

    // setInterval( callback(), delayBetweenCallbacks);    
    // doc: https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
    // 🧠 → setInterval mimic a loop functionality
    setInterval(function() {

        // we send a request to get temperature feed values
        IO.getData("temperature", function(data) {
            // debug data we get from feed
            console.log( `🚚 - Here is your data from ${data.feed}! Latest value is: ${data.json[0].value}`);
            console.log(data.json);
            
const temperature = document.getElementById("temperature");
 temperature.innerHTML = data.json[0].value;

   IO.getData("humidity", function(data) {
            // debug data we get from feed
            console.log( `🚚 - Here is your data from ${data.feed}! Latest value is: ${data.json[0].value}`);
            console.log(data.json);
            
    const humidity = document.getElementById("humidity");
 humidity.innerHTML = data.json[0].value;

        }); // end of getData() callback
    }); // end of getData() callback
       
    }, delayBetweenRequest); // end of setInterval callback 


    // randomization formulas for indicators that cannot be predicted through the IOT device

    setInterval(function(){
  

        let newWind = Math.floor(Math.random()*60);
        console.log(newWind);

            
        const wind = document.getElementById("wind")
    
        wind.innerHTML = newWind;

    }, 10000); 

 setInterval(function(){
  

        let newProbability = Math.floor(Math.random()*100);
        console.log(newProbability);

            
        const Precs = document.getElementById("Precs")
    
        Precs.innerHTML = newProbability;

    }, 10000); 

  setInterval(function(){
  

        let newFeels = Math.floor(Math.random()*30);
        console.log(newFeels);

            
        const feels = document.getElementById("feels")
    
        feels.innerHTML = newFeels;

    }, 10000); 

});













 
      
