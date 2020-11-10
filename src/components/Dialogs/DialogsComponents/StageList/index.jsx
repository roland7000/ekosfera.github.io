// Common
import React, { useRef } from 'react';
import cx from 'classnames';

// Components
import FilesList from '../../../FilesList';

// Styles
import styles from './styles.module.scss';

const Stages = ({ stages, className }) => {
  if (!stages || !stages.length) return null;

  return (
    <ul className={cx(className, styles['stage_list'])}>
      {
        stages.map(({
          attachments,
          description,
          name,
          date,
          id,
        }) => (
            <li key={name + id} className={styles['stage_list-item']}>
              <div className={styles['stage_list-item_date']}>{date}</div>
              <h5 className={styles['stage_list-item_title']}>{name}</h5>
              <div className={styles['stage_list-item_description']}>{description}</div>
              {attachments && attachments.length && <FilesList files={attachments} />}
            </li>
          ))
      }
    </ul>
  )
}

export default Stages;
