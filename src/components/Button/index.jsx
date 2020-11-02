
import React from 'react';
import styles from './styles.module.scss';
import cx from 'classnames';

const Button = ({
  isPrimary,
  handleClick,
  className,
  children,
  disabled,
  link,
}) => (
  <button
    className={cx(
      styles['button'],
      className,
      {
        [styles['button__primary']]: isPrimary,
        [styles['button__link']]: link,
        [styles['button__disabled']]: disabled
      }
    )}
    onClick={handleClick}
  >
    {children}
  </button>
)

export default Button;
