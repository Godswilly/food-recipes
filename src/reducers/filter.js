import { CHANGE_FILTER } from '../actions/index';

const filterReduer = (state = 'ALL', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReduer;
