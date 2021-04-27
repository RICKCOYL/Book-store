import { CHANGE_FILTER } from '../Actions';

const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, category: action.filter };
    default:
      return state;
  }
};

export default filter;
