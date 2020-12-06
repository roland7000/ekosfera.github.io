// Common
import React from 'react';
import Filter from '../../components/filters'

// Components
import Map from '../../components/MapWithCluster';

import styles from './styles.module.scss';

function Reports() {
  return (
    <div className={styles.reports}>
      <Filter />
      <Map />
    </div>
  );
}

export default Reports;
