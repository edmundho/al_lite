import { RECEIVE_ALL_CARS } from '../actions/cars_actions';
import merge from 'lodash/merge';

const carsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_CARS:
      return action.cars;
    default:
      return state;
  }
};

export default carsReducer;