import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className={`feature-card-container ${props.rootClassName} `}>
      <div className="feature-card-container1">
        <h5 className="feature-card-text">{props.card_title}</h5>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card-image"
      />
      <span className="feature-card-text1">{props.text}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  rootClassName: '',
  card_title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  image_src: './playground_assets/01.svg',
  image_alt: 'image',
}

FeatureCard.propTypes = {
  rootClassName: PropTypes.string,
  card_title: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard
