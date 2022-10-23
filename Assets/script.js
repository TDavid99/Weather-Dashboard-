function initPage() {
const cityEl = document.getElementById("Time");
const searchE1 = document.getElementById('date');
const clearE1 = document.getElementById('current-weather-items');
const currentTempE1 = document.getElementById("current-temp")
const currentHumidityE1 = document.getElementById("current-humidity")
const currentWindE1 = document.getElementById("current-wind")
const historyE1 = document.getElementById("history");
const currentUVE1 = document.getElementById("UV-index");
const nameE1 = document.getElementById("city-name");
var fivedayE1 = document.getElementById("fiveday-header");
var todayweatherE1 = document.getElementById("today-weather");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];


const API_KEY = '49cc8c821cdaff9af04c9f98c36eb74';

function getWeatherData(CityName){
  //current weather open weather api
  let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
  axios.get(queryURL)
  .then(function(response){

    todayweatherE1.classList.remove("none");


    //parse display current weather
    const currentDate = new Date(response.data.dt * 1000);
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    nameE1.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ")";
  })
}
function getWeatherData () {
  navigator.geolocation.getCurrentPosition((success) => {
    let {latitude, longitude } = success.coords;
    
    fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).Then
  }
}
TimeE1.
searchE1.addEventListener("click", function () {


  fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityEl.value + "&appid-8a42d43f7d7dc180da5b1e51890e67dc")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      var uvindex = ("https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=8a42d43f7d7dc180da5b1e51890e67dc")
      return fetch(uvindex)
    })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });



var citySearch = function (event) {
  event.preventDefault();

  var searchTerm = cityEl.vaule.trim();

  // var searchdeafault();


  if (searchTerm) {
    weatherCall(searchTerm)
    searchTerm = "";
  } else console.warn("you must choose a city");


}
searchE1.addEventListener("click", citySearch)
})
}