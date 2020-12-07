import API from '../../utils/API';

import {
  URL_INCIDENTS,
  GET_INCIDENTS_LOADING,
  GET_INCIDENTS_COMPLETE,
  GET_INCIDENTS_ERROR
} from '../../constants';

export const getIncidents = () => dispatch => {
  dispatch({
    type: GET_INCIDENTS_LOADING
  })

  API.get(URL_INCIDENTS, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  })
    .then(response => response && response.data)
    .then(data => dispatch({
      type: GET_INCIDENTS_COMPLETE,
      payload: data
    }))
    .catch(error => dispatch({
      type: GET_INCIDENTS_ERROR,
      payload: error
    }))
}
