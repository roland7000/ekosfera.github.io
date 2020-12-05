import {
  SET_INFO_DIALOG_OPEN,
  SET_INFO_DIALOG_CLOSED,
  SET_INFO_DIALOG_CONTENT,
  SET_INFO_DIALOG_COORDINATES
} from '../../constants';

const initialState = {
  open: false,
  content: null,
  coordinates: null
}

function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO_DIALOG_OPEN:
      return {
        ...state,
        open: true
      };
    case SET_INFO_DIALOG_CLOSED:
      return {
        ...state,
        open: false
      };
    case SET_INFO_DIALOG_CONTENT:
      return {
        ...state,
        content: action.payload
      };
    case SET_INFO_DIALOG_COORDINATES:
      return {
        ...state,
        coordinates: action.payload
      };
    default:
      return state;
  }
}

export default dialogReducer;
