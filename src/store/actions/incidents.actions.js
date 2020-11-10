import API from '../../utils/API';
import Geocode from '../../utils/geocode';

import {
  URL_INCIDENTS,
  GET_INCIDENTS_LOADING,
  GET_INCIDENTS_COMPLETE,
  GET_INCIDENTS_ERROR,
  SET_INCIDENTS_LOCATION_LOADING,
  SET_INCIDENTS_LOCATION_COMPLETE,
  SET_INCIDENTS_LOCATION_ERROR
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

export const setIncidentLocation = (latlon, id) => dispatch => {
  const [lat, lng] = latlon.split(', ');
  if (!latlon || !lat || !lng) return

  dispatch({
    type: SET_INCIDENTS_LOCATION_LOADING,
    payload: ''
  })

  Geocode.fromLatLng(parseInt(lat).toFixed(7), parseInt(lng).toFixed(7)).then(
    response => dispatch({
      type: SET_INCIDENTS_LOCATION_COMPLETE,
      payload: {
        location: response.results[0].formatted_address,
        id
      }
    }),
    () => dispatch({
      type: SET_INCIDENTS_LOCATION_ERROR,
      payload: id
    })
  );
}
