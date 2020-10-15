// Common
import React from 'react';

// Components
import Slider from "react-slick";
import Image from '../../../Image';

// Styles
import './slider-styles.css'

const SlickSlider = ({ images, className, isThumbnail }) => {
  if (!images || !images.length) return null;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderedImages = []

  images.forEach(({ formats, id }) => {
    const { url } = (formats && formats.medium) ? formats.medium : { medium: { url: '' } };

    url && renderedImages.push(<Image key={id} src={url} isThumbnail={isThumbnail} />)
  })

  return (
    <Slider
      className={className || null}
      {...settings}
    >
      {
        renderedImages
      }
    </Slider>
  )
}

export default SlickSlider
