var requestURL = "http://api.openweathermap.org/data/2.5/weather?APPID=8cc2bc5b692b912633c29866f21e24d9";
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
// fetch api and what to do with retrieved info
//const car = {type:"Fiat", model:"500", color:"white"};
var weatherData = {temp:"90", wind:"something", humidity:"20", uvIndex:"12"} ;
function getAPICity(cityName){
  return fetch(requestURL+"&q="+cityName)
    .then((response) => response.json())
    .then((data) => console.log(data));
  // .then(){
  //   console.log("we got it bois");
  // }
}
function renderWeatherData(cityName){
  var cityWeatherData = getAPICity(cityName);
  weatherData = cityWeatherData;

}



// use api to set textcontent on required feilds
