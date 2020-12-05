// Common
import React, { useEffect } from 'react';
import styles from './app_styles.module.scss';

// Views
import Reports from './views/Reports';

// Components
import InfoDialog from './components/Dialogs/InfoDialog';
import DetailsDialog from './components/Dialogs/DetailsDialog';
import ReportDialog from './components/Dialogs/NewReportDialog/index';
import ImagesDialog from './components/Dialogs/ImagesDialog/index';
import Header from './components/Header';

// Hooks
import { useDispatch, useSelector } from 'react-redux'


// Action Creators
import { getIncidents } from './store/actions/incidents.actions';


function App() {
  const {
    infoDialog: {
      open,
      content,
      coordinates
    },
    incidents: {
      loading,
      error,
      data
    }
  } = useSelector(state => state);
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('state', state)
  }, [state])

  useEffect(() => {
    if (!data && !loading && !error) {
      dispatch(getIncidents());
    }
  }, [data, loading])

  return (
    <div className={styles.app}>
      <Header />
      <Reports />
      <InfoDialog />
      <DetailsDialog />
      <ReportDialog />
      <ImagesDialog />
    </div>
  );
}

export default App;
