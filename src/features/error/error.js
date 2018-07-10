import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ErrorUI } from '../../ui/molecules';
import { resetError, fetchWeather } from '../weather/action';

class ErrorRaw extends React.Component {
  static propTypes = {
    resetError: PropTypes.func.isRequired,
    fetchWeather: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { resetError, fetchWeather } = this.props;
    setTimeout(() => {
      resetError();
      fetchWeather('Moscow');
    }, 1000);
  }

  render() {
    return (
      <ErrorUI>
        {'Something wrong'}
      </ErrorUI>
    );
  }
}

export const Error = connect(null, { resetError, fetchWeather })(ErrorRaw);
