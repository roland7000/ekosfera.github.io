import {
  SET_DETAILS_DIALOG_OPEN,
  SET_DETAILS_DIALOG_CLOSED,
  SET_DETAILS_DIALOG_CONTENT
} from '../../constants';

const initialState = {
  open: false,
  content: {
    locationData: null,
    attachments: null,
    actions: null,
    damage: {
      measure: null,
      value: null
    },
    status: null,
    tags: null,
    id: null
  },
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
        ...initialState
      };
    case SET_DETAILS_DIALOG_CONTENT:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
}

export default dialogReducer;
