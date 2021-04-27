import { combineReducers } from 'redux';
import books from './books';
import catfilter from './filter';

const reducers = combineReducers({
  books,
  catfilter,
});

export default reducers;
