// API_KEY for maps api
const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve (fetch) weather data from openweathermap API
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);

  return weatherPromise
    .then((respone) => {
      if (respone.ok) {
        // console.log(respone);
        // console.log(respone.json());
        return respone.json();
      } else {
        // throw new Error(response.statusText);
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Fetch Error :-S", error);
    });
};

getWeatherData("detroit");
