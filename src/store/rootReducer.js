import { combineReducers } from 'redux';

import detailsDialogReducer from './reducers/detailsDialogs.reducer';
import infoDialogReducer from './reducers/infoDialog.reducer';
import newReportReducer from './reducers/newReportDialog.reducer';
import incidentsReducer from './reducers/incidents.reducer';

const rootReducer = combineReducers({
  detailsDialog: detailsDialogReducer,
  infoDialog: infoDialogReducer,
  incidents: incidentsReducer,
  reportDialog: newReportReducer
})

export default rootReducer;
