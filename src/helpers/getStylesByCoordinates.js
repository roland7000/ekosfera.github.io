const getStylesByCoordinates = ({
  innerHeight,
  innerWidth,
  clientRect: {
    height,
    width,
    x,
    y
  }
}, additionalStyles) => {
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

  return {
    ...styles,
    ...additionalStyles
  }
}

export default getStylesByCoordinates;
