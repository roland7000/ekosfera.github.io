import {
  SET_DETAILS_DIALOG_OPEN,
  SET_DETAILS_DIALOG_CLOSED,
  SET_DETAILS_DIALOG_CONTENT
} from '../../constants';

export const setDetailsDialogOpen = () => dispatch => {
  dispatch({
    type: SET_DETAILS_DIALOG_OPEN
  })
}

export const setDetailsDialogClosed = () => dispatch =>
  dispatch({
    type: SET_DETAILS_DIALOG_CLOSED
  })

export const setDetailsDialogContent = content => dispatch => {
  dispatch({
    type: SET_DETAILS_DIALOG_CONTENT,
    payload: content
  })
}
