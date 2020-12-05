import { SET_IMAGES_DIALOG_VISIBLE} from '../../constants';

const initialState = {
  visible: false,
}

function imagesDialogReducer (state = initialState, action) {
  switch (action.type) {
    case SET_IMAGES_DIALOG_VISIBLE:
      return {
        visible: action.payload.visible,
        index: action.payload.index
      };
    default:
      return state;
  }
}

export default imagesDialogReducer;