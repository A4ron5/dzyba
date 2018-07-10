import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Weather } from './features/weather';

export const Main = props => (
  <Provider store={store}>
    <Weather />
  </Provider>
);
