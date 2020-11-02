// Common
import React from 'react';
import cx from 'classnames';

// Styles
import styles from './styles.module.scss';

const ClosePane = ({ children, handleClose, className }) => (
  <div
    className={cx(className, styles['close-pane'])}
  >
    {children}
    <div className={styles['close-pane_btn']} onClick={handleClose} />
  </div>
)

export default ClosePane;
