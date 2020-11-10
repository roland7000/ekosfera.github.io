// Common
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

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
import { setIncidentLocation } from '../../store/actions/incidents.actions';

function Dialog() {
  const [t] = useTranslation();
  const [locationRetrived, setLocationRetrived] = useState(false);
  const dispatch = useDispatch();
  const { open, content } = useSelector(state => state.detailsDialog)
  const { locationData: incidentsLocationData } = useSelector(state => state.incidents)
  const {
    locationData,
    attachments,
    actions,
    damage: {
      measure,
      value
    },
    status,
    tags,
    id
  } = content;
  const latlon = locationData && locationData[0] && locationData[0].latlon || '';

  const locationObj =
    incidentsLocationData &&
    incidentsLocationData.length &&
    incidentsLocationData.find(location => location.id === id) || null

  const locationCaption = locationObj && locationObj.location || ''

  useEffect(() => {
    if (!latlon || locationRetrived) return;

    dispatch(setIncidentLocation(latlon, id))
    setLocationRetrived(true)
  }, [latlon])

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
            {locationCaption && <h3 className={styles['dialog_details-content-coordinates-title']}>{locationCaption}</h3>}
            <p>{t('Coordinates')}: <span>{latlon}</span></p>
          </div>
          <TagList tagList={tags} className={styles['dialog_details-content-tag_list']} />
          <Stages stages={actions} className={styles['dialog_details-content-stage']} />
          <p className={styles['dialog_details-content-slider-caption']}>{t('photos')}</p>
          <Slider
            images={attachments}
            className={styles['dialog_details-content-slider']}
          />
        </div>
      </div>
    </div>
  )
}

export default Dialog;
