// Common
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

// Hooks
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';

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
  const [t] = useTranslation();
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
    formEmailError,
    formSubmittedSuccessfully,
    formSubmitLoading,
    formSubmitError
  } = useSelector(state => state.report);

  const isImagesUrlsLoaded = attachments.length === images.length

  const isStepOneReady =
    !formImagesLoading &&
    !formImagesError &&
    !formNameError &&
    !formEmailError &&
    images &&
    images.length &&
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
      isStepOneReady && setShowStepTwo(true)
    }
  }
  const handleClickBack = () => setShowStepTwo(false)

  const handleSendForm = () => {
    if (isFormReady) dispatch(formPostReport({
      locationData: [
        { latlon: locationData[0].lat + ', ' + locationData[0].lng }
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

  console.log('formSubmittedSuccessfully', formSubmittedSuccessfully)

  return (
    <div className={styles['dialog_report-wrapper']}>
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
            <h3 className={styles['form_title']}>{t('formTitle')}</h3>
            <h4 className={styles['form_required-label']}>{t('required')}</h4>
          </div>
        </ClosePane>
        <div className={styles['dialog_report-content']}>
          {!formSubmitError && !formSubmittedSuccessfully && showStepTwo ? <StepTwo /> : <StepOne />}
          {formSubmittedSuccessfully && <div className={styles['dialog_report-content_message']}>{t('formSubmitSuccess')}</div>}
          {formSubmitError && <div className={styles['dialog_report-content_message']}>{t('formSubmitError')}</div>}
          {(formImagesLoading || formSubmitLoading) &&
            <div className={styles.loader}>
              <div className={styles['lds-spinner']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          }
        </div>
        <div className={styles['dialog_report-footer']}>
          {!formSubmitError && !formSubmittedSuccessfully && (
            <span className={styles['dialog_report-footer_step']}>{t('step')}: {showStepTwo ? '2' : '1'}</span>
          )}
          {!formSubmitError && !formSubmittedSuccessfully && showStepTwo ? <>
            <Button handleClick={handleClickBack}>
              Назад
            </Button>
            <Button
              handleClick={handleSendForm}
              disabled={!isFormReady}
              isPrimary
            >
              {t('submit')}
            </Button>
          </> : null}
          {!formSubmitError && !formSubmittedSuccessfully && !showStepTwo ? (
            <Button
              handleClick={handleClickNext}
              disabled={!isStepOneReady}
              isPrimary
            >
              {t('next')}
            </Button>
          ) : null}
          {(formSubmitError || formSubmittedSuccessfully) && (
            <Button
              handleClick={handleDialogClose}
              isPrimary
            >
              {t('close')}
            </Button>
          )}
        </div>
      </div>
    </div>
  )

}

export default Dialog;
