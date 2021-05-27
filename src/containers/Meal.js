import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GETMEAL } from '../redux/actions/index';

const Meal = ({ getMeal, location, food }) => {
  const result = location.state;
  useEffect(() => {
    getMeal(result.idMeal);
  }, [getMeal, result.idMeal]);

  return Object.entries(result) === undefined ? (
    <div>
      <h1>Loading......</h1>
    </div>
  ) : (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 width-img">
          <img src={result.strMealThumb} alt="" className="food-img" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 width-detail">
          <h1 className="mb-4 text-center">{result.strMeal}</h1>
          <h2>Ingredients</h2>
          <ul className="ingredients">
            <li>
              {food.strIngredient1}
              {' '}
              :
              {' '}
              {food.strMeasure1}
            </li>
            <li>
              {food.strIngredient2}
              {' '}
              :
              {' '}
              {food.strMeasure2}
            </li>
            <li>
              {food.strIngredient3}
              {' '}
              :
              {' '}
              {food.strMeasure3}
            </li>
            <li>
              {food.strIngredient4}
              {' '}
              :
              {' '}
              {food.strMeasure4}
            </li>
            <li>
              {food.strIngredient5}
              {' '}
              :
              {' '}
              {food.strMeasure5}
            </li>
            <li>
              {food.strIngredient6}
              {' '}
              :
              {' '}
              {food.strMeasure6}
            </li>
          </ul>
          <h2 className="instructions">Instructions</h2>
          <p className="instruction text-justify">{food.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

Meal.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  getMeal: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food.food,
});

const mapDispatchToProps = (dispatch) => ({
  getMeal: id => dispatch(GETMEAL(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Meal);
