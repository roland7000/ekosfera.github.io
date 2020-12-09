import { combineReducers } from 'redux';

import detailsDialogReducer from './reducers/detailsDialogs.reducer';
import imagesDialogReducer from './reducers/imagesDialog.reducer';
import newReportReducer from './reducers/newReportDialog.reducer';
import aboutUsDialogReducer from './reducers/aboutUs.reducer';
import infoDialogReducer from './reducers/infoDialog.reducer';
import incidentsReducer from './reducers/incidents.reducer';
import reportReducer from './reducers/report.reducer';
import filterReducer from './reducers/filter.reducer';
import tagsReducer from './reducers/tags.reducer';

const rootReducer = combineReducers({
  detailsDialog: detailsDialogReducer,
  imagesDialog: imagesDialogReducer,
  reportDialog: newReportReducer,
  infoDialog: infoDialogReducer,
  aboutUs: aboutUsDialogReducer,
  incidents: incidentsReducer,
  report: reportReducer,
  filter: filterReducer,
  tags: tagsReducer
})

export default rootReducer;
