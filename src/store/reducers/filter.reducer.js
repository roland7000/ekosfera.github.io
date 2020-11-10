import { SET_ACTIVE_FILTER, FILTER_ALL} from '../../constants';

const initialState = {
  activeFilterType: FILTER_ALL,
}

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_FILTER:
      return {
        activeFilterType: action.payload
      };
    default:
      return state;
  }
}

export default filterReducer;