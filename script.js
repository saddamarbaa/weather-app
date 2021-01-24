// API_KEY for maps api
const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Function To Retrieve (fetch) weather data from openweathermap API
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      // throw new Error(response.statusText);
      throw new Error("Something went wrong");
    }
  });
};

/**
 * Function To Retrieve city input and get the weather data
 */

const searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Fetch Error :-S", error);
    });
};
