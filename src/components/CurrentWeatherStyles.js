import styled from "styled-components";
import Warm from "../assets/images/warm-bg.jpg";
import Cold from "../assets/images/cold-bg.jpg";

const CurrentWeatherStyles = styled.div`
  .weather_container {
    width: 400px;
    min-height: 700px;
    border-radius: 20px;
    background-image: url(${Cold});
    background-size: cover;
    background-position: bottom;
    transition: 0.3s ease-out;
    border: 1px solid #fff;
    padding: 25px;
   
  }
  .weather_container.warm {
    background-image: url(${Warm});
  }
  .search_bar {
    width: 100%;
    display: block;
    padding: 20px;

    appearance: none;
    background: none;
    border: none;
    outline: none;

    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    margin: 0 auto;

    color: #313131;
    font-size: 20px;

    transition: 0.4s ease;
  }
  .search_bar:focus {
    background-color: rgba(255, 255, 255, 0.75);
  }
  .location {
    color: #fff;
    margin: 20px auto;
    font-size: 34px;
    font-weight: 500;
    text-align: center;
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
    font-family: "Montserrat SemiBold";
  }
  .date,
  span,
  .temp_min,
  .temp_max,
  .humidity {
    color: #fff;
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
  }
  .weather_box {
    text-align: center;
  }
  .temp {
    position: relative;
    display: inline-block;
    margin: 30px auto;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 16px;
    color: #fff;
    font-size: 102px;
    font-weight: 900;

    text-shadow: 2px 4px rgba(50, 50, 70, 0.5);
    text-align: center;
    box-shadow: 3px 6-x rgba(0, 0, 0, 0.2);
  }
  .weather {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  }
  
  .error_message{
    width: 100%;
    display: block;
    padding: 20px;

    appearance: none;
    background: none;
    border: none;
    outline: none;

    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    margin: 0 auto;

    color: #313131;
    font-size: 20px;

    margin-top: 10px;
    transition: 0.4s ease;
  }

  @media only screen and (max-width: 321px) {
    .weather_container {
    width: 300px;
    min-height: 620px;
    }
    .weather{
      font-size: 30px;
    }
    .temp{
      margin: 10px auto;
      font-size: 80px;
    }
  }
`;

export default CurrentWeatherStyles