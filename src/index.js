function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  console.log(searchInput.value);
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function updateWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "b187a116ta5dc648f1o84f8b1a5e4430";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=b187a116ta5dc648f1o84f8b1a5e4430&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}
searchCity("Portugal");
