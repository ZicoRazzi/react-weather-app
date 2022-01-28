import React from "react";
import AccordionComp from "./AccordionComp";
import dateBuilderAccordion from "./DateBuilderAccordion";
import styled from "styled-components";
import Forecast from "../assets/images/forecast-bg.png";

const WeeklyWeatherStyle = styled.div`
  width: 400px;
  min-height: 700px;
  border-radius: 20px;
  background-image: url(${Forecast});
  background-size: cover;
  background-position: bottom;
  transition: 0.3s ease-out;
  border: 1px solid #fff;
  padding: 25px;
 
  @media only screen and (max-width: 321px) {
    .weather_container {
      margin: 0 auto;
      width: 90%;
      min-height: 620px;
      padding: 0px;
    }
    button {
      left: 100px;
    }
  }
`;

export default function WeeklyWeather({ weather, weatherDetails }) {
  console.log(weatherDetails);

  return (
    <WeeklyWeatherStyle>
      <div className="weather_container">
        <AccordionComp
          today={dateBuilderAccordion(
            new Date(weatherDetails.daily[1].dt * 1000)
          )}
          src={`https://openweathermap.org/img/wn/${weatherDetails.daily[1].weather[0].icon}.png`}
          min_temp={Math.round(weatherDetails.daily[1].temp.min - 273)}
          max_temp={Math.round(weatherDetails.daily[1].temp.max - 273)}
          morning_temp={Math.round(weatherDetails.daily[1].temp.morn - 273)}
          afternoon_temp={Math.round(weatherDetails.daily[1].temp.day - 273)}
          evening_temp={Math.round(weatherDetails.daily[1].temp.eve - 273)}
          night_temp={Math.round(weatherDetails.daily[1].temp.night - 273)}
        />
        <AccordionComp
          today={dateBuilderAccordion(
            new Date(weatherDetails.daily[2].dt * 1000)
          )}
          src={`https://openweathermap.org/img/wn/${weatherDetails.daily[2].weather[0].icon}.png`}
          min_temp={Math.round(weatherDetails.daily[2].temp.min - 273)}
          max_temp={Math.round(weatherDetails.daily[2].temp.max - 273)}
          morning_temp={Math.round(weatherDetails.daily[2].temp.morn - 273)}
          afternoon_temp={Math.round(weatherDetails.daily[2].temp.day - 273)}
          evening_temp={Math.round(weatherDetails.daily[2].temp.eve - 273)}
          night_temp={Math.round(weatherDetails.daily[2].temp.night - 273)}
        />
        <AccordionComp
          today={dateBuilderAccordion(
            new Date(weatherDetails.daily[3].dt * 1000)
          )}
          src={`https://openweathermap.org/img/wn/${weatherDetails.daily[3].weather[0].icon}.png`}
          min_temp={Math.round(weatherDetails.daily[3].temp.min - 273)}
          max_temp={Math.round(weatherDetails.daily[3].temp.max - 273)}
          morning_temp={Math.round(weatherDetails.daily[3].temp.morn - 273)}
          afternoon_temp={Math.round(weatherDetails.daily[3].temp.day - 273)}
          evening_temp={Math.round(weatherDetails.daily[3].temp.eve - 273)}
          night_temp={Math.round(weatherDetails.daily[3].temp.night - 273)}
        />
        <AccordionComp
          today={dateBuilderAccordion(
            new Date(weatherDetails.daily[4].dt * 1000)
          )}
          src={`https://openweathermap.org/img/wn/${weatherDetails.daily[4].weather[0].icon}.png`}
          min_temp={Math.round(weatherDetails.daily[4].temp.min - 273)}
          max_temp={Math.round(weatherDetails.daily[4].temp.max - 273)}
          morning_temp={Math.round(weatherDetails.daily[4].temp.morn - 273)}
          afternoon_temp={Math.round(weatherDetails.daily[4].temp.day - 273)}
          evening_temp={Math.round(weatherDetails.daily[4].temp.eve - 273)}
          night_temp={Math.round(weatherDetails.daily[4].temp.night - 273)}
        />
        <AccordionComp
          today={dateBuilderAccordion(
            new Date(weatherDetails.daily[5].dt * 1000)
          )}
          src={`https://openweathermap.org/img/wn/${weatherDetails.daily[5].weather[0].icon}.png`}
          min_temp={Math.round(weatherDetails.daily[5].temp.min - 273)}
          max_temp={Math.round(weatherDetails.daily[5].temp.max - 273)}
          morning_temp={Math.round(weatherDetails.daily[5].temp.morn - 273)}
          afternoon_temp={Math.round(weatherDetails.daily[5].temp.day - 273)}
          evening_temp={Math.round(weatherDetails.daily[5].temp.eve - 273)}
          night_temp={Math.round(weatherDetails.daily[5].temp.night - 273)}
        />
        <AccordionComp
          today={dateBuilderAccordion(
            new Date(weatherDetails.daily[6].dt * 1000)
          )}
          src={`https://openweathermap.org/img/wn/${weatherDetails.daily[6].weather[0].icon}.png`}
          min_temp={Math.round(weatherDetails.daily[6].temp.min - 273)}
          max_temp={Math.round(weatherDetails.daily[6].temp.max - 273)}
          morning_temp={Math.round(weatherDetails.daily[6].temp.morn - 273)}
          afternoon_temp={Math.round(weatherDetails.daily[6].temp.day - 273)}
          evening_temp={Math.round(weatherDetails.daily[6].temp.eve - 273)}
          night_temp={Math.round(weatherDetails.daily[6].temp.night - 273)}
        />
        <AccordionComp
          today={dateBuilderAccordion(
            new Date(weatherDetails.daily[7].dt * 1000)
          )}
          src={`https://openweathermap.org/img/wn/${weatherDetails.daily[7].weather[0].icon}.png`}
          min_temp={Math.round(weatherDetails.daily[7].temp.min - 273)}
          max_temp={Math.round(weatherDetails.daily[7].temp.max - 273)}
          morning_temp={Math.round(weatherDetails.daily[7].temp.morn - 273)}
          afternoon_temp={Math.round(weatherDetails.daily[7].temp.day - 273)}
          evening_temp={Math.round(weatherDetails.daily[7].temp.eve - 273)}
          night_temp={Math.round(weatherDetails.daily[7].temp.night - 273)}
        />
      </div>
    </WeeklyWeatherStyle>
  );
}
