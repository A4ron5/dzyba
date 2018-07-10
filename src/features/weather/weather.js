import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { WeatherUI } from '../../ui/organisms';
import { fetchWeather } from './action';
import { Loader } from '../../ui/molecules';
import { Error } from '../error';
import { Input } from '../input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class WeatherRaw extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    condition: PropTypes.string.isRequired,
    degree: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    fetchWeather: PropTypes.func.isRequired,
  }

  state = {
    isInputOpen: false,
  }

  componentDidMount() {
    const { fetchWeather } = this.props;
    fetchWeather('Moscow');
  }

  handleOpen = () => {
    const { isInputOpen } = this.state;
    this.setState({
      isInputOpen: !isInputOpen,
    });
  }

  render() {
    const {
      isFetching, isError, condition, degree, pressure, humidity, wind, city,
    } = this.props;
    const { isInputOpen } = this.state;
    return (
      <Loader loading={isFetching}>
        { isError ? <Error />
          : (
            <Wrapper>
              <Input isOpen={isInputOpen} handleOpen={this.handleOpen} />
              <WeatherUI
                condition={condition}
                degree={degree}
                pressure={pressure}
                humidity={humidity}
                wind={wind}
                city={city}
                onClick={this.handleOpen}
              />
            </Wrapper>
          )
        }
      </Loader>
    );
  }
}

const mapStateToProps = state => ({
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
