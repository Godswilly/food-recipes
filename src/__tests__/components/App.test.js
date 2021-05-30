import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../components/App';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => shallow(<App />);

describe('App component', () => {
  let app;

  beforeEach(() => {
    app = setup();
  });

  it('Should render', () => {
    const element = app.find('.app');
    expect(element.length).toEqual(1);
  });
});
