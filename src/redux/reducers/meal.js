import { GET_MEALS, GET_MEAL, CHANGE_CATEGORIES } from '../actions/actionTypes';

const initialState = {
  foods: [],
  food: {},
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        foods: action.payload,
        loading: false,
      };
    case GET_MEAL:
      return {
        ...state,
        food: action.payload,
        loading: false,
      };
    case CHANGE_CATEGORIES:
      return {
        ...state,
        foods: action.payload.data.meals,
        loading: false,
      };
    default:
      return state;
  }
}
