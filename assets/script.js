var requestURL = "http://api.openweathermap.org/data/2.5/forecast?APPID=8cc2bc5b692b912633c29866f21e24d9&units=imperial&";
var coordsURL = "http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=8cc2bc5b692b912633c29866f21e24d9";
var todayWind = document.getElementById("todayWind");
var todayUV = document.getElementById("todayUV");
var todayHum = document.getElementById("todayHum");
var todayTemp = document.getElementById("todayTemp");
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var t1 = document.getElementById("t1");
var w1 = document.getElementById("w1");
var h1 = document.getElementById("h1");
var t2 = document.getElementById('t2')
var t3 = document.getElementById('t3')
var t4 = document.getElementById('t4')
var t5 = document.getElementById('t5')
var w2 = document.getElementById('w2')
var w3 = document.getElementById('w3')
var w4 = document.getElementById('w4')
var w5 = document.getElementById('w5')
var h2 = document.getElementById('h2')
var h3 = document.getElementById('h3')
var h4 = document.getElementById('h4')
var h5 = document.getElementById('h5')
var currentHum = "";
var currentWind ="";
var currentUV= "";
var weatherDataAll = [weatherData]
var weatherData = [{temp:"90", wind:"something", humidity:"20", skies:"12"}];
var search = document.getElementById('searchbar')




// fetch api and what to do with retrieved info
//const car = {type:"Fiat", model:"500", color:"white"};
// var weatherData = [{temp:"90", wind:"something", humidity:"20", skies:"12"},{temp:"100", wind:"80mph", humidity:"99", skies:"loudy"},{temp:"100", wind:"80mph", humidity:"99", skies:"loudy"},{temp:"100", wind:"80mph", humidity:"99", skies:"loudy"},{temp:"100", wind:"80mph", humidity:"99", skies:"loudy"}];
function getAPICity(cityName){
  console.log("getAPICity("+cityName+")");
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

function getCoords(cityName){
  console.log("getCoords("+cityName+")");
  return fetch(coordsURL+"&q="+cityName)
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
  event.preventDefault();
  var cityCoord = away getCoords(cityName);
  
  //var cityWeatherData = await getAPICity(cityName);
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

weatherDataAll.push(weatherData.temp, weatherData.wind, weatherData.humidity, weatherData.skies);
addText();

  }
  //weatherData = cityWeatherData;

}



// use api to set textcontent on required feilds

function addText(){

todayTemp.innerHTML = "Temp:" + weatherDataAll[1]
todayWind.innerHTML = "Wind:" + weatherDataAll[2]
todayHum.innerHTML = "Humidity:" + weatherDataAll[3]

t1.innerHTML = "Temp:" + weatherDataAll[1]
w1.innerHTML = "Wind:" + weatherDataAll[2]
h1.innerHTML = "Humidity:" + weatherDataAll[3]

t2.innerHTML = "Temp:" + weatherDataAll[5]
w2.innerHTML = "Wind:" + weatherDataAll[6]
h2.innerHTML = "Humidity:" + weatherDataAll[7]

t3.innerHTML = "Temp:" + weatherDataAll[9]
w3.innerHTML = "Wind:" + weatherDataAll[10]
h3.innerHTML = "Humidity:" + weatherDataAll[11]

t4.innerHTML = "Temp:" + weatherDataAll[13]
w4.innerHTML = "Wind:" + weatherDataAll[14]
h4.innerHTML = "Humidity:" + weatherDataAll[15]

t5.innerHTML = "Temp:" + weatherDataAll[16]
w5.innerHTML = "Wind:" + weatherDataAll[17]
h5.innerHTML = "Humidity:" + weatherDataAll[18]
}
