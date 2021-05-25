import React from 'react';
import Axios from 'axios';
import MealCard from '../components/MealCard';
import MealFilter from '../components/MealFilter';
import GET_MEAL from '../actions/index';

class MealLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: [],
      category: [],
    };
  }

  componentDidMount() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/latest.php';
    Axios.get(`${URL}/categories.php`).then((res) => {
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

  getdata = (filter) => {
    const URL = 'hhttps://www.themealdb.com/api/json/v1/1/latest.ph';
    Axios.get(`${URL}/filter.php?c=${filter}`).then((res) => {
      this.setState({ meal: res.data.meals });
    });
  }

  showMeals = () => {
    let meals = null;
    const { filter } = this.props;
    if (filter !== 'all') {
      const { meal } = this.state;
      meals = meal.map((meal) => (
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
