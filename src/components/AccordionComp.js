import React, { useState } from 'react';
import AccordionStyles from './AccordionStyles';
import dateBuilderAccordion from './DateBuilderAccordion';

function Accordion({ weatherDataPerDay }) {
  const [isOpen, setOpen] = useState(false);
  console.log(weatherDataPerDay);

  const today = dateBuilderAccordion(new Date(weatherDataPerDay.dt * 1000));
  const src = `https://openweathermap.org/img/wn/${weatherDataPerDay.weather[0].icon}.png`;
  return (
    <AccordionStyles className="accordion_wrapper">
      <div
        className={`accordion_title ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        <span>{today}</span>

        <div className="forecast_icon">
          <img src={src} />
        </div>
        <span>
          {Math.round(weatherDataPerDay.temp.min)}/
          {Math.round(weatherDataPerDay.temp.max)}°C
        </span>
      </div>
      <div className={`accordion_item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="accordion_content">
          <span>Morning {Math.round(weatherDataPerDay.temp.morn)}°C</span>
          <span>Afternoon {Math.round(weatherDataPerDay.temp.day)}°C</span>
          <span>Evening {Math.round(weatherDataPerDay.temp.eve)}°C</span>
          <span>Night {Math.round(weatherDataPerDay.temp.night)}°C</span>
        </div>
      </div>
    </AccordionStyles>
  );
}

export default Accordion;
