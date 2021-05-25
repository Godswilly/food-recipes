import { GET_MEALS, GET_MEAL, CHANGE_CATEGORIES } from '../actions/index';

const initialState = {
  meals: [],
  meal: {},
  loading: true,
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        meals: action.payload,
        loading: false,
      };
    case GET_MEAL:
      return {
        ...state,
        meal: action.payload,
        loading: false,
      };
    case CHANGE_CATEGORIES:
      return {
        ...state,
        meals: action.payload.data.meals,
        loading: false,
      };
    default:
      return state;
  }
};

export default mealReducer;
