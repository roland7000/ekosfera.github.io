import {
  SET_NEW_REPORT_DIALOG_OPEN,
  SET_NEW_REPORT_DIALOG_CLOSED
} from '../../constants';

const initialState = {
  open: false,
}

function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_REPORT_DIALOG_OPEN:
      return {
        ...state,
        open: true
      };
    case SET_NEW_REPORT_DIALOG_CLOSED:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
}

export default dialogReducer;
