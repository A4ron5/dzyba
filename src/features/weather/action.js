import api from '../../api';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  data,
});

const fetchWeatherFailure = (err) => ({
  type: FETCH_WEATHER_FAILURE,
  errs,
});

export const fetchWeather = (city) => (dispatch) => {
  dispatch(fetchWeatherRequest());

  return api.fetchWeather(city)
    .then((res) => {
      dispatch(fetchWeatherSuccess(res))
    })
    .catch(err => {
      dispatch(fetchWeatherFailure(err))
    })
};
