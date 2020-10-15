export const GOOGLE_MAPS_API = process.env.REACT_APP_GOOGLE_KEY;
export const DATA_URL = 'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10';
export const BASE_URL = ' https://ekosphera.work';
export const URL_INCIDENTS = '/incidents';
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

// Images
export const IMAGE_PERCENTAGE_DIFFERENCE = 10;
