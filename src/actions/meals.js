import {  GET_MEAL, GET_MEAL_DETAILS } from './index';

export const getMeal = () => ({
  type: GET_MEAL,
  payload: meal,
});

export const getMealDetails = () => ({
  type: GET_MEAL_DETAILS,
  payload: meal,
});
