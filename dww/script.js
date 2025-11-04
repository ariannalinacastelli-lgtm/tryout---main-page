// we want to wait for the page to load before executing the script
document.addEventListener("DOMContentLoaded", function(){

//create our own adafruitIO object


const IO = new AdafruitIO("arianna2345", "secret");

//CODE TO RUN WHEN THE HTML PAGE IS LOADed



// DONT KNOW

// DONE I need to make this for tmeperature, humidity, wind -> i think if possible
// i need to create if statements for the reccomandation part, 
// i need the random thing as well as for the precipitations and perceived temperature


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


    setInterval(function(){
  

    let newWind = Math.floor(Math.random()*60);
        
       console.log(newWind);

           IO.sendData("wind", newWind, function(response) {
        console.log("Sent to Adafruit:", response);

        IO.getData("wind", function(data) {
            console.log(data.feed, data.json [0].value);
            
            const wind = document.getElementById("wind")
         
            wind.innerHTML = data.json [0].value;
           
              
        }); 

    });

}, 2000); 


 

});





//if(humidity<50)









 
      
