$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));


var weatherCall = "";
var cityEl = document.querySelector("#city")
var searchE1 = document.querySelector("#search-btn")
var cityDate = document.querySelector("#cityDate")

Fetch('https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "=8a42d43f7d7dc180da5b1e51890e67dc')
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    var uvindex =("https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=8a42d43f7d7dc180da5b1e51890e67dc" ),
    })
    .then(function (res) {
      return res.json();
    })
  .then(function (data) {
    console.log(data);
  }); 
};

var citySearch = Function(event) {
  event.preventDefault();

var searchdeafault();

var searchTerm = cityEl.ariaValueMax.trim();

if (searchTerm) {
  weatherCall(searchTerm)
  searchTerm = "";
} else console.warn("you must choose a city");


}
searchE1.addEventListener("click", citySearch)