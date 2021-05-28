// import { GET_MEALS, GET_DETAILS } from './index';

// export const getMeals = (foods) => ({
//   type: GET_MEALS,
//   payload: foods,
// });

// export const getDetails = (food) => ({
//   type: GET_DETAILS,
//   payload: food,
// });

// export const getMeal = (data) => ({
//   type: 'GET_MEALS',
//   payload: data,
// });

// export const getDetails = (detials) => (
//   {
//     type: 'GET_DETAILS',
//     payload: detials,
//   });

//   import ActionsType from '../components/actionType';

export const getMeal = (foods) => ({
  type: 'GET_MEALS',
  payload: foods,
});

export const getDetails = (details) => ({
  type: 'GET_DETAILS',
  payload: details,
});
