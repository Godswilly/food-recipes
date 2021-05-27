import axios from 'axios';
import categories from '../redux/actions/Categories';
import {
  GET_MEALS, GET_MEAL, CHANGE_CATEGORIES, CHANGE_FILTER,
} from './actionTypes';

const GETMEALS = () => dispatch => {
  const result = [];
  // eslint-disable-next-line
  categories.map((category) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => {
        result.push(...res.data.meals);
      })
      .then(() => {
        dispatch({
          type: GET_MEALS,
          payload: result,
        });
      })
      .then((error) => error);
  });
};

const GETMEAL = (id) => async dispatch => {
  await axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => dispatch({
      type: GET_MEAL,
      payload: response.data.meals[0],
    }))
    .then((error) => error);
};

const FILTERMEALS = (category) => async dispatch => {
  const data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  dispatch({
    type: CHANGE_CATEGORIES,
    payload: data,
  });
};

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  GETMEALS, GETMEAL, FILTERMEALS, changeFilter,
};
