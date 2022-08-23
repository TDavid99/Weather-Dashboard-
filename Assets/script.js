// var TimeE1 = document.getElementById("Time")
// var TimeE1 = document.getElementById("date")
// var TimeE1 = document.getElementById("Time")
// 

// $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));


// var weatherCall = "";
var cityEl = document.querySelector("#cityinput")
var searchE1 = document.querySelector("#search-button")
// var cityDate = document.querySelector("#cityDate")
// var nameE1 = document.querySelector(city-name)
var currentTempE1 = document.querySelector("#current-temp")
var currentHumidityE1 = document.querySelector("#current-humidity")
var currentWindE1 = document.querySelector("#current-wind")




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

})

// var 
// fetch('https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid-8a42d43f7d7dc180da5b1e51890e67dc')
// .then(function (res) {
// return res.json();
// })
// .then(function (data) {
// console.log(data);
// var uvindex =("https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=8a42d43f7d7dc180da5b1e51890e67dc" )
// return fetch(uvindex)
// })
// .then(function (res) {
// return res.json();
// })
// .then(function (data) {
// console.log(data);
// }); 
// 
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