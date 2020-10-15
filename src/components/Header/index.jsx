
import React from 'react';
import styles from './styles.module.scss';
import imagePath from '../../assets/logo.png';

// Hooks
import { withNamespaces } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Button from '../Button';

// Action Creators
import { setNewReportDialogOpen } from '../../store/actions/newReportDialog.actions';

function Header({ t }) {
  const dispatch = useDispatch();

  const handleOpenReportDialog = () => {
    console.log('clicked')
    dispatch(setNewReportDialogOpen())
  }

  return (
    <div className={styles['header_wrapper']}>
      <div className={styles['header']}>
        <img
          className={styles['logo']}
          src={imagePath}
          alt="logo"
        />
        <ul className={styles['header_list']}>
          <li
          >
            {t('Reports')}
          </li>
          <li
          >
            {t('Sponsors')}
          </li>
        </ul>
        <Button
          className={styles['header_list_button']}
          handleClick={handleOpenReportDialog}
        >
          {t('Submit a new report')}
        </Button>
      </div>
    </div>
  )
}

export default withNamespaces()(Header);
