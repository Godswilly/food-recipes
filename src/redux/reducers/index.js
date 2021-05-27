import { combineReducers } from 'redux';
import food from './meal';
import filter from './filter';

export default combineReducers({ food, filter });
