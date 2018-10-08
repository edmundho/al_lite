import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/store';

import { fetchCars } from './util/api_util';
import { receiveAllCars, receiveCars } from './actions/cars_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  
  const store = configureStore();
  
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  
  // window.fetchCars = fetchCars;
  // window.receiveAllCars = receiveAllCars;
  // window.receiveCars = receiveCars;

  ReactDOM.render(<App store={store} />, rootEl);
});