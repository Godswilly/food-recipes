export const mealReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MEAL':
      return [
        ...state,
        {
          meal: action.payload.meal,
        },
      ];

    default:
      return state;
  }
};

export const detailReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MEAL_DETAILS':
      return [
        ...state,
        {
          ...action.payload.meal,
        },
      ];

    default:
      return state;
  }
};
