import { combineReducers } from 'redux';
import recipes from './recipes';
import filter from './filter';

const rootReducer = combineReducers({
  recipes,
  filter,
});

export default rootReducer;
