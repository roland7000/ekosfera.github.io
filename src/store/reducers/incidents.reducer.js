import {
  GET_INCIDENTS_LOADING,
  GET_INCIDENTS_COMPLETE,
  GET_INCIDENTS_ERROR
} from '../../constants';

const initialState = {
  data: null,
  loading: false,
  error: null
}

function incidentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INCIDENTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_INCIDENTS_COMPLETE:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case GET_INCIDENTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default incidentsReducer;
