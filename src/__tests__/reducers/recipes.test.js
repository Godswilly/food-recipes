import recipes from '../../reducers/recipes';

describe('recipes reducer', () => {
  it('should return the initial state', () => {
    expect(recipes(undefined, {})).toMatchSnapshot();
  });

  it('should handle Get RECIPES', () => {
    expect(recipes([], {
      type: 'GET RECIPES',
    })).toMatchSnapshot();
  });

  it('should handle GET RECIPE', () => {
    expect(recipes({}, {
      type: 'GET RECIPE',
    })).toMatchSnapshot();
  });

  it('should handle RESET DATA', () => {
    expect(recipes([], {
      type: 'RESET_DATA',
    })).toMatchSnapshot();
  });
});
