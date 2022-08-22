var requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=47abe5a03023354eae000f4a15ebd2e0";
var todayWind = document.getElementById("todayWind");
var todayUV = document.getElementById("todayUV");
var todayHum = document.getElementById("todayHum");
var todayTemp = document.getElementById("todayTemp");
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var currentTemp = "";
var currentHum = "";
var currentWind ="";
var currentUV= "";
var atlantaURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=84.3880&exclude={part}&appid={API key}";
var washingtonURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9072&lon=77.0369&exclude={part}&appid={API key}";
var portlandURL


// fetch api and what to do with retrieved info
function getAPI(){
  fetch(requestUrl)
  .then()
}

// use api to set textcontent on required feilds
