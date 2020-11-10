import { SET_ACTIVE_FILTER } from '../../constants';

export const setActiveFilter = filterType => dispatch => {
  dispatch({
    type: SET_ACTIVE_FILTER,
    payload: filterType
  })
}
