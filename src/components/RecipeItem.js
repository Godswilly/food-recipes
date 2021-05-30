/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_RECIPE, CLEAR_DATA } from '../actions/index';
import '../assets/styles/RecipeItem.scss';

function RecipeItem({
  location, getRecipe, clearData, recipe,
}) {
  useEffect(() => {
    getRecipe(location.state.idMeal);
    return clearData();
  }, [getRecipe, clearData]);

  return Object.entries(recipe).length === 0 ? <div>Loading...</div> : (
    <div className="recipe-item">
      <div className="show-item">
        <img className="meal-img" src={recipe.strMealThumb} alt="" />
        <p className="meal-name">{recipe.strMeal}</p>
      </div>
      <div className="info">
        <h2 className="title">
          Ingredients Used
        </h2>
        <ul className="ingredients">
          <li className="item">{recipe.strIngredient1}</li>
          <li className="item">{recipe.strIngredient2}</li>
          <li className="item">{recipe.strIngredient3}</li>
          <li className="item">{recipe.strIngredient4}</li>
          <li className="item">{recipe.strIngredient5}</li>
          <li className="item">{recipe.strIngredient6}</li>
          <li className="item">{recipe.strIngredient7}</li>
          <li className="item">{recipe.strIngredient8}</li>
        </ul>
        <h2 className="instructions">Instructions</h2>
        <p className="instruction">{recipe.strInstructions}</p>
      </div>
    </div>
  );
}

RecipeItem.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  getRecipe: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => ({
  recipe: state.recipes.food_item,
});

export const mapDispatchToProps = (dispatch) => ({
  getRecipe: (recipeId) => dispatch(GET_RECIPE(recipeId)),
  clearData: () => dispatch(CLEAR_DATA()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem);
