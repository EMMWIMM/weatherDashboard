var requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely&appid=47abe5a03023354eae000f4a15ebd2e0";
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
var atlantaURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.74&lon=84.38&appid=47abe5a03023354eae000f4a15ebd2e0";
var washingtonURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9072&lon=77.0369&exclude=minutely&appid=47abe5a03023354eae000f4a15ebd2e0";
var portlandURL = "https://api.openweathermap.org/data/2.5/onecall?lat=45.5152&lon=122.6784&exclude=minutely&appid=47abe5a03023354eae000f4a15ebd2e0";
var saltLakeCityURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.7608&lon=111.8910&exclude=minutely&appid=47abe5a03023354eae000f4a15ebd2e0";
var orlandoURL = "https://api.openweathermap.org/data/2.5/onecall?lat=28.5384&lon=81.3789&exclude=minutely&appid=47abe5a03023354eae000f4a15ebd2e0";
var newYorkURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.7128&lon=74.0060&exclude=minutely&appid=47abe5a03023354eae000f4a15ebd2e0";
var atlantaTest = "api.openweathermap.org/data/2.5/onecall?lat=33.74&lon=84.38&callback=47abe5a03023354eae000f4a15ebd2e0"
// fetch api and what to do with retrieved info
function getAPIAtlanta(){
  fetch(atlantaURL)
  .then((response) => response.json())
 .then((data) => console.log(data));
  // .then(){
  //   console.log("we got it bois");
  // }
}



// use api to set textcontent on required feilds
