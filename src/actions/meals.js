import { GET_MEALS, GET_DETAILS } from './index';

export const getMeals = (meals) => ({
  type: GET_MEALS,
  payload: meals,
});

export const getDetails = (meal) => ({
  type: GET_DETAILS,
  payload: meal,
});
