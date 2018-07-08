import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Weather } from './features/weather'

export const Main = (props) => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  )  
}