var requestURL =     "https://api.openweathermap.org/data/2.5/forecast?APPID=d242faf8a83997f5dd692d680eed72bb&units=imperial&";
var request25URL =   "https://api.openweathermap.org/data/2.5/uvi?appid=d242faf8a83997f5dd692d680eed72bb";//&lat=40.3641&lon=111.7385";
var coordsURL =      "https://api.openweathermap.org/data/2.5/weather?appid=d242faf8a83997f5dd692d680eed72bb";//&q=boston";
var todayWind = document.getElementById("todayWind");
var todayUV = document.getElementById("todayUV");
var todayHum = document.getElementById("todayHum");
var todayTemp = document.getElementById("todayTemp");
var todayIconContainer = document.getElementById("todayIcon");
const image = document.createElement('img')
var cityAndDate = document.getElementById('cityAndDate');
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
var uv1 = document.getElementById("uv1");
var uv2 = document.getElementById("uv2");
var uv3 = document.getElementById("uv3");
var uv4 = document.getElementById("uv4");
var uv5 = document.getElementById("uv5");
var icon1 = document.getElementById("img1");
var icon2 = document.getElementById("img2");
var icon3 = document.getElementById("img3");
var icon4 = document.getElementById("img4");
var icon5 = document.getElementById("img5");
var cityButtons = document.getElementById('searchCityButtons')
var currentHum = "";
var currentWind ="";
var currentUV= "";
var weatherDataAll = [weatherData]
var weatherData = [{temp:"90", wind:"something", humidity:"20", uv:"12"}];
var search = document.getElementById('searchbar')
const d = new Date();
var day = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var today = day+  "/" +month +"/" + year;





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
        return data;
      }).catch((err) => {
        console.log(err);
      })
    });
  // .then(){
  //   console.log("we got it bois");
  // }
}
function getUVIndex(lat, lon){
  console.log("getUVIndex("+latLong+")");
  var latLong = [];
  return fetch(request25URL+"&lat="+lat+"&lon="+lon)
    .then((response) => {
      return response.json().then((data) => {
        console.log(data);
        
        return data.value;
      }).catch((err) => {
        console.log(err);
      })
    });
}
async function renderWeatherData(cityName){

  event.preventDefault();
  weatherDataAll.length=0;
  var lsWeatherCity = localStorage.getItem(cityName);
  console.log("lsWeatherCity:"+lsWeatherCity);
  
  var cityData = [];
  cityData = await getCoords(cityName);
  
  console.log('cityData:'+cityData);
  //console.log('2:'+cityData[2]);
  var uvIndex = await getUVIndex(cityData.coord.lat, cityData.coord.lon);

  var iconString = cityData.weather[0].icon;


  var cityWeatherData;  
  if(!lsWeatherCity){
      console.log('not stored');
      cityWeatherData = await getAPICity(cityName);
      addCityButton(cityName);
  } else {
      cityWeatherData = JSON.parse(lsWeatherCity);
  }

  //var cityCoord = await getAPICity(cityName);

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

    //weatherData.uv = cityWeatherData.list[i]. UNKNOWN... free version does not appear to include UV... could not determine which version to PAY for to get UV index

    weatherData.city = cityName;

    weatherDataAll.push(weatherData.temp, weatherData.wind, weatherData.humidity, weatherData.skies, weatherData.city, uvIndex, cityWeatherData.list[i].weather[0].icon);
    console.log(JSON.stringify("cwd : "+cityWeatherData));
    localStorage.setItem( weatherData.city, JSON.stringify(cityWeatherData));
  }
  addText();
 
  //weatherData = cityWeatherData;

}


function addCityButton(cityName){
  //TODO: make these clickable just like the other other li and add class (style)
  console.log('addCityButton');
  var li = document.createElement("li");
  li.className= 'city';
  li.setAttribute("class", "city");
  li.setAttribute("onclick", "renderWeatherData('"+cityName+"')");
  li.append(cityName);
  //li.appendChild(document.createTextNode(cityName));
  cityButtons.appendChild(li);
}
// use api to set textcontent on required feilds

function addText(cityName){
  cityAndDate.innerHTML = weatherDataAll[4] + ' ' + today;
  todayTemp.innerHTML = "Temp: " + weatherDataAll[0]
  todayWind.innerHTML = "Wind: " + weatherDataAll[1]
  todayHum.innerHTML = "Humidity: " + weatherDataAll[2]
  todayUV.innerHTML = "UV Index: " + weatherDataAll[5]
  image.src= "http://openweathermap.org/img/w/"+weatherDataAll[6]+".png";
  todayIconContainer.appendChild(image);

  t1.innerHTML = "Temp: " + weatherDataAll[0]
  w1.innerHTML = "Wind: " + weatherDataAll[1]
  h1.innerHTML = "Humidity: " + weatherDataAll[2]
  uv1.innerHTML = "Skies: " + weatherDataAll[3]
  icon1.src="http://openweathermap.org/img/w/"+weatherDataAll[6]+".png";
  
  offset=7;
  t2.innerHTML = "Temp: " + weatherDataAll[0+offset]
  w2.innerHTML = "Wind: " + weatherDataAll[1+offset]
  h2.innerHTML = "Humidity: " + weatherDataAll[2+offset]
  uv2.innerHTML = "Skies: " + weatherDataAll[3+offset]
  icon2.src="http://openweathermap.org/img/w/"+weatherDataAll[6+offset]+".png";

  offset+=7;
  t3.innerHTML = "Temp: " + weatherDataAll[0+offset]
  w3.innerHTML = "Wind: " + weatherDataAll[1+offset]
  h3.innerHTML = "Humidity: " + weatherDataAll[2+offset]
  uv3.innerHTML = "Skiesx: " + weatherDataAll[3+offset]
  icon3.src="http://openweathermap.org/img/w/"+weatherDataAll[6+offset]+".png";

  offset+=7;
  t4.innerHTML = "Temp: " + weatherDataAll[0+offset]
  w4.innerHTML = "Wind: " + weatherDataAll[1+offset]
  h4.innerHTML = "Humidity: " + weatherDataAll[2+offset]
  uv4.innerHTML = "Skies: " + weatherDataAll[3+offset]
  icon4.src="http://openweathermap.org/img/w/"+weatherDataAll[6+offset]+".png";

  offset+=7;
  t5.innerHTML = "Temp: " + weatherDataAll[0+offset]
  w5.innerHTML = "Wind: " + weatherDataAll[1+offset]
  h5.innerHTML = "Humidity: " + weatherDataAll[2+offset]
  uv5.innerHTML = "Skies: " + weatherDataAll[3+offset]
  icon5.src="http://openweathermap.org/img/w/"+weatherDataAll[6+offset]+".png";
}
