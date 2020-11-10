// Common
import React, { useRef } from 'react';
import cx from 'classnames';

// Hooks
import { useTranslation } from 'react-i18next';

// Styles
import styles from './styles.module.scss';

const Title = ({ value, measure, className }) => {
  const [t] = useTranslation();
  if (!value || !measure) return null;

  return (
    <>
      <p className={cx(
        styles['title'], {
        [className]: className
      })}>
        <strong>
          {t('Damage', {
            value: value.toFixed(2),
            measure: measure
          })}
        </strong>
      </p>
    </>
  )
}

export default Title;
