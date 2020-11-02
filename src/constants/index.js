export const GOOGLE_MAPS_API = process.env.REACT_APP_GOOGLE_KEY;
export const DATA_URL = 'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10';
export const BASE_URL = ' https://ekosphera.work';
export const URL_INCIDENTS = '/incidents';
export const URL_TAGS = '/descriptor-tags';
export const URL_POST_PHOTOS = '/upload';
export const URL_POST_REPORT = '/content-manager/explorer/application::incident.incident';
export const MAP_DEFAULT_CENTER = { lat: 48.148319, lng: 24.278928 };
export const MAP_DEFAULT_ZOOM = 10;
export const DOCUMENTS_EXTENSIONS_LIST = ['.pdf', '.xls', '.xlsx', '.doc', '.docx', 'csv', '.txt', '.odt', '.ods', '.ptt', '.pttx'];

// Action Types
export const SET_DETAILS_DIALOG_OPEN = 'SET_DETAILS_DIALOG_OPEN';
export const SET_DETAILS_DIALOG_CLOSED = 'SET_DETAILS_DIALOG_CLOSED';
export const SET_DETAILS_DIALOG_CONTENT = 'SET_DETAILS_DIALOG_CONTENT';

export const SET_NEW_REPORT_DIALOG_OPEN = 'SET_NEW_REPORT_DIALOG_OPEN';
export const SET_NEW_REPORT_DIALOG_CLOSED = 'SET_NEW_REPORT_DIALOG_CLOSED';

export const SET_INFO_DIALOG_OPEN = 'SET_INFO_DIALOG_OPEN';
export const SET_INFO_DIALOG_CLOSED = 'SET_INFO_DIALOG_CLOSED';
export const SET_INFO_DIALOG_CONTENT = 'SET_INFO_DIALOG_CONTENT';
export const SET_INFO_DIALOG_COORDINATES = 'SET_INFO_DIALOG_COORDINATES';

export const GET_INCIDENTS_LOADING = 'GET_INCIDENTS_LOADING';
export const GET_INCIDENTS_COMPLETE = 'GET_INCIDENTS_COMPLETE';
export const GET_INCIDENTS_ERROR = 'GET_INCIDENTS_ERROR';

export const GET_TAGS_LOADING = 'GET_TAGS_LOADING';
export const GET_TAGS_COMPLETE = 'GET_TAGS_COMPLETE';
export const GET_TAGS_ERROR = 'GET_TAGS_ERROR';

export const SET_INCIDENTS_LOCATION_LOADING = 'SET_INCIDENTS_LOCATION_LOADING';
export const SET_INCIDENTS_LOCATION_COMPLETE = 'SET_INCIDENTS_LOCATION_COMPLETE';
export const SET_INCIDENTS_LOCATION_ERROR = 'SET_INCIDENTS_LOCATION_ERROR';

// Form
export const FORM_SET_USER_NAME = 'FORM:SET_USER_NAME';
export const FORM_SET_USER_EMAIL = 'FORM:SET_USER_EMAIL';
export const FORM_SET_MAP_CENTER = 'FORM:SET_MAP_CENTER';
export const FORM_SET_TAGS = 'FORM:SET_TAGS';
export const FORM_SET_IMAGES = 'FORM:SET_IMAGES';
export const FORM_SET_IMAGES_URLSS = 'FORM:SET_IMAGES_URLS';

export const FORM_GET_SUBMIT_LOADING = 'FORM:GET_SUBMIT_LOADING';
export const FORM_GET_SUBMIT_COMPLETE = 'FORM:GET_SUBMIT_COMPLETE';
export const FORM_GET_SUBMIT_ERROR = 'FORM:GET_SUBMIT_ERROR';

export const FORM_SET_IMAGE_URL_LOADING = 'FORM:SET_IMAGE_URL_LOADING';
export const FORM_SET_IMAGE_URL_COMPLETE = 'FORM:SET_IMAGE_URL_COMPLETE';
export const FORM_SET_IMAGE_URL_ERROR = 'FORM:SET_IMAGE_URL_ERROR';

export const FORM_SET_IMAGES_URLS_LOADING = 'FORM:SET_IMAGES_URL_LOADING';
export const FORM_SET_IMAGES_URLS_COMPLETE = 'FORM:SET_IMAGES_URL_COMPLETE';
export const FORM_SET_IMAGES_URLS_ERROR = 'FORM:SET_IMAGES_URL_ERROR';

export const FORM_SET_NAME_ERROR = 'FORM:SET_NAME_ERROR';
export const FORM_SET_EMAIL_ERROR = 'FORM:SET_EMAIL_ERROR';
export const FORM_DELETE_IMAGE_URL = 'FORM:DELETE_IMAGE_URL';

// Images
export const IMAGE_PERCENTAGE_DIFFERENCE = 10;

// RegExp
export const REGEXP_NAME = /^[a-zA-Z ]{2,30}$/;
export const REGEXP_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const FIELD_TYPE_NAME = 'NAME';
export const FIELD_TYPE_EMAIL = 'EMAIL';