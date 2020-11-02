import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const Caption = ({ lat, lng, className }) => (
  <div className={cx({
    [styles['caption']]: true,
    [className]: className,
  })}>
    <div className={styles['caption_chunk']}>
      <span className={styles['caption_bold']}>lat</span>
      {lat || '...'}
    </div>
    <div className={styles['caption_chunk']}>
      <span className={styles['caption_bold']}>lon</span>
      {lng || '...'}
    </div>
  </div>
)

export default Caption;
