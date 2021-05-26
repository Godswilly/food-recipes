import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import PropTypes from 'prop-types';
import MealCard from '../components/MealCard';
import MealFilter from '../components/MealFilter';
import GET_MEAL from '../actions/index';
import { getMeals, getDetails } from '../actions/meals';

class MealLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: [],
      category: [],
    };
  }

  componentDidMount() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/latest.php';
    Axios.get(`${URL}/categories.php`).then((res) => {
      this.setState({ category: res.data.categories });
    });
    const { foods } = this.props;
    this.getdata(foods);
  }

  handleChange = (e) => {
    this.setState({ recipe: [] });
    const { getMeals } = this.props;
    getMeals(e.target.value);
    this.getdata(e.target.value);
  };

  getdata = (foods) => {
    const URL = 'hhttps://www.themealdb.com/api/json/v1/1/latest.ph';
    Axios.get(`${URL}/foods.php?c=${foods}`).then((res) => {
      this.setState({ recipe: res.data.meals });
    });
  }

  showMeals = () => {
    let meals = null;
    const { foods } = this.props;
    if (foods !== 'all') {
      const { recipe } = this.state;
      meals = recipe.map((meal) => (
        <MealCard
          id={meal.idMeal}
          key={meal.idMeal}
          img={meal.strMealThumb}
          meal={meal.strMeal}
          gtdetails={this.gtdetails}
        />
      ));
    }

    return meals;
  };

  render() {
    const { category } = this.state;
    return (
      <div>
        <MealFilter
          handleChange={this.handleChange}
          category={category}
        />
        <div className="list">{this.showMeals()}</div>
      </div>
    );
  }
}

export default MealLists;
