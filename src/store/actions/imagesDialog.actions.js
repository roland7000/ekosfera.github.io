import { SET_IMAGES_DIALOG_VISIBLE } from '../../constants';

export const setImagesDialogVisible = params => dispatch => {
  dispatch({
    type: SET_IMAGES_DIALOG_VISIBLE,
    payload: params
  })
}
