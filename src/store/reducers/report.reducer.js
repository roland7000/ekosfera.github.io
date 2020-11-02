import {
  FORM_SET_USER_NAME,
  FORM_SET_USER_EMAIL,
  FORM_SET_MAP_CENTER,
  FORM_SET_TAGS,
  FORM_SET_IMAGES,
  FORM_GET_SUBMIT_LOADING,
  FORM_GET_SUBMIT_COMPLETE,
  FORM_GET_SUBMIT_ERROR,
  FORM_SET_IMAGE_URL_LOADING,
  FORM_SET_IMAGE_URL_COMPLETE,
  FORM_SET_IMAGE_URL_ERROR,
  FORM_SET_NAME_ERROR,
  FORM_SET_EMAIL_ERROR,
  SET_NEW_REPORT_DIALOG_CLOSED,
  FORM_DELETE_IMAGE_URL,
  FORM_SET_IMAGES_URLSS,
  FORM_SET_IMAGES_URLS_LOADING,
  FORM_SET_IMAGES_URLS_COMPLETE,
  FORM_SET_IMAGES_URLS_ERROR
} from '../../constants';

const clearErrors = {
  formSubmitLoading: false,
  formImagesLoading: false,
  formImageLoading: false,
  formSubmitError: null,
  formImagesError: null,
  formImageError: null,
  formNameError: null,
  formEmailError: null
}

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

const initialState = {
  submitData: {
    locationData: [],
    reporter: {
      fullName: null,
      email: null
    },
    attachments: [],
    images: [],
    date: year + "-" + month + "-" + day,
    tags: [],
  },
  ...clearErrors
}

function reportReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_SET_USER_NAME:
      return {
        ...state,
        formNameError: null,
        submitData: {
          ...state.submitData,
          reporter: {
            ...state.submitData.reporter,
            fullName: action.payload
          },
        },
      };
    case FORM_SET_NAME_ERROR:
      return {
        ...state,
        formNameError: action.payload
      };
    case FORM_SET_USER_EMAIL:
      return {
        ...state,
        formEmailError: null,
        submitData: {
          ...state.submitData,
          reporter: {
            ...state.submitData.reporter,
            email: action.payload
          },
        },
      };
    case FORM_SET_EMAIL_ERROR:
      return {
        ...state,
        formEmailError: action.payload
      };
    case FORM_SET_MAP_CENTER:
      return {
        ...state,
        submitData: {
          ...state.submitData,
          locationData: action.payload
        },
      };
    case FORM_SET_TAGS:
      return {
        ...state,
        submitData: {
          ...state.submitData,
          tags: action.payload
        },
      };
    case FORM_SET_IMAGES:
      return {
        ...state,
        submitData: {
          ...state.submitData,
          images: action.payload
        },
      };
    case FORM_SET_IMAGES_URLSS:
      return {
        ...state,
        submitData: {
          ...state.submitData,
          attachments: action.payload
        },
      };
    case FORM_SET_IMAGES_URLS_LOADING:
      return {
        ...state,
        formImagesLoading: true
      };
    case FORM_SET_IMAGE_URL_LOADING:
      return {
        ...state,
        formImageLoading: true
      };
    case FORM_SET_IMAGES_URLS_LOADING:
      return {
        ...state,
        formImagesLoading: true
      };
    case FORM_SET_IMAGE_URL_COMPLETE:
      return {
        ...state,
        submitData: {
          ...state.submitData,
          attachments: [
            ...state.submitData.attachments,
            action.payload
          ]
        },
        formImagesLoading: false,
        ...clearErrors
      };
    case FORM_SET_IMAGES_URLS_COMPLETE:
      return {
        ...state,
        submitData: {
          ...state.submitData,
          attachments: [
            ...state.submitData.attachments,
            ...action.payload
          ]
        },
        formImagesLoading: false,
        ...clearErrors
      };
    case FORM_DELETE_IMAGE_URL:
      if (action.payload) return state;
      const imageIndex = state.submitData.attachments.indexOf(action.payload)
      if (imageIndex === -1) return state;

      const start = state.submitData.attachments.slice(0, imageIndex)
      const end = state.submitData.attachments.slice(imageIndex + 1)

      return {
        ...state,
        submitData: {
          attachments: [
            ...start,
            ...end
          ]
        },
        formImagesLoading: false,
        ...clearErrors
      };
    case FORM_SET_IMAGE_URL_ERROR:
      return {
        ...state,
        formImageError: action.payload,
        formImageLoading: false
      };
    case FORM_SET_IMAGES_URLS_ERROR:
      return {
        ...state,
        formImagesError: action.payload,
        formImagesLoading: false
      };
    case FORM_GET_SUBMIT_LOADING:
      return {
        ...state,
        formSubmitLoading: true
      };
    case FORM_GET_SUBMIT_COMPLETE:
      return {
        ...state,
        data: action.payload,
        formSubmitLoading: false,
        ...clearErrors
      };
    case FORM_GET_SUBMIT_ERROR:
      return {
        ...state,
        formSubmitError: action.payload,
        formSubmitLoading: false
      };
    case SET_NEW_REPORT_DIALOG_CLOSED:
      return {
        ...initialState
      };
    default:
      return state;
  }
}

export default reportReducer;
