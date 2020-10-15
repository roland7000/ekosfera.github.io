import {
  SET_NEW_REPORT_DIALOG_OPEN,
  SET_NEW_REPORT_DIALOG_CLOSED
} from '../../constants';

export const setNewReportDialogOpen = () => dispatch =>
  dispatch({
    type: SET_NEW_REPORT_DIALOG_OPEN
  })

export const setNewReportDialogClosed = () => dispatch =>
  dispatch({
    type: SET_NEW_REPORT_DIALOG_CLOSED
  })


