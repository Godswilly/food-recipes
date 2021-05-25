import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MealCard = (props) => {
  const {
    meal, image, id,
  } = props;

  return (
    <div>
      <Link to={`/meal/${id}/${meal}`}>
        <div data-testid="div" className="mealcard">
          <img data-testid="image" alt={meal} src={image} />
          <h3 data-testid="meal">
            {' '}
            {meal}
            {' '}
          </h3>
        </div>
      </Link>
    </div>
  );
};

MealCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  meal: PropTypes.string.isRequired,
};

export default MealCard;
