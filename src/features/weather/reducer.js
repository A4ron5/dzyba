import { 
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS, 
  FETCH_WEATHER_FAILURE
} from './action'

export const reducerWeather = (state = { isFetching: false, data: {}, err: '' }, action) => {
  switch(action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      }
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        err: action.err,
        isFetching: false
      }
    default: 
      return state;
  }
}