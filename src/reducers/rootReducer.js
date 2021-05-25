import { combineReducers } from 'redux';
import mealReducer from './meals';
import filterReducer from './filter';

const rootReducer = combineReducers({
  meals: mealReducer,
  meal: filterReducer,
});

export default rootReducer;
