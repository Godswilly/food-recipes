import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Recipe from '../../components/Recipe';

Enzyme.configure({ adapter: new Adapter() });

describe('Recipe Component', () => {
  const recipe = { strMealThumb: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg', strMeal: 'Beef and Mustard Pie' };

  it('should render', () => {
    const component = shallow(
      <Recipe recipe={recipe} />,
    );
    const element = component.find('.recipe-page');
    expect(element.length).toBe(1);

    const img = component.find('.meal-img');
    expect(img.props().src).toEqual(recipe.strMealThumb);

    const p = component.find('.meal-name');
    expect(p.text()).toEqual(recipe.strMeal);
  });
});
