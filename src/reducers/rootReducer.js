import { combineReducers } from 'redux';
import { mealReducer, detailReducer } from './meals';

const rootReducer = combineReducers({
  meals: mealReducer,
  details: detailReducer,
});

export default rootReducer;
