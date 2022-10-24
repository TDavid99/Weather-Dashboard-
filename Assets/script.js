function initPage() {
  const cityEl = document.getElementById("Time");
  const searchEl = document.getElementById('date');
  const clearEl = document.getElementById('current-weather-items');
  const currentTempEl = document.getElementById("current-temp")
  const currentHumidityEl = document.getElementById("current-humidity")
  const currentWindEl = document.getElementById("current-wind")
  const historyEl = document.getElementById("history");
  const currentUVEl = document.getElementById("UV-index");
  const nameEl = document.getElementById("city-name");
  var fivedayEl = document.getElementById("fiveday-header");
  var todayweatherEl = document.getElementById("today-weather");
  let searchHistory = JSON.parse(localStorage.getItem("search")) || [];


  const API_KEY = '49cc8c821cdaff9af04c9f98c36eb74';

  function getWeatherData(CityName) {
    //current weather open weather api
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    axios.get(queryURL)
      .then(function (response) {

        todayweatherEl.classList.remove("none");


        //parse display current weather
        const currentDate = new Date(response.data.dt * 1000);
        const day = currentDate.getDate();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        nameE1.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ")";
        currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + "&#176F";
        currentHumidityEl.innerHTML = "Humidity: " + response.data.humidity + "%";
        currentWindEl.innerHTML = "wind Speed" + response.data.wind.speed + "mph";


        // UV Index
        let lat = response.data.coord.latitude;
        let lon = response.data.coord.longitude;
        let UVQuery = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
        axios.get(UVQueryURL)
          .then(function (response) {
            let UVIndex = document.createElement("span");
            //colors for uv index
            if (response.data[0].value < 4){
              UVIndex.setAttribute("class", "badge badge-success");
            }
            else if (response.data[0].value < 8 ) {
              UVIndex.setAttribute("class", "badge badge-warning");
            }
            else {
              uvindex.setAttribute("class", "badge badge-danger");
            }
            console.log(response.data[0].value)
            UVIndex.innerHTML = response.data[0].value;
            currentUVEl.innerHTML = "UV Index: ";
            currentUVEl.append(UVIndex);
          });
        // forcast for current city 
        let cityID = response.data.id;
        let forecastQuertURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey;
        axios.get(forecastQueryURL)
          .then(function (response) {
            fivedayEl.classList.remove("none");
            //parse display for next five days 

            const forecastEls = document.querySelectorAll(".forcast");
            for (i = 0; i < forcastEls.length; i++) {
              forcastEls[i].innerHTML = "";
              const forecastIndex = i * 8 + 4;
              const forecastDate = new Date(response.data.List[forcastIndex].dt * 1000);
              const forecastDay = forcastDate.getDate();
              const forecastMonth = forcastDate.getMonth();
              const forecastYear = forcastDate.getFullYear();
              const forcastDateEl = document.createElement('p');
              forecastDateEl.setAttribute("class", "mt mb-0 forccast-date");
              forecastDateEl.innerHTML = forcastMonth + "/" + forecastDay + "/" + forecastYear;
              forcast[i].append(forcastDateEl);

              const forecastWeatherEl = document.createElement("img");
              forecastWeatherEl.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.list[forecastIndex].weather[0].icon + "@2x.png");
              forecastWeatherEl.setAttribute("alt", response.data.list[forecastIndex].weather[0].description);
              forecastWeatherEl[i].append(forecastWeatherEl);
              const forecastTempE1 = document.createElement('p');
              forecastTempE1.innerHTML = "Temp:" + k2f(response.data.list[foreccastIndex].main.temp) + "&#176F";
              forecastEls[i].append(forecastTempEl);
              const forecastHumidityEl = document.createElement("p");
              forecastHumidityEl.innerHTML = "Humidity: " + response.data.list[forecastIndex].main.humidity + "%";
              forecastEls[i].append(forecastHumidityEl);

            }
            TimeE1.
              searchE1.addEventListener("click", function () {


                fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityEl.value + "&appid-8a42d43f7d7dc180da5b1e51890e67dc")
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
