import { combineReducers } from 'redux';
import { firstNamedReducer, secondNamedReducer } from './books';

const reducers = combineReducers({
  firstNamedReducer, secondNamedReducer,
});

export default reducers;
