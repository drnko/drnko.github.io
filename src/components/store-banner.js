import React from 'react'

import PropTypes from 'prop-types'

import './store-banner.css'

const StoreBanner = (props) => {
  return (
    <div className={`store-banner-store-banner ${props.rootClassName} `}>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="store-banner-image"
      />
      <img
        src={props.image_src2}
        alt={props.image_alt2}
        className="store-banner-image1"
      />
    </div>
  )
}

StoreBanner.defaultProps = {
  image_src: '6b27718d-5434-4cc9-bba3-1266a4247292',
  image_alt1: 'image',
  image_src1: './playground_assets/google-play-badge-200h.png',
  image_alt: 'image',
  rootClassName: '',
  image_src2: './playground_assets/app-store-badge-200h.png',
  image_alt2: 'image',
}

StoreBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default StoreBanner
