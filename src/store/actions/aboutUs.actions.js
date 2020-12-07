import API from '../../utils/API';
import i18n from '../../i18n';

import {
  ABOUT_US_GET_DATA_LOADING,
  ABOUT_US_GET_DATA_COMPLETE,
  ABOUT_US_GET_DATA_ERROR,
  ABOUT_US_DIALOG_TOGGLE,
  URL_ABOUT_US_EN,
  URL_ABOUT_US_UA,
  LANGUAGE_UA,
  LANGUAGE_EN
} from '../../constants';

export const toggleAboutUsDialog = visibility => dispatch =>
  dispatch({
    type: ABOUT_US_DIALOG_TOGGLE,
    payload: visibility
  })

export const getAboutUsData = () => dispatch => {
  const currentLanguage = i18n.language;
  const url = currentLanguage === LANGUAGE_EN ? URL_ABOUT_US_EN : URL_ABOUT_US_UA
    dispatch({
      type: ABOUT_US_GET_DATA_LOADING
    })

  API.get(url, {
    headers: {"Access-Control-Allow-Origin": "*"}
  })
    .then(response => response && response.data && response.data.content)
    .then(data => dispatch({
      type: ABOUT_US_GET_DATA_COMPLETE,
      payload: data
    }))
    .catch(error => dispatch({
      type: ABOUT_US_GET_DATA_ERROR,
      payload: error
    }))
}
