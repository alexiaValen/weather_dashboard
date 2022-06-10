//grab el from html
var button = document.querySelector('#button');
var cityInput = document.querySelector('#city');
var cityName = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


//event listeners


// var APIKEY = '8f0c4fc71c0950fe0f4f93290b22f52b';
// var city = document.getElementById('');

//api call: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//q: The query parameter, where we'll add the city variable.
//appid: The application id or key, where we'll add the API key variable.
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// fetch(queryURL)






button.addEventListener('click', function(){
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&appid=20022cfdec5bc1506a5bf68f83c5e058";

     fetch(queryURL)
     .then(response => response.json())
     .then(data => {
         var nameValue = data['name'];
         var tempValue = data['main']['temp'];
         var descValue = data['weather'][0]['description'];


         //display results
         cityName.innerHTML = nameValue;
         temp.innerHTML = tempValue;
         desc.innerHTML = descValue;
     })
     //.catch will alert when undefined
     .catch(err => alert('Wrong City Name!'))
 })