export const RECEIVE_ALL_CARS = 'RECEIVE_ALL_CARS';

import { fetchCars } from '../util/api_util';

export const receiveAllCars = cars => ({
  type: RECEIVE_ALL_CARS,
  cars
});

export const receiveCars = (page, min, max) => dispatch => (
  fetchCars(page, min, max)
    .then(res => res.json())
    .then(response => dispatch(receiveAllCars(response)))
);