import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { BASE_URL } from '../../constants';

import imagePath from '../../assets/placeholder.png';

const Image = ({ src, alt, className, isThumbnail }) => (
  <img
    className={cx({
      [className]: !!className,
      [styles.image]: !isThumbnail,
      [styles.thumbnail]: isThumbnail
    })}
    src={src ? `${BASE_URL}${src}` : imagePath}
    alt={alt}
  />
)

export default Image;
