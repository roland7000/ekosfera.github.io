// Common
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import { validateField } from '../../../helpers/validation';
import { FIELD_TYPE_NAME, FIELD_TYPE_EMAIL } from '../../../constants';
import { withNamespaces } from 'react-i18next';

// Components
import ImageUploader from "./ImageUpload";
import TagList from '../../TagList';

// Action Creators
import {
  formSetName,
  formSetEmail,
  formSetImages,
  formSetNameError,
  formSetEmailError
} from '../../../store/actions/report.action';

// Styles
import styles from './styles.module.scss';

const StepOne = ({ t }) => {
  const dispatch = useDispatch();
  const {
    submitData: {
      reporter: {
        fullName,
        email
      },
    },
    formImagesLoading,
    formImagesError,
    formNameError,
    formEmailError
  } = useSelector(state => state.report);

  const handleSetName = event => dispatch(formSetName(event.target.value))

  const handleBlurName = event => {
    const isValid = validateField({
      type: FIELD_TYPE_NAME,
      value: event.target.value
    })

    if (!isValid && !!event.target.value) dispatch(formSetNameError(true))
  }

  const handleBlurEmail = event => {
    const isValid = validateField({
      type: FIELD_TYPE_EMAIL,
      value: event.target.value
    })

    if (!isValid && !!event.target.value) dispatch(formSetEmailError(true))
  }
  const handleSetEmail = event => dispatch(formSetEmail(event.target.value))
  const handleSetImages = images => dispatch(formSetImages(images))

  return (
    <div className={cx(styles['form'])}>
      <div className={styles['form_body']}>
        <div className={styles['form_left-block']}>
          <div className={cx(styles['form_field'], styles['form_field-user'])}>
            <input
              type="text"
              className={styles['form_field-input']}
              placeholder={t('namePlaceholder')}
              onChange={handleSetName}
              onBlur={handleBlurName}
              maxLength={20}
              value={fullName || ''}
            />
            {formNameError && <div className={styles['form_field-input-error']}>{t('nameError')}</div>}
            <input
              type="email"
              className={styles['form_field-input']}
              placeholder={t('emailPlaceholder')}
              onChange={handleSetEmail}
              onBlur={handleBlurEmail}
              maxLength={30}
              value={email || ''}
            />
            {formEmailError && <div className={styles['form_field-input-error']}>{t('nameError')}</div>}
          </div>
          <div className={cx(styles['form_field'], styles['form_field-attachments'])}>
            <h4 className={styles['form_subtitle']}>{t('addPhoto')} <sup>*</sup></h4>
            <div className={styles['form_field-attachments_body']}>
              <ImageUploader
                onChange={handleSetImages}
                setImages={handleSetImages}
              />
              {formImagesError && <div className={styles['form_field-input-error']}>{t('addPhotoError')}</div>}
            </div>
          </div>
        </div>
        <div className={styles['form_right-block']}>
          <div className={cx(styles['form_field'], styles['form_field-tags'])}>
            <h4 className={styles['form_subtitle']}>{t('chooseCategory')} <sup>*</sup></h4>
            <TagList
              className={styles['form_field-tagList']}
              isSelectList
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withNamespaces()(StepOne);
