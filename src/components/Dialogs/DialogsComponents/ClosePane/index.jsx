// Common
import React from 'react';
import cx from 'classnames';

// Styles
import styles from './styles.module.scss';

const ClosePane = ({ children, handleClose, className }) => (
  <div
    onClick={handleClose}
    className={cx(className, styles['close-pane'])}
  >
    {children}
    <span className={styles['close-pane_btn']} />
  </div>
)

export default ClosePane;
