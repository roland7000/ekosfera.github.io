// Common
import React from 'react';
import { withNamespaces } from 'react-i18next';

// Components
import Map from '../../components/MapWithCluster';

import styles from './styles.module.scss';

function Reports({ t }) {
  return (
    <div className={styles.reports}>
      <Map />
    </div>
  );
}

export default withNamespaces()(Reports);
