import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  SUN, 
  RAIN,
  SNOW,  
  THUNDER,
  DRIZZLE
} from './../../../constants/weathers';
import './styles.css';

const icons = {
  [SUN]: "day-sunny",
  [CLOUD]: "cloud",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstore",
  [DRIZZLE]: "day-showers"
};

const GetWeatherIcon = (weatherState) => {
  let icon = icons[weatherState];
  icon = icon ? icon : "day-sunny";
  const sizeIcon = "4x";

  return (<WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>);
}

const WeatherTemperature = ({temperature,weatherState}) => (
  <div className="WeatherTemperatureCont">
    {
      GetWeatherIcon(weatherState)  
    }
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{`C°`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;