import i18n from '../../i18n';

import {
  ABOUT_US_GET_DATA_LOADING,
  ABOUT_US_GET_DATA_COMPLETE,
  ABOUT_US_GET_DATA_ERROR,
  ABOUT_US_DIALOG_TOGGLE
} from '../../constants';

const initialState = {
  data: {
    en: null,
    ua: null
  },
  loading: false,
  isOpen: false,
  error: null
}

function aboutUsReducer (state = initialState, action) {
  const language = i18n.language;

  switch (action.type) {
    case ABOUT_US_GET_DATA_LOADING:
      return {
        ...state,
        loading: true
      };
    case ABOUT_US_GET_DATA_COMPLETE:
      return {
        ...state,
        data: {
          ...state.data,
          [language]: action.payload,
        },
        loading: false
      };
    case ABOUT_US_GET_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ABOUT_US_DIALOG_TOGGLE:
      return {
        ...state,
        isOpen: action.payload
      };
    default:
      return state;
  }
}

export default aboutUsReducer;
