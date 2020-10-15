import API from '../../utils/API';

import {
  URL_INCIDENTS,
  GET_INCIDENTS_LOADING,
  GET_INCIDENTS_COMPLETE,
  GET_INCIDENTS_ERROR
} from '../../constants';

// TODO: remove this after new API comes...
const addRandomeDamageValue = list => list.map(
  (item, index) => ({
    ...item,
    damage: {
      id: index,
      measure: 'arces',
      value: Math.random() * Math.random() * Math.random() * 10000000
    }
  })
)

export const getIncidents = () => dispatch => {
  dispatch({
    type: GET_INCIDENTS_LOADING
  })

  API.get(URL_INCIDENTS)
    .then(response => {
      const data = response && response.data ? addRandomeDamageValue(response.data) : [];
      return data;
    }) // TODO: remove this after new API comes...
    .then(data => dispatch({
      type: GET_INCIDENTS_COMPLETE,
      payload: data
    }))
    .catch(error => dispatch({
      type: GET_INCIDENTS_ERROR,
      payload: error
    }))
}
