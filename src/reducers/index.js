import { combineReducers } from 'redux';
import recipe from './recipes';
import filter from './filter';

const rootReducer = combineReducers({
  recipe,
  filter,
});

export default rootReducer;
