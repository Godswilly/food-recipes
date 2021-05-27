import React from 'react';
import PropTypes from 'prop-types';
import { MealDetails, MainWrap, ImageWrap } from '../assets/styles/index.css';

const MealWrap = ({ food }) => (
  <div className="showMeal">
    <div className="text-center">
      <MainWrap key={food.idMeal}>
        <ImageWrap>
          <img
            className="w-100 mb-2 food-img"
            src={food.strMealThumb}
            alt="Meal Cover"
            title="click on image to view details"
          />
        </ImageWrap>
        <MealDetails>
          <h5 className="card-title name">
            {food.strMeal}
          </h5>
        </MealDetails>
      </MainWrap>
    </div>
  </div>
);

MealWrap.propTypes = {
  food: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};

export default MealWrap;
