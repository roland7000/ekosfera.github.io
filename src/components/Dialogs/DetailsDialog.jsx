// Common
import React from 'react';
import styles from './styles.module.scss';

// Hooks
import { useSelector, useDispatch } from 'react-redux'
import { withNamespaces } from 'react-i18next';

// Components
import TagList from '../TagList'
import DamageTitle from './DialogsComponents/DamageTitle';
import Stages from './DialogsComponents/StageList';
import Slider from './DialogsComponents/Slider';
import ClosePane from './DialogsComponents/ClosePane';

// Action Creators
import { setDetailsDialogClosed } from '../../store/actions/detailsDialog.actions';

function Dialog({ t }) {
  const { open, content } = useSelector(state => state.detailsDialog)
  const dispatch = useDispatch();

  if (!open || !content) return null;
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
          <TagList tagList={tags} className={styles['dialog_details-content-tag_list']} />
          <Stages stages={actions} className={styles['dialog_details-content-stage']} />
          <div className={styles['dialog_details-content-coordinates']}>
            <p>{t('Coordinates')}:</p>
            <p>{latlon}</p>
          </div>
          <Slider
            images={attachments}
            className={styles['dialog_details-content-slider']}
          />
        </div>
      </div>
    </div>
  )
}

export default withNamespaces()(Dialog);
