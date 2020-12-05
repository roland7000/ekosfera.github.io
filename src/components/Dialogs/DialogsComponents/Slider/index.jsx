// Common
import React from 'react';

// Components
import Slider from "react-slick";
import Image from '../../../Image';

// Action Creators
import { setImagesDialogVisible } from '../../../../store/actions/imagesDialog.actions'

// Hooks
import { useDispatch } from 'react-redux'

// Assets
import { ReactComponent as ExpandIcon } from '../../../../assets/expand.svg';

// Styles
import './slider-styles.css'

const SlickSlider = ({ images, className, isThumbnail, isFullScreen = false, ...rest }) => {
  const dispatch = useDispatch();
  if (!images || !images.length) return null;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderedImages = []

  images.forEach(({ formats, id }, index) => {
    const { url } = (formats && formats.medium) ? formats.medium : { medium: { url: '' } };

    url && renderedImages.push(
      <Image
        key={id}
        src={url}
        isThumbnail={isThumbnail}
        isFullScreen={isFullScreen}
      />
    )
  })

  return (
    <>
      {
        !isFullScreen && <button
          className="open-fullscreen"
          onClick={() =>
            !isFullScreen && dispatch(setImagesDialogVisible({ visible: true }))
          }>
          Відкрити на повний екран
          <ExpandIcon className="open-fullscreen-icon" />
        </button>
      }
      <Slider
        className={className || null}
        {...settings}
        {...rest}
      >
        {
          renderedImages
        }
      </Slider>
    </>
  )
}

export default SlickSlider
