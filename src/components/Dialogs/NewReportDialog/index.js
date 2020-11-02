// Common
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

// Hooks
import { useSelector, useDispatch } from 'react-redux'

// Components
import ClosePane from '../DialogsComponents/ClosePane';
import Button from '../../Button';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

// Action Creators
import { setNewReportDialogClosed } from '../../../store/actions/newReportDialog.actions';
import { getTags } from '../../../store/actions/tags.actions';
import { formPostReport, formPostPhotos } from '../../../store/actions/report.action';

function Dialog() {
  const [isButtonNextClicked, setButtonNextClicked] = useState(false)
  const [showStepTwo, setShowStepTwo] = useState(false)
  const { open } = useSelector(state => state.reportDialog)
  const dispatch = useDispatch();
  const {
    submitData: {
      locationData,
      reporter: {
        fullName,
        email
      },
      images,
      attachments,
      date,
      tags,
    },
    formImagesLoading,
    formImagesError,
    formNameError,
    formEmailError
  } = useSelector(state => state.report);

  const isImagesUrlsLoaded = attachments.length === images.length

  const isStepOneReady =
    !formImagesLoading &&
    !formImagesError &&
    !formNameError &&
    !formEmailError &&
    fullName &&
    tags.length && 
    email &&
    tags

  const isFormReady =
    isImagesUrlsLoaded &&
    locationData.length &&
    isStepOneReady &&
    date

  useEffect(() => {
    dispatch(getTags())
  }, [])

  useEffect(() => {
    if (isImagesUrlsLoaded && isStepOneReady && isButtonNextClicked && isImagesUrlsLoaded) {
      setShowStepTwo(isImagesUrlsLoaded && isStepOneReady && isButtonNextClicked)
      setButtonNextClicked(false)
    }
  }, [isImagesUrlsLoaded, isStepOneReady, isButtonNextClicked])

  if (!open) return null;

  const handleDialogClose = () => dispatch(setNewReportDialogClosed())
  const handleContentClick = e => e.stopPropagation();

  const handleClickNext = () => {
    if (formImagesLoading) return

    if (!isImagesUrlsLoaded) {
      setButtonNextClicked(true)
      dispatch(formPostPhotos(images))
    } else {
      setShowStepTwo(true)
    }
  }
  const handleClickBack = () => setShowStepTwo(false)

  const handleSendForm = () => {
    if (isFormReady) dispatch(formPostReport({
      locationData: [
        { latlon: locationData.lat + ', ' + locationData.lng }
      ],
      attachments,
      reporter: {
        fullName,
        email,
      },
      date,
      tags
    }))
  }

  return (
    <div
      className={styles['dialog_report-wrapper']}
    >
      <div className={styles['dialog_report-background']} onClick={handleDialogClose} />
      <div
        className={styles['dialog_report-body']}
        onClick={handleContentClick}
      >
        <ClosePane
          handleClose={handleDialogClose}
          className={styles['dialog_report-content-close_pane']}
        >
          <div className={styles['form_title-wrap']}>
            <h3 className={styles['form_title']}>Заповніть форму звіту про порушення</h3>
            <h4 className={styles['form_required-label']}>* поля обов'язкові до заповнення</h4>
          </div>
        </ClosePane>
        <div className={styles['dialog_report-content']}>
          {showStepTwo ? <StepTwo /> : <StepOne />}
        </div>
        <div className={styles['dialog_report-footer']}>
          {showStepTwo ? <>
            <Button
              handleClick={handleClickBack}
              isPrimary
            >
              Назад
            </Button>
            <Button
              handleClick={handleSendForm}
              disabled={!isFormReady}
              isPrimary
            >
              Відправити
            </Button>
          </> : null}
          {!showStepTwo ? (
            <Button
              handleClick={handleClickNext}
              disabled={!isStepOneReady}
              isPrimary
            >
              Далі
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )

}

export default Dialog;
