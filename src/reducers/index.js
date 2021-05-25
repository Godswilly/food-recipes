import { createStore } from 'redux';
import rootReducer from './rootReducer';

export const initialState = {
  meals: [],
  meal: {},
  loading: true,
};

const store = createStore(rootReducer, initialState);

export default store;
