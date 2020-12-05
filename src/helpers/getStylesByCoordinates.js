const getStylesByCoordinates = ({
  innerHeight,
  innerWidth,
  clientRect: {
    height,
    width,
    x,
    y
  }
}, dialogHeight) => {
  const styles = {
    top: null,
    bottom: null,
    left: null,
    right: null,
    position: 'fixed',
    isDialogPositionedToTop: null,
    isDialogPositionedToRight: null,
  }
  const INFO_DIALOG_OFFSET_Y = 20;

  styles.isDialogPositionedToTop = (y + height / 2) > (innerHeight - (y + height / 2));
  styles.isDialogPositionedToRight = (x + width / 2) < (innerWidth - (x + width / 2));

  styles.top = styles.isDialogPositionedToTop ? 'auto' : y - INFO_DIALOG_OFFSET_Y
  styles.bottom = styles.isDialogPositionedToTop ? innerHeight - (y + height + INFO_DIALOG_OFFSET_Y) : 'auto'
  styles.right = styles.isDialogPositionedToRight ? 'auto' : innerWidth - x;
  styles.left = styles.isDialogPositionedToRight ? x + width : 'auto';

  if (dialogHeight) {
    const isFreeSpaceAtTop = y > dialogHeight;
    const isFreeSpaceAtBottom = (innerHeight - y) > dialogHeight;

    if (styles.isDialogPositionedToTop) {
      if (isFreeSpaceAtTop) {
        styles.top = 'auto'
        styles.bottom = innerHeight - y - (height / 2) - INFO_DIALOG_OFFSET_Y
      } else if (!isFreeSpaceAtTop && isFreeSpaceAtBottom) {
        styles.top = y - INFO_DIALOG_OFFSET_Y - (height / 2)
        styles.bottom = 'auto'
      } else {
        styles.top = 'auto'
        styles.bottom = INFO_DIALOG_OFFSET_Y
      }
    } else {
      if (isFreeSpaceAtBottom) {
        styles.top = y - (height / 2)
        styles.bottom = 'auto'
      } else {
        styles.top = 'auto'
        styles.bottom = INFO_DIALOG_OFFSET_Y
      }
    }
  }

  return styles
}

export default getStylesByCoordinates;
