import React from 'react';

const MealFilter = (props) => {
  return (
    <div>
      <select onChange={props.handlechange}>
        <option value="all" key="all">
          {' '}
          ---{' '}
        </option>
        {props.category.map((cat) => (
          <option key={cat.strCategory}>{cat.strCategory}</option>
        ))}
      </select>
    </div>
  );
};
export default MealFilter;
