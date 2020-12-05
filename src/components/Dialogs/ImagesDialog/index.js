// Common
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

// Hooks
import { useSelector, useDispatch } from 'react-redux'

// Action Creators
import { setImagesDialogVisible } from '../../../store/actions/imagesDialog.actions'

// Components
import Slider from '../DialogsComponents/Slider';

const ImagesDialog = () => {
  const dispatch = useDispatch();
  const { visible, index } = useSelector(state => state.imagesDialog);
  const {
    open,
    content,
    coordinates
  } = useSelector(state => state.infoDialog);

  if (!visible) return null;

  const {
    actions,
    attachments: incidentAttachments,
  } = content || { actions: [], attachments: [] };

  const {
    attachments: actionsAttachments,
    name: stage
  } = actions && actions.length ? actions[actions.length - 1] : {
    attachments: [],
    name: ''
  }

  const images = [...new Set([...incidentAttachments, ...actionsAttachments])]

  const handleContentClick = e => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles['dialog-wrap']}
      onClick={() => dispatch(setImagesDialogVisible({ visible: false }))}
    >
      <button
        onClick={() => dispatch(setImagesDialogVisible({ visible: false }))}
        className={styles['dialog-close-button']}
      />
      <div
        className={styles['dialog-content']}
        onClick={handleContentClick}
      >
        <Slider
          images={images}
          className={styles['dialog-slider']}
          isFullScreen
        />
      </div>
    </div>
  )
}

export default ImagesDialog;
