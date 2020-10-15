import {
  SET_DETAILS_DIALOG_OPEN,
  SET_DETAILS_DIALOG_CLOSED,
  SET_DETAILS_DIALOG_CONTENT
} from '../../constants';

const initialState = {
  open: false,
  content: null,
  coordinates: null
}

function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DETAILS_DIALOG_OPEN:
      return {
        ...state,
        open: true
      };
    case SET_DETAILS_DIALOG_CLOSED:
      return {
        ...state,
        content: null,
        open: false
      };
    case SET_DETAILS_DIALOG_CONTENT:
      console.log('SET_DETAILS_DIALOG_CONTENT', action)
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
}

export default dialogReducer;
