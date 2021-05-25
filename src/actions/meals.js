import { GET_MEALS, GET_MEAL } from './index';

export const getMeal = () => ({
  type: GET_MEALS,
  payload: meal,
});

export const getMealDetails = () => ({
  type: GET_MEAL,
  payload: meal,
});
