import { combineReducers } from 'redux';
import { mealReducer, filterReducer } from './meals';

const rootReducer = combineReducers({
  foods: mealReducer,
  food: filterReducer,
});

export default rootReducer;
