import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  RESET_ERROR,
} from './action';

const defaultState = {
  isFetching: false,
  data: {
    main: {
      temp: '',
      pressure: '',
      humidity: '',
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
    wind: {
      speed: '',
    },
    name: '',
  },
  isError: false,
};

export const reducerWeather = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        err: action.err,
        isFetching: false,
        isError: true,
      };
    case RESET_ERROR:
      return {
        ...state,
        isError: false,
      };
    default:
      return state;
  }
};
