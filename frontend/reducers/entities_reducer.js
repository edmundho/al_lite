import { combineReducers } from 'redux';
import carsReducer from './cars_reducer';

const entitiesReducer = combineReducers({
  cars: carsReducer,
});

export default entitiesReducer;