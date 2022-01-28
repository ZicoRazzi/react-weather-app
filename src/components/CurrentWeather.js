import CurrentWeatherStyles from "./CurrentWeatherStyles";
import dateBuilder from "./DateBuilder";
import React, { useState, useEffect } from "react";
import { API_KEY, API_BASE_URL } from "../apis/config";

export default function CurrentWeather({ weatherDetails, setWeatherDetails }) {
  const [query, setQuery] = useState();
  const [input, setInput] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [weather, setWeather] = useState({});
  const [weatherActive, setWeatherActive] = useState(false);

  const handleSearch = (evt) => {
    if (evt.key !== "Enter") return;
    setQuery(input);
  };

  // useEffect(() => {
  //   if (!query) return;

  //   fetch(`${API_BASE_URL}weather?q=${query}&units=metric&APPID=${API_KEY}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setWeather(result);
  //       setWeatherActive(true);
  //     })
  //     .catch((error) => console.log(error));

  //     if (query.status !== 200 ) {
  //       setError(true)
  //       setErrorMessage(`${query.status} ERROR: City: ${query} ${query.statusText}`)
  //       console.log('ERROR', errorMessage)
  //       return
  //     }
  // }, [query]);

  //ASYNC
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}weather?q=${query}&units=metric&APPID=${API_KEY}`
        );
        // console.log("RESPONSE DATA", response);

        if (response.status === 404) {
          const errorCode = `City: ${query} ${response.statusText}`;
          setError(true);
          setErrorMessage(errorCode);
          // console.log("ERROR", errorCode);
          return;
        }

        const data = await response.json();
        
        setWeather(data);
        setError(false)
        setWeatherActive(true);
      } catch (error) {}
    };
    if (query) fetchData();
  }, [query]);

  useEffect(() => {
    if (!weatherActive) return;

    const getWeeklyWeather = async () => {
      const lat = weather.coord.lat;
      const lon = weather.coord.lon;

      try {
        const response = await fetch(
          `${API_BASE_URL}onecall?lat=${lat}&lon=${lon}&exclude=${`minutely,hourly,alerts`}&appid=${API_KEY}`
        );
        const result = await response.json();
        setWeatherDetails(result);
        setWeatherActive(false);
      } catch (error) {
        console.log(error);
      }
    };

    getWeeklyWeather();
  }, [weatherActive]);

  return (
    <CurrentWeatherStyles>
      <div
        className={
          weather?.main?.temp > 16 ? "weather_container warm" : "weather_container"
          // typeof weather.main != "undefined"
          //   ? weather.main.temp > 16
          //     ? "weather_container warm"
          //     : "weather_container"
          //   : "weather_container"
        }
      >
        <input
          type="text"
          className="search_bar"
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyPress={handleSearch}
        />
        {error ? (
          <div className="error_message">{errorMessage}</div>
        ) : (
          <React.Fragment>
          
            {typeof weather.main != "undefined" ? (
              <div>
                <div className="location_box">
                  <div className="location">
                    {weather.name}, {weather.sys.country}
                  </div>
                  <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather_box">
                  <div className="temp">{Math.round(weather.main.temp)}°c</div>
                  <div className="temp_min">
                    <span>Min temp: </span>
                    {Math.round(weather.main.temp_min)}°c
                  </div>
                  <div className="temp_max">
                    <span>Max temp: </span>
                    {Math.round(weather.main.temp_max)}°c
                  </div>
                  <div className="humidity">
                    <span>Humidity: </span>
                    {weather.main.humidity}%
                  </div>
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <div className="weather">{weather.weather[0].main}</div>
                </div>
              </div>
            ) : (
              ""
            )}
            
          </React.Fragment>
        )}
      </div>
    </CurrentWeatherStyles>
  );
}
