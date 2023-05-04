import React from 'react'

import PropTypes from 'prop-types'

import './app-store.css'

const AppStore = (props) => {
  return (
    <div className={`app-store-store-banner ${props.rootClassName} `}>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="app-store-image"
      />
    </div>
  )
}

AppStore.defaultProps = {
  image_src1: './playground_assets/app-store-badge-200h.png',
  rootClassName: '',
  image_alt1: 'image',
}

AppStore.propTypes = {
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default AppStore
