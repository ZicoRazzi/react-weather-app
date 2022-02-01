import React from 'react';
import AccordionComp from './AccordionComp';
import dateBuilderAccordion from './DateBuilderAccordion';
import styled from 'styled-components';
import Forecast from '../assets/images/forecast-bg.png';

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
        {weatherDetails.daily.map((day, i) => {
          if (i === 0 || i >= 8) return;
          return (
            <AccordionComp key={i + Math.random()} weatherDataPerDay={day} />
          );
        })}
      </div>
    </WeeklyWeatherStyle>
  );
}
