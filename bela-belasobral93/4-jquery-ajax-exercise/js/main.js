/* 
    1. Sign up for openweathermap.org and generate an API key.
    2. Create a fetch request to pull current weather data for San Francisco.
       (Hint: http://api.openweathermap.org/data/2.5/weather?q=...).
    3. Log the temperature to the console. Note that the temperature will be in
       Kelvin.
    4. Incorporate the following code into your app to log a Fahrenheit value for 
       the temperature to the console (Fahrenheit temperature is stored in the 
       degFInt variable):
       const degF = (temp - 273.15) * 1.8 + 32;
       const degFInt = Math.floor(degF);
    5. Use DOM manipulation to add the returned temperature to the span element with
       the id "temp".
    6. Sign up for developer.weatherunlocked.com and obtain your application ID and 
       application key.
    7. Repeat the above steps to obtain the current temperature from this data 
       source, convert it to Fahrenheit, log it to the console, and then add it to 
       the DOM (uncomment out the 3 lines indicated in index.html for this step,
       and add your temperature value to the span element with the id "temp2").
    8. Refactor your code as necessary to separate the code for DOM manipulation
       from the code for sending an HTTP request.

    BONUS 1: Refactor your code to use jQuery (either $.ajax or $.get) instead of 
       Fetch to pull current weather data.
    BONUS 2: Implement a form that prompts users for a city and state and returns
       data for the location they specify 
       (Uncomment out the existing form code in index.html as marked).
    BONUS 3: The response data for each request includes the name of an image
       file that illustrates current weather conditions. Use the documention to
       figure out the URL for these files on the server, and then incorporate
       this image into the DOM.
 */

'use strict';




//Steps 1 - 7

// fetch(url1).then(function(response){
//   if(response.ok){
//     return response.json();
//   } else {
//     console.log('There was a problem.');
//   }

// }).then(function(data){
//   let temp = data.main.temp;
//   let degF = (temp - 273.15) * 1.8 + 32;
//   let degFInt = Math.floor(degF);
//   $('#temp').text(degFInt);
//   console.log(temp);
// });



// Steps 6 -7 
// fetch(url2).then(function(response){
//     if(response.ok){
//       return response.json();
//     } else {
//       console.log('There was a problem.');
//     }

//   }).then(function(data){
//     let temp = data.temp_f;
//     $('#temp2').text(temp);
//     console.log(data);
//   });


//Step 8 ??

//Bonus 1
// $.get(url1).done(function(data) {
//   let temp = data.main.temp;
//   let degF = (temp - 273.15) * 1.8 + 32;
//   let degFInt = Math.floor(degF);
//   $('#temp').text(degFInt);
// });

// $.get(url2).done(function(data) {
//   let tempTwo = data.temp_f;
//   $('#temp2').text(tempTwo);
//   console.log(data);
// });

//BONUS 2: 
//Implement a form that prompts users for a city and state and returns data for the location they specify 
document.querySelector("#getTemp").addEventListener('click', 
    function(){
        makeRequest(url2)
    }, false);

function makeRequest(url2){
    console.log('Making request');
    fetch(url2).then(function(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log(response.statusText);
    }
    }).then(function(data) {
        console.log(data);
        let weather = data.feelslike_f;
        console.log(weather);
        $( "#getTemp" ).after( $( "<p>" ).text("It is " + weather + " Fahrenheit") );
    });
}

