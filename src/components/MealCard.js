import React from 'react';

const MealCard = (props) => {
  return (
    <div>
      <img src={props.img} />
      <h1> {props.meal} </h1>
    </div>
  );
};
export default MealCard;
