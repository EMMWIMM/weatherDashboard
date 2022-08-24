var requestURL = "http://api.openweathermap.org/data/2.5/forecast?APPID=8cc2bc5b692b912633c29866f21e24d9&units=imperial&";
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
var weatherData = [{temp:"90", wind:"something", humidity:"20", skies:"12"}
                      ,{temp:"100", wind:"80mph", humidity:"99", skies:"loudy"}];
function getAPICity(cityName){
  return fetch(requestURL+"&q="+cityName)
    .then((response) => {
      return response.json().then((data) => {
        console.log(data);
        return data;
      }).catch((err) => {
        console.log(err);
      })
    });
  // .then(){
  //   console.log("we got it bois");
  // }
}
async function renderWeatherData(cityName){
  var cityWeatherData = await getAPICity(cityName);
  for(i=0; i<40; i=i+8){
    console.log("i: "+i);
    console.log("temp? "+cityWeatherData.list[i].main.temp);
    weatherData.temp = cityWeatherData.list[i].main.temp;

    console.log("wind? "+cityWeatherData.list[i].wind.speed);
    weatherData.wind = cityWeatherData.list[i].wind.speed;

    console.log("humidity? "+cityWeatherData.list[i].main.humidity);
    weatherData.humidity = cityWeatherData.list[i].main.humidity;

    console.log("temp? "+cityWeatherData.list[i].weather[0].main);
    weatherData.skies = cityWeatherData.list[i].weather[0].main;
  }
  //weatherData = cityWeatherData;

}



// use api to set textcontent on required feilds
