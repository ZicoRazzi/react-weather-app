import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";
import CurrentWeather from "./CurrentWeather";
import WeeklyWeather from "./WeeklyWeather";

const FlipButtonStyles = styled.button`

  position: relative;
  z-index: 10;
  left: 140px;
  top: -70px;
  width: 120px;
  border-radius: 20px;
  font-size: 14px;
  padding: 8px;
  background: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 2px 3px rgba(50, 50, 70, 0.5);
  transition: 0.3s ease;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;

  
  @media only screen and (max-width: 321px) {
    left: 88px;
    margin-top: 20px;
    .back-flip-button{
      left: 140px;
    }
  }
`;


export default function CardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState(null); // true
  const [weather, setWeather] = useState({});

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedFrontToBack="1"
      flipSpeedBackToFront="1"
    >
      <>
        <CurrentWeather
          weather={weather}
          setWeather={setWeather}
          weatherDetails={weatherDetails}
          setWeatherDetails={setWeatherDetails}
        />

        <FlipButtonStyles className="front-flip-button" onClick={handleClick}>
          7 day forecast
        </FlipButtonStyles>
      </>

      <>
        {weatherDetails && (
          <WeeklyWeather
            weather={weather}
            setWeather={setWeather}
            weatherDetails={weatherDetails}
            setWeatherDetails={setWeatherDetails}
          />
        )}

        <FlipButtonStyles className="back-flip-button" onClick={handleClick}>
          weather today
        </FlipButtonStyles>
      </>
    </ReactCardFlip>
  );
}
