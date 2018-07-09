import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { WeatherUI } from '../../ui/organisms';
import { fetchWeather } from './action';
import { Loader } from '../../ui/molecules';
import { Error } from '../error';
import { Input } from '../input';

class WeatherRaw extends React.Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    condition: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    pressure: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }

  state = {
    isInputOpen: false,
  }

  componentDidMount() {
    this.props.fetchWeather('Moscow');
  };
  
  handleOpen = () => {
    this.setState({
      isInputOpen: !this.state.isInputOpen
    })
  }

  render() {
    const { isFetching, isError, condition, degree, pressure, humidity, wind, city } = this.props;
    return (
      <Loader loading={isFetching}>
        { isError ? <Error /> :
        <React.Fragment>
          <Input isOpen={this.state.isInputOpen} handleOpen={this.handleOpen}/>
          <WeatherUI 
            condition={condition} 
            degree={degree}
            pressure={pressure}
            humidity={humidity}
            wind={wind} 
            city={this.props.city}
            onClick={this.handleOpen}
          /> 
        </React.Fragment>
        }
      </Loader>
    );
  };
};

const mapStateToProps = (state) => ({
  state: state.data,
  isFetching: state.reducerWeather.isFetching,
  isError: state.reducerWeather.isError,
  condition: state.reducerWeather.data.weather[0].main,
  degree: state.reducerWeather.data.main.temp,
  pressure: state.reducerWeather.data.main.pressure,
  humidity: state.reducerWeather.data.main.humidity,
  wind: state.reducerWeather.data.wind.speed,
  city: state.reducerWeather.data.name,
});

export const Weather = connect(mapStateToProps, { fetchWeather })(WeatherRaw);
