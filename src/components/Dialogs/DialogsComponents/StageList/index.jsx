// Common
import React, { useRef } from 'react';
import cx from 'classnames';

// Components
// import FileList from '../../../FileList';

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
          <li
            key={name}
            className={cx(
              styles['stage_list-item']
            )}
          >
            {name}
          </li>
        ))
      }
    </ul>
  )
}

export default Stages;
