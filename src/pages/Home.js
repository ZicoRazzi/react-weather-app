import React from 'react'
import styled from 'styled-components';
import CardFlip from '../components/CardFlip';
import CurrentWeather from '../components/CurrentWeather';
// import Weather from '../components/Weather'

const CurrentWeatherStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);   
  padding: 50px;
`


export default function Home() {

  
  return (
    <CurrentWeatherStyles>
      <CardFlip />
    </CurrentWeatherStyles>
  )
}
