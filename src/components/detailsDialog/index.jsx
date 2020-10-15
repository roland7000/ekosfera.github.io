import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import styles from './styles.module.scss';
import getStylesByCoordinates from '../../helpers/getStylesByCoordinates';

// Action Creators
import { setDetailsDialogClosed } from '../../store/actions/dialog.actions';

function Dialog() {
  const {
    open,
    content,
    coordinates
  } = useSelector(state => state.dialog)
  const dispatch = useDispatch();

  if (!open || !content || !coordinates) return null;

  const {
    isDialogPositionedToTop,
    isDialogPositionedToRight,
    ...restStyles
  } = getStylesByCoordinates(coordinates, { width: 200 });

  const handleDialogClose = () => {
    dispatch(setDetailsDialogClosed())
  };

  const handleContentClick = e => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles['dialog-wrapper']}
      onClick={handleDialogClose}
    >
      <div className={styles['dialog-background']} />
      <div
        className={styles['dialog-body']}
        onClick={handleContentClick}
        style={restStyles}
      >
        {content}
      </div>
    </div>
  )

}

export default Dialog