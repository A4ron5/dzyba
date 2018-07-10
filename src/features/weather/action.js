import api from '../../api';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const RESET_ERROR = 'RESET_ERROR';

const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

const fetchWeatherSuccess = ({ data }) => ({
  type: FETCH_WEATHER_SUCCESS,
  data,
});

const fetchWeatherFailure = err => ({
  type: FETCH_WEATHER_FAILURE,
  err,
});

export const resetError = () => ({
  type: RESET_ERROR,
});

export const fetchWeather = city => async (dispatch) => {
  dispatch(fetchWeatherRequest());
  try {
    const data = await api.fetchWeather(city);
    dispatch(fetchWeatherSuccess(data));
  } catch (err) {
    dispatch(fetchWeatherFailure(err));
  }
};
