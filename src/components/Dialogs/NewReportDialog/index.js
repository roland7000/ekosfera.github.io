// Common
import React from 'react';
import styles from './styles.module.scss';

// Hooks
import { useSelector, useDispatch } from 'react-redux'

// Components
import ClosePane from '../DialogsComponents/ClosePane';
import StepOne from './StepOne';

// Action Creators
import { setNewReportDialogClosed } from '../../../store/actions/newReportDialog.actions';

function Dialog() {
  const { open } = useSelector(state => state.reportDialog)
  const dispatch = useDispatch();

  if (!open) return null;

  const handleDialogClose = () => {
    dispatch(setNewReportDialogClosed())
  };

  const handleContentClick = e => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles['dialog_report-wrapper']}
      onClick={handleDialogClose}
    >
      <div className={styles['dialog_report-background']} />
      <div
        className={styles['dialog_report-body']}
        onClick={handleContentClick}
      >
        <ClosePane
          handleClose={handleDialogClose}
          className={styles['dialog_report-content-close_pane']}
        />
        <div className={styles['dialog_report-content']}>
          <StepOne />
        </div>
      </div>
    </div>
  )

}

export default Dialog;
