import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GETMEALS, FILTERMEALS, changeFilter } from '../redux/actions/index';
import MealWrap from './MealWrap';
import CategoryFilter from '../components/CategoryFilter';

const MealList = ({
  getMeals, foods, changeCategories, changeFilter,
}) => {
  useEffect(() => {
    getMeals();
  }, [getMeals]);

  const handleFilterChange = (value) => {
    if (value === 'All') {
      getMeals();
    } else {
      changeFilter(value);
      changeCategories(value);
    }
  };

  return foods.length === 0 ? <h1>Loading......</h1> : (
    <FilterWrap>
      Filter by Catorgory
      <CategoryFilter handleChange={handleFilterChange} />
      <MealWrap>
        { foods.map((food) => (
          <Link key={food.idMeal} to={{ pathname: `/${food.idMeal}`, state: food }} className="cot">
            <MealWrap key={food.idMeal} food={food} />
          </Link>
        ))}
      </MealWrap>
    </FilterWrap>
  );
};

MealList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMeals: PropTypes.func.isRequired,
  changeCategories: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  foods: state.food.foods,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  getMeals: () => dispatch(GETMEALS()),
  changeCategories: category => dispatch(FILTERMEALS(category)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
