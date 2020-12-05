import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { BASE_URL } from '../../constants';

import imagePath from '../../assets/placeholder.png';

const Image = ({ src, className, isThumbnail, isFullScreen, ...rest }) =>
  <img
    className={cx({
      [className]: !!className,
      [styles.image]: !isThumbnail,
      [styles.thumbnail]: isThumbnail,
      [styles.isFullScreen]: isFullScreen
    })}
    src={src ? `${BASE_URL}${src}` : imagePath}
    {...rest}
  />


export default Image;
