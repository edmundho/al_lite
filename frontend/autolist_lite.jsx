import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/store';

import { fetchCars } from './util/api_util';
import { receiveAllCars, receiveCars } from './actions/cars_actions';
import { postVehicle } from './util/vehicle_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  
  const store = configureStore();
  
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  
  window.postVehicle = postVehicle;
  // window.fetchCars = fetchCars;
  // window.receiveAllCars = receiveAllCars;
  // window.receiveCars = receiveCars;

  ReactDOM.render(<App store={store} />, rootEl);
});