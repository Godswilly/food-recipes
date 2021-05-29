import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RecipesList from '../containers/RecipesList';
import RecipeItem from './RecipeItem';

function App() {
  return (
    <BrowserRouter>
      <div className="app panel-bg">
        <Route exact path="/" component={RecipesList} />
        <Route path="/recipe/:id" component={RecipeItem} />
      </div>
    </BrowserRouter>
  );
}

export default App;
