//----------------LIBRARIES----------------

// DHT11 sensor Library

// Find out more here : https://github.com/adafruit/DHT-sensor-library
  #include "config.h"

  #include <DHT.h>

  #include <DHT_U.h>


  #define DHTPIN 21 // Define pin used


  #define DHTTYPE DHT11



  DHT dht(DHTPIN, DHTTYPE);

  AdafruitIO_Feed *temperature = io.feed("temperature");
  AdafruitIO_Feed *humidity = io.feed("humidity");

void setup() {


  Serial.begin(115200);
  dht.begin();

  while(! Serial);

  Serial.print("Connecting to Adafruit IO");

  // connect to io.adafruit.com
  io.connect();

  // wait for a connection
  while(io.status() < AIO_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  // we are connected
  Serial.println();
  Serial.println(io.statusText());

}



void loop() {

  io.run();


  int temperatureValue = dht.readTemperature();

  int humiditySensor = dht.readHumidity();


  Serial.print("temperature is ");
  Serial.println(temperatureValue);
  temperature->save(temperatureValue);


  Serial.print("humidity is "); 
  Serial.println(humiditySensor);
  humidity->save(humiditySensor);
  // increment the count by 1


  delay(7000);

  }
