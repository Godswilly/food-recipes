import React from 'react';
import PropTypes from 'prop-types';

const MealFilter = (props) => {
  const { handleChange, category } = props;
  return (
    <div className="filtered">
      <h3>Choose a Category</h3>
      <select className="filter" onChange={handleChange}>
        <option value="All" key="All">
          {' '}
          ---
          {' '}
        </option>
        {category.map((caty) => (
          <option data-testid={caty.strCategory} key={caty.strCategory}>{caty.strCategory}</option>
        ))}
      </select>
    </div>
  );
};

MealFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default MealFilter;
