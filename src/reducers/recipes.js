const initialState = { food_recipes: [], food_item: {} };

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case 'GET RECIPES':
      return { ...state, food_recipes: action.payload };
    case 'GET RECIPE':
      return { ...state, food_item: action.payload };
    case 'FILTER CATEGORY':
      return { ...state, food_recipes: action.payload.data.meals };
    case 'RESET_DATA':
      return { ...state, food_recipes: [] };
    default:
      return state;
  }
};

export default recipes;
