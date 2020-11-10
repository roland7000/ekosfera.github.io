import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { LANGUAGE_UA, LANGUAGE_EN } from '../../constants';
import { useTranslation } from 'react-i18next';

const LangiageSwitcher = () => {
  const [,i18n] = useTranslation();
  const language = i18n.language || LANGUAGE_UA;
  const handleChangeLanguage = language => i18n.changeLanguage(language);

  return (
    <ul className={styles['lang_switcher']}>
      <li
        onClick={() => handleChangeLanguage(LANGUAGE_UA)}
        className={cx({
          [styles['lang_switcher-item']]: true,
          [styles['lang_switcher-item--active']]: language === LANGUAGE_UA,
        })}
      >
        UA
      </li>
      <li
        onClick={() => handleChangeLanguage(LANGUAGE_EN)}
        className={cx({
          [styles['lang_switcher-item']]: true,
          [styles['lang_switcher-item--active']]: language === LANGUAGE_EN,
        })}
      >
        EN
      </li>
    </ul>
  )
}

export default LangiageSwitcher;
