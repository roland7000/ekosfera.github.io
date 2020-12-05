// Common
import React, { useRef } from 'react';
import cx from 'classnames';

// Components
import FilesList from '../../../FilesList';

// Styles
import styles from './styles.module.scss';

// Hooks
import { useTranslation } from 'react-i18next';

const Stages = ({ stages, className }) => {
  const [t] = useTranslation();
  if (!stages || !stages.length) return null;

  return <>
    <h3 className={styles['stage_list-main-title']}>{t('violation stages')}:</h3>
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
              {attachments && attachments.length ? (
                <>
                  <h5 className={styles['stage_list-item_attachments_caption']}>{t('files attached')}:</h5>
                  <FilesList files={attachments} />
                </>
              ) : null}
            </li>
          ))
      }
    </ul>
  </>
}

export default Stages;
