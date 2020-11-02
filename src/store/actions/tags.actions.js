import API from '../../utils/API';

import {
  GET_TAGS_LOADING,
  GET_TAGS_COMPLETE,
  GET_TAGS_ERROR,
  URL_TAGS
} from '../../constants';

export const getTags = () => dispatch => {
  dispatch({
    type: GET_TAGS_LOADING
  })

  API.get(URL_TAGS)
    .then(response => response.data)
    .then(data => dispatch({
      type: GET_TAGS_COMPLETE,
      payload: data
    }))
    .catch(error => dispatch({
      type: GET_TAGS_ERROR,
      payload: error
    }))
}
