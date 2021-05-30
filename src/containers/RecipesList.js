import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GET_RECIPES, FILTER_RECIPELIST } from '../actions/index';
import Recipe from '../components/Recipe';
import CategoryFilter from '../components/CategoryFilter';
import '../assets/styles/RecipesList.scss';

const RecipesList = ({
  recipes, getRecipes, filterRecipeList,
}) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const handleFilterChange = (value) => (value.toLowerCase() === 'all' ? getRecipes() : filterRecipeList(value));

  return recipes.length === 0 ? <div>Loading...</div> : (
    <div className="recipe-list">
      <div className="header">
        <div className="header-title">Meal Recipe Catalogue</div>
        <div className="category-container">
          <CategoryFilter handleChange={handleFilterChange} />
        </div>
      </div>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <Link key={recipe.idMeal} to={{ pathname: `/recipe/${recipe.idMeal}`, state: recipe }}>
            <Recipe key={recipe.idMeal} recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRecipes: PropTypes.func.isRequired,
  filterRecipeList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.food_recipes,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(GET_RECIPES()),
  filterRecipeList: (category) => dispatch(FILTER_RECIPELIST(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
