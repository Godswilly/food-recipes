import { GET_MEALS, GET_DETAILS } from '../actions/index';

export const mealReducer = (state = 'all', action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        meals: action.payload,
      };

    default:
      return state;
  }
};

export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        meal: action.payload,
      };

    default:
    return state;
  }
};
