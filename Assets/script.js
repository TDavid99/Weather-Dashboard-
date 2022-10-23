
const cityEl = document.getElementById("Time");
const searchE1 = document.getElementById('date');
const clearE1 = document.getElementById('current-weather-items');
const currentTempE1 = document.getElementById("current-temp")
const currentHumidityE1 = document.getElementById("current-humidity")
const currentWindE1 = document.getElementById("current-wind")
const historyE1 = document.getElementById("history");
const currentUVE1 = document.getElementById("UV-index");
var fivedayE1 = document.getElementById("fiveday-header");

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday']
const months = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const API_KEY = '49cc8c821cdaff9af04c9f98c36eb74';

setInterval(() => {
const time = new Date();
const month = time.getMonth();
const date = time.getDate();
const day = time.getDay();
const hour  = time.getHours();
const hoursIn12HrFormat = hour >= 13 ? hour %12: hour 
const minutes = time.getMinutes();
const ampm = hour >=12 ? 'PM' : 'AM'

timerE1. innerHTML = hoursIn12HrFormat + ':' + minutes+ ' ' + `<span id="am-pm"> $(ampm)</span>`

dateE1.innerHTML = days[day] + ', ' + date+ ' ' + months[month] 
} ,1000);

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