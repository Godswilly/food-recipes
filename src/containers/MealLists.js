import React from 'react';
import Axios from 'axios';

export default class MealLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: {},
    };
  }

  componentDidMount() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    Axios.get(url).then((res) => {
      this.setState({ meal: res.data });
    });
  }

  render() {
    return <div> hello world</div>;
  }
}
