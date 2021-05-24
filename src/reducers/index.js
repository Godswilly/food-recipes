import { createStore } from 'redux';
import rootReducer from './rootReducer';

export const initialState = {
  meal: [
  ],
};

const store = createStore(rootReducer, initialState);

export default store;
