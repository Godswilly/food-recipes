import { combineReducers } from 'redux';

const GET_MEALS = 'GET_MEALS';
const GET_DETAILS = 'GET_DETAILS';

export const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        foods: action.payload,
      };

    default:
      return state;
  }
};

export const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  foods: filterReducer,
  details: detailsReducer,
});

export default rootReducer;
