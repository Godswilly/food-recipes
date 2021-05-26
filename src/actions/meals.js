import { GET_MEALS, GET_DETAILS } from './index';

export const getMeals = (foods) => ({
  type: GET_MEALS,
  payload: foods,
});

export const getDetails = (food) => ({
  type: GET_DETAILS,
  payload: food,
});
