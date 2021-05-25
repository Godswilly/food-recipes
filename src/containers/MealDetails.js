import React from 'react';

const MealDetails = (props) => {
  const meal = props.details[0];
  return (
    <div>
      <button onClick={props.colsedetails} type="button">
        X
      </button>
      <h3> {meal.strMeal} </h3>
      <p>
        <span>Meal Area :</span>
        <span> {meal.strArea} </span>{' '}
      </p>
      <h4>Ingredients</h4>
      <ul>
        {props.ingredient.map((ing) => (
          <li data-testid={ing} key={ing}>{ing}</li>
        ))}
      </ul>
      <h4>How to make it:</h4>
      <p data-testid="mealinstr">{meal.strInstructions}</p>
    </div>
  );
};

export default MealDetails;
