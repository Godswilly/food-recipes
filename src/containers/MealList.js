import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MealCard from '../components/MealCard';
import FilterMeals from '../components/FilterMeals';
import { getMeal } from '../redux/actions/index';
import Home from '../components/Home';

class MealList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
      category: [],
    };
  }

  componentDidMount() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/';
    axios.get(`${URL}/categories.php`).then((res) => {
      this.setState({ category: res.data.categories });
    });
    const { foods } = this.props;
    this.getdata(foods);
  }

  handleChange = (e) => {
    this.setState({ details: [] });
    const { getMeal } = this.props;
    getMeal(e.target.value);
    this.getdata(e.target.value);
  };

  getdata = (foods) => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/';
    axios.get(`${URL}/filter.php?c=${foods}`).then((res) => {
      this.setState({ details: res.data.meals });
    });
  }

  showMeals = () => {
    let meals = [];
    const { foods } = this.props;
    if (foods !== 'all') {
      const { details } = this.state;
      meals = details.map((meal) => (
        <MealCard
          id={meal.idMeal}
          key={meal.idMeal}
          img={meal.strMealThumb}
          meal={meal.strMeal}
          gtdetails={this.gtdetails}
        />
      ));
    } else {
      return <Home />;
    }

    return meals;
  };

  render() {
    const { category } = this.state;
    return (
      <div>
        <FilterMeals
          handleChange={this.handleChange}
          category={category}
        />
        <div className="list">{this.showMeals()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foods: state.foods,
});

const mapDispatchToProps = (dispatch) => ({
  getMeal: (cat) => {
    dispatch(getMeal(cat));
  },
});

MealList.propTypes = {
  getMeal: PropTypes.func.isRequired,
  foods: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
