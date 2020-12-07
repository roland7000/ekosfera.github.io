// Common
import React, { useEffect } from 'react';
import i18n from '../../i18n';
import styles from './styles.module.scss';

// Hooks
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'

// Components
import ReactMarkdown from 'react-markdown'
import ClosePane from './DialogsComponents/ClosePane';

// Action Creators
import { getAboutUsData, toggleAboutUsDialog } from '../../store/actions/aboutUs.actions';

function AboutUsDialog () {
  const language = i18n.language;
  const dispatch = useDispatch();
  const {
    data: {
      [language]: content
    }, loading, error, isOpen } = useSelector(state => state.aboutUs);

  useEffect(() => {
    if (loading) return;
    (!content && !error) && dispatch(getAboutUsData());
  }, [loading, error, content, dispatch, language])

  if (!isOpen) return null;

  const handleDialogClose = () =>
    dispatch(toggleAboutUsDialog(false))

  const handleContentClick = e =>
    e.stopPropagation();

  return (
    <div
      className={styles['dialog_about_us-wrapper']}
      onClick={handleDialogClose}
    >
      <div className={styles['dialog_about_us-background']} />
      <div
        className={styles['dialog_about_us-body']}
        onClick={handleContentClick}
      >
        <ClosePane
          handleClose={handleDialogClose}
          className={styles['dialog_about_us-content-close_pane']}
        />
        <div className={styles['dialog_about_us-content']}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default AboutUsDialog;
