import React from 'react';
import '../assets/styles/index.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import MealList from '../containers/MealList';
import MealDetails from '../containers/MealDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MealList} />
          <Route exact path="/meal/:id/:name" component={MealDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
