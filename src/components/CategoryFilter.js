import React, { useState } from 'react';
import PropTypes from 'prop-types';
import categories from '../redux/actions/Categories';

const CategoryFilter = ({ handleChange }) => {
  const [categoryValue, setCategoryValue] = useState('All');
  return (
    <div>
      <select
        name="category"
        onChange={(e) => {
          const val = e.target.value;
          setCategoryValue(val);
          handleChange(val);
        }}
      >
        { categories.map((category) => (
          <option key={category} value={category}>
            { category }
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
