// Common
import React from 'react';

// Components
import FileLink from '../FileLink';

// Styles
import styles from './styles.module.scss';

const FilesLst = ({ files }) => {
  if (!files || !files.length) return null;

  return (
    <ul className={styles['list']}>
      {
        files.map(({ name, url, ext }) =>
          <li className={styles['list_item']}>
            <FileLink ext={ext} url={url} name={name} />
          </li>
        )
      }
    </ul>
  )
}

export default FilesLst;
