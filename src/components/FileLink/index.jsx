// Common
import React from 'react';
import { BASE_URL, DOCUMENTS_EXTENSIONS_LIST } from '../../constants';

// Assets
import { ReactComponent as ImageIcon } from '../../assets/icon-image.svg';
import { ReactComponent as AttachmentIcon } from '../../assets/icon-attachment.svg';

// Helpers
import { isFileExt } from '../../helpers/parsing';

// Styles
import styles from './styles.module.scss';

const FileLink = ({ url, ext, name }) => {
  const Icon = isFileExt(ext) ? AttachmentIcon : ImageIcon;

  return (
    <a className={styles['link']} href={`${BASE_URL}${url}`} target="_blank">
      <Icon className={styles['link_icon']} />
      <span className={styles['link_text']}>{name}</span>
    </a>
  )
}

export default FileLink;
