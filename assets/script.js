var requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
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
var

// fetch api and what to do with retrieved info
function getAPI(){
  fetch(requestUrl)
  .then()
}

// use api to set textcontent on required feilds
