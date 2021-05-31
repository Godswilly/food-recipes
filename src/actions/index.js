import axios from 'axios';

const GET_RECIPES = () => (dispatch) => {
  const allCategories = ['Beef', 'Chicken', 'Dessert', 'Vegan', 'Vegetarian'];

  const allCategoriesResult = [];

  // eslint-disable-next-line array-callback-return
  allCategories.map((category) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => {
        allCategoriesResult.push(...res.data.meals);
      }).then(() => {
        dispatch({
          type: 'GET RECIPES',
          payload: allCategoriesResult,
        });
      });
  });
};

const GET_RECIPE = (recipeId) => async (dispatch) => {
  const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
  dispatch({
    type: 'GET RECIPE',
    payload: data.data.meals[0],
  });
};

const FILTER_RECIPELIST = (category) => async (dispatch) => {
  const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  dispatch({
    type: 'FILTER CATEGORY',
    payload: data,
  });
};

const CLEAR_DATA = () => (dispatch) => {
  dispatch({
    type: 'RESET_DATA',
  });
};

export {
  GET_RECIPES, FILTER_RECIPELIST, GET_RECIPE, CLEAR_DATA,
};
