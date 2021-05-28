import React from 'react';
import PropTypes from 'prop-types';

const FilterMeals = (props) => {
  const { handleChange, category } = props;
  return (
    <div className="filter-form">
      <h3>Chose a Category</h3>
      <select className="filter" onChange={handleChange}>
        <option value="all" key="all">
          {' '}

          {' '}
        </option>
        {category.map((cat) => (
          <option data-testid={cat.strCategory} key={cat.strCategory}>{cat.strCategory}</option>
        ))}
      </select>
    </div>
  );
};

FilterMeals.propTypes = {
  handleChange: PropTypes.func.isRequired,
  // eslint-disable-next-line
  category: PropTypes.array.isRequired,
};
export default FilterMeals;
