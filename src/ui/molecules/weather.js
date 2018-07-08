import React from 'react';
import {
  Cloud, Rain, Snow, Sun, Thunderstorm,
} from '../atom';

export const WeatherIcon = (props) => {
  switch (props.condition) {
    case 'Rain':
      return <Rain />;
    case 'Clear':
      return <Sun />;
    case 'Snow':
      return <Snow />;
    case 'Thunderstorm':
      return <Thunderstorm />;
    default:
      return <Cloud />;
  }
};
