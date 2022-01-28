import React, { useState } from "react";
import AccordionStyles from './AccordionStyles'

function Accordion(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <AccordionStyles className="accordion_wrapper">
      <div
        className={`accordion_title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <span>{props.today}</span>
        
          <div className="forecast_icon"><img src={props.src} /></div>
          <span>
          {props.min_temp}/{props.max_temp}°C
        </span>
      </div>
      <div className={`accordion_item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion_content">
         
          <span>Morning {props.morning_temp}°C</span>
          <span>Afternoon {props.afternoon_temp}°C</span>
          <span>Evening {props.evening_temp}°C</span>
          <span>Night {props.night_temp}°C</span>
          
        </div>
      </div>
    </AccordionStyles>
  );
}

export default Accordion;
