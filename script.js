// we want to wait for the page to load before executing the script
document.addEventListener("DOMContentLoaded", function(){

//create our own adafruitIO object

const IO = new AdafruitIO("arianna2345", "aio_mJBb67cOSQraXlyp8aNEwPs8JWH9");

//CODE TO RUN WHEN THE HTML PAGE IS LOADed



// DONT KNOW

// I need to make this for tmeperature, humidity, wind -> i think if possible
// i need to create if statements for the reccomandation part, 
// as well as for the precipitations and perceived temperature


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

        // we try to put the wind value randomized
        const wind = document.getElementById("wind");
 
       
    }, delayBetweenRequest); // end of setInterval callback 


    /*setInterval function(){
  

    let currentWind = Math.floor(Math.random()*20);
        
       console.log(currentWind);

        IO.getData("wind", function(data) {
        console.log(data.feed, data.json [0].value);
        
        //we create a link to the span
        const wind = document.getElementById("wind")
        wind.innerHTML = data.json [0].value;
        });
*/
        });





//if(humidity<50)









 
      
