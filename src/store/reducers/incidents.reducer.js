import {
  GET_INCIDENTS_LOADING,
  GET_INCIDENTS_COMPLETE,
  GET_INCIDENTS_ERROR,
  SET_INCIDENTS_LOCATION_LOADING,
  SET_INCIDENTS_LOCATION_COMPLETE,
  SET_INCIDENTS_LOCATION_ERROR,
} from '../../constants';

const initialState = {
  data: null,
  locationData: [],
  locationLoading: false,
  error: null,
  locationError: null
}

function incidentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INCIDENTS_LOCATION_LOADING:
      return {
        ...state,
        locationLoading: true
      };
    case SET_INCIDENTS_LOCATION_COMPLETE:
      return {
        ...state,
        locationData: action.payload
      };
    case SET_INCIDENTS_LOCATION_ERROR:
      return {
        ...state,
        locationError: action.payload
      };
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
