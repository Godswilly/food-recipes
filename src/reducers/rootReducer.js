import { combineReducers } from 'redux';
import { mealReducer, filterReducer } from './meals';

const rootReducer = combineReducers({
  meal: mealReducer,
  filter: filterReducer,
});

export default rootReducer;
