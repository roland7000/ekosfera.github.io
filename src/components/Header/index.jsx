
import React, { useState } from 'react';
import styles from './styles.module.scss';
import cx from 'classnames'
import imagePath from '../../assets/logo.png';
import partnerLogoPath from '../../assets/forest_forever_logo.jpg';

// Hooks
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Button from '../Button';

// Action Creators
import { setNewReportDialogOpen, setNewReportDialogClosed } from '../../store/actions/newReportDialog.actions';
import { toggleAboutUsDialog } from '../../store/actions/aboutUs.actions';

function Header() {
  const [t] = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const store = useSelector(store => store)
  const dispatch = useDispatch();

  const handleOpenReportDialog = () => {
    setIsMenuOpen(false)
    dispatch(setNewReportDialogOpen())
  }

  const handleOpenAboutUsDialog = () => {
    setIsMenuOpen(false)
    dispatch(setNewReportDialogClosed())
    dispatch(toggleAboutUsDialog(true))
  }

  const handleOpenMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className={styles['header_wrapper']}>
      <div className={styles['header']}>
        <a href="https://ekosphera.org/" className={styles['link']}>
          <img
            className={styles['logo']}
            src={imagePath}
            alt="logo"
          />
        </a>
        <div href="https://ekosphera.org/" className={styles['partner']}>
          <img
            className={styles['logo']}
            src={partnerLogoPath}
            alt="logo"
          />
        </div>
        {/* <LangiageSwitcher /> */}
        <div className={cx({
          [styles['header_menu']]: true,
          [styles['header_menu--is-open']]: isMenuOpen,
        })}>
          <Button
            className={styles['header_menu_list_button']}
            handleClick={handleOpenReportDialog}
          >
            {t('Submit a new report')}
          </Button>
          <ul className={styles['header_menu_list']}>
            <li onClick={handleOpenAboutUsDialog}>{t('About us')}</li>
          </ul>
        </div>
        <button
          className={styles['header_menu_button']}
          onClick={handleOpenMenu}
        >
          <span /><span /><span />
        </button>
      </div>
    </div>
  )
}

export default Header;
