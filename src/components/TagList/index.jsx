// Common
import React from 'react';
import cx from 'classnames';

// Styles
import styles from './styles.module.scss';

const TagList = ({ tagList, className }) => {
  if (!tagList || !tagList.length) return null;

  return (
    <ul className={cx(
      styles['tag-list'],
      { [className]: className }
    )}>
      {
        tagList.map(({ name, uuid }) =>
          <li key={uuid} className={styles['tag-list_item']}>{name}</li>)
      }
    </ul>
  )
}

export default TagList;
