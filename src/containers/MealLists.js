import React from 'react';
import Axios from 'axios';
import MealCard from '../components/MealCard';

export default class MealLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: [],
    };
  }

  componentDidMount() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    Axios.get(url).then((res) => {
      this.setState({ meal: res.data.meals });
    });
  }

  showMeals = () => {
    const meals = this.state.recipe.map((meal) => {
      return <MealCard img={meal.strMealThumb} meal={meal.strMeal} />;
    });

    return meals;
  };

  render() {
    return <div>{this.showMeals()}</div>;
  }
}
