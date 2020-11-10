// Common
import React from 'react';
import cx from 'classnames';

// Styles
import styles from './styles.module.scss';

const Stage = ({ stage, className }) => {
  if (!stage) return null;

  return (
    <div className={cx(styles['stage'], { [className]: className })}>
      {stage}
    </div>
  )
}

export default Stage
