import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducerWeather } from '../features/weather';

const rootReducer = combineReducers({ reducerWeather });

export const store = createStore(rootReducer, applyMiddleware(thunk));
