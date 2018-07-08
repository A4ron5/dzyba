import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { WeatherIcon } from '../../ui/molecules';
import { fetchWeather } from './action';

class WeatherRaw extends React.Component {
  
  componentDidMount() {
    this.props.fetchWeather('Sibay');
  };

  render() {
    return (
      <WeatherIcon condition='Rain'/>
    )
  };
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    state: state.data
  }
}

export const Weather = connect(mapStateToProps, { fetchWeather })(WeatherRaw);