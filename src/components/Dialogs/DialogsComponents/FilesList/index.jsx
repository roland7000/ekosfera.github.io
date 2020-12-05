// Common
import React from 'react';
import cx from 'classnames';

// Components
import FileLink from '../../../../FileLink';

// Styles
import styles from './styles.module.scss';

const FilesList = files => {
  if (!files || !files.length) return null;

  return (
    <ul className={cx(styles['files-list'])}>
      {files.map(({ name, hash, url, ext }) => (
        <li
          key={hash + name}
          className={cx(
            styles['files-list_item']
          )}
        >
          <FileLink url={url} ext={ext}>{name}</FileLink>
        </li>
      ))}
    </ul>
  )
}

export default FilesList;
