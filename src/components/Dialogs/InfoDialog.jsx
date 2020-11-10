// Common
import React, { useState, useCallback } from 'react';
import styles from './styles.module.scss';
import getStylesByCoordinates from '../../helpers/getStylesByCoordinates';

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// Components
import TagList from '../TagList'
import Button from '../Button'
import DamageTitle from './DialogsComponents/DamageTitle';
import Stage from './DialogsComponents/StageCurrent';
import Slider from './DialogsComponents/Slider';

// Action Creators
import { setInfoDialogClosed } from '../../store/actions/infoDialog.actions';
import { setDetailsDialogOpen, setDetailsDialogContent } from '../../store/actions/detailsDialog.actions';

function Dialog() {
  const [t] = useTranslation();
  const [height, setHeight] = useState(null);
  const { open: detailsDialogOpen } = useSelector(state => state.detailsDialog);
  const {
    open,
    content,
    coordinates
  } = useSelector(state => state.infoDialog);
  const dispatch = useDispatch();

  const dialogRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  if (!open || !content || !coordinates || detailsDialogOpen) return null;

  const {
    actions,
    attachments: incidentAttachments,
    damage,
    tags
  } = content;

  const {
    attachments: actionsAttachments,
    name: stage
  } = actions && actions.length ? actions[actions.length - 1] : {
    attachments: [],
    name: ''
  }

  const images = [...new Set([...incidentAttachments, ...actionsAttachments])]

  const {
    isDialogPositionedToTop,
    isDialogPositionedToRight,
    ...restStyles
  } = getStylesByCoordinates(coordinates, height);

  const handleDialogClose = () => {
    dispatch(setInfoDialogClosed())
  };

  const handleContentClick = e => {
    e.stopPropagation();
  };

  const handleClickMoreDetails = () => {
    dispatch(setInfoDialogClosed());
    dispatch(setDetailsDialogContent(content));
    dispatch(setDetailsDialogOpen());
  }

  return (
    <div
      className={styles['dialog_info-wrapper']}
      onClick={handleDialogClose}
    >
      <div className={styles['dialog_info-background']} />
      <div
        className={styles['dialog_info-body']}
        onClick={handleContentClick}
        style={restStyles}
        ref={dialogRef}
      >
        <div className={styles['dialog_info-content-close_btn-wrap']} onClick={handleDialogClose}>
          <span className={styles['dialog_info-content-close_btn']} />
        </div>
        <div className={styles['dialog_info-content']}>
          <Slider images={images} className={styles['dialog_info-content-slider']} isThumbnail />
          <DamageTitle damage={damage} />
          <TagList tagList={tags} className={styles['dialog_info-content-tag_list']} />
          <Stage stage={stage} />
        </div>
        <div className={styles['dialog_info-content-more-info-btn_wrap']}>
          <Button
            className={styles['dialog_info-content-more-info-btn']}
            handleClick={handleClickMoreDetails} link>
            {t('More information')}
          </Button>
        </div>
      </div>
    </div>
  )

}

export default Dialog;
