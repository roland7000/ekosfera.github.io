
import React from 'react';
import styles from './styles.module.scss';
import cx from 'classnames';

const Button = ({
  isPrimary,
  handleClick,
  className,
  children,
  link,
}) => (
  <button
    className={cx(
      styles['button'],
      className,
      {
        [styles['button__primary']]: isPrimary,
        [styles['button__link']]: link
      }
    )}
    onClick={handleClick}
  >
    {children}
  </button>
)

export default Button;
