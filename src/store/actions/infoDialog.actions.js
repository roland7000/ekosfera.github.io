
import {
  SET_INFO_DIALOG_OPEN,
  SET_INFO_DIALOG_CLOSED,
  SET_INFO_DIALOG_CONTENT,
  SET_INFO_DIALOG_COORDINATES
} from '../../constants';

export const setInfoDialogOpen = () => dispatch =>
  dispatch({
    type: SET_INFO_DIALOG_OPEN
  })

export const setInfoDialogClosed = () => dispatch =>
  dispatch({
    type: SET_INFO_DIALOG_CLOSED
  })

export const setInfoDialogContent = content => dispatch => {
  dispatch({
    type: SET_INFO_DIALOG_CONTENT,
    payload: content
  })
}

export const setInfoDialogCoordinates = coordinates => dispatch =>
  dispatch({
    type: SET_INFO_DIALOG_COORDINATES,
    payload: coordinates
  })
