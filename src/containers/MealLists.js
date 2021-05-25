import React from 'react';
import axios from 'axios';
import MealCard from '../components/MealCard';

class MealLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: [],
      category: [],
    };
  }

  componentDidMount() {
    const URL = 'hhttps://www.themealdb.com/api/json/v1/1/latest.php';
    axios.get(`${URL}/categories.php`).then((res) => {
      this.setState({ category: res.data.categories });
    });
    const { filter } = this.props;
    this.getdata(filter);
  }

  handleChange = (e) => {
    this.setState({ meal: [] });
    const { GET_MEAL } = this.props;
    GET_MEAL(e.target.value);
    this.getdata(e.target.value);
  };

  showMeals = () => {
    const { meals } = this.state.meal.map((meal) => {
      return <MealCard img={meal.strMealThumb} meal={meal.strMeal} />;
    });

    return meals;
  };

  render() {
    return <div>{this.showMeals()}</div>;
  }
}

export default MealLists;
