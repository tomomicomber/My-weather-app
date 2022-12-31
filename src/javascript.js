let now = new Date();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let hours = now.getHours();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let time = document.querySelector("#time");
time.innerHTML = `${day}, ${hours}:${minutes}`;

function showTempreture(response) {
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = response.data.name;
  let currentTemp = document.querySelector("#currentTemp");
  let roundedTempreture = Math.round(response.data.main.temp);

  currentTemp.innerHTML = roundedTempreture;

  let currentHumidity = document.querySelector("#current-humidity");
  currentHumidity.innerHTML = response.data.main.humidity;
  let currentSpeed = document.querySelector("#current-speed");
  currentSpeed.innerHTML = response.data.wind.speed;
}

function showCity(city) {
  let apiKey = "2bd326a60dc89a53287e446e819664df";
  let url = "https://api.openweathermap.org/data/2.5/weather?q=";
  axios.get(`${url}${city}&appid=${apiKey}&units=metric`).then(showTempreture);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = `${cityInput.value}`;
  showCity(cityInput.value);
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", handleSubmit);

function searchCurrent(response) {
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = response.data.name;
  let currentTemp = document.querySelector("#currentTemp");
  let roundedTempreture = Math.round(response.data.main.temp);

  currentTemp.innerHTML = roundedTempreture;

  let currentHumidity = document.querySelector("#current-humidity");
  currentHumidity.innerHTML = response.data.main.humidity;
  let currentSpeed = document.querySelector("#current-speed");
  currentSpeed.innerHTML = Math.round(response.data.wind.speed);
}

function showCity(city) {
  let apiKey = "2bd326a60dc89a53287e446e819664df";
  let url = "https://api.openweathermap.org/data/2.5/weather?q=";
  axios.get(`${url}${city}&appid=${apiKey}&units=metric`).then(showTempreture);
}

function searchLocation(position) {
  let apiKey = "2bd326a60dc89a53287e446e819664df";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(searchCurrent);
  console.log(url);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocation = document.querySelector("#current-button");
currentLocation.addEventListener("click", getCurrentLocation);
