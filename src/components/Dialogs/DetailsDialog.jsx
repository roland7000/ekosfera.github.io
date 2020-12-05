// Common
import React from 'react';
import styles from './styles.module.scss';
import YouTube from 'react-youtube';

// Hooks
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';

// Components
import TagList from '../TagList'
import DamageTitle from './DialogsComponents/DamageTitle';
import Stages from './DialogsComponents/StageList';
import Slider from './DialogsComponents/Slider';
import ClosePane from './DialogsComponents/ClosePane';

// Action Creators
import { setDetailsDialogClosed } from '../../store/actions/detailsDialog.actions';

function Dialog() {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const { open, content } = useSelector(state => state.detailsDialog)
  const {
    locationData,
    attachments,
    actions,
    title,
    videoUrl,
    damage: {
      measure,
      value
    },
    status,
    tags,
    id
  } = content;
  const latlon = locationData && locationData[0] && locationData[0].latlon || '';

  if (!open || !content) return null;

  const handleDialogClose = () => {
    dispatch(setDetailsDialogClosed())
  };

  const handleContentClick = e => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles['dialog_details-wrapper']}
      onClick={handleDialogClose}
    >
      <div className={styles['dialog_details-background']} />
      <div
        className={styles['dialog_details-body']}
        onClick={handleContentClick}
      >
        <ClosePane
          handleClose={handleDialogClose}
          className={styles['dialog_details-content-close_pane']}
        >
          <DamageTitle
            measure={measure}
            value={value}
            className={styles['dialog_details-content-damage']}
          />
        </ClosePane>
        <div className={styles['dialog_details-content']}>
          <div className={styles['dialog_details-content-coordinates']}>
            {title && <h3 className={styles['dialog_details-content-coordinates-title']}>{title}</h3>}
            <p>{t('Coordinates')}: <span>{latlon}</span></p>
          </div>
          <TagList tagList={tags} className={styles['dialog_details-content-tag_list']} />
          <Stages stages={actions} className={styles['dialog_details-content-stage']} />
          <p className={styles['dialog_details-content-slider-caption']}>{t('photos')}</p>
          <Slider
            images={attachments}
            className={styles['dialog_details-content-slider']}
          />
          {videoUrl && <>
            <p className={styles['dialog_details-content-slider-caption']}>{t('video')}</p>
            <div className={styles['dialog_details-video_wrap']}>
              <YouTube
                videoId={videoUrl}
                opts={{
                  height: '390',
                  width: '640'
                }}
              />
            </div>
          </>}
        </div>
      </div>
    </div>
  )
}

export default Dialog;
