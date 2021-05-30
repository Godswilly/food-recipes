import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => (
  <div className="recipe-page">
    <div className="cards">
      <img className="meal-img" src={recipe.strMealThumb} alt="meals" />
      <p className="meal-name">{recipe.strMeal}</p>
    </div>
  </div>
);

Recipe.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default Recipe;
