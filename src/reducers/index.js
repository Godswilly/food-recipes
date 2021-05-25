import { createStore } from 'redux';
import rootReducer from './rootReducer';

export const initialState = {
  recipes: [],
  recipe: {},
  loading: true,
};

const store = createStore(rootReducer, initialState);

export default store;
