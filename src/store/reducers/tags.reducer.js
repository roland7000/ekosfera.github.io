import {
  GET_TAGS_LOADING,
  GET_TAGS_COMPLETE,
  GET_TAGS_ERROR,
} from '../../constants';

const initialState = {
  data: null,
  loading: false,
  error: null
}

function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TAGS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TAGS_COMPLETE:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case GET_TAGS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default tagsReducer;
