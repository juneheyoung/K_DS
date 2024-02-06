import React from 'react';
import PropTypes from 'prop-types';
import '../style/ExampleCarouselImage.css'


const ExampleCarouselImage = ({ imageUrl, text }) => {
  return (
    <div className="carousel-image-container">
      {/* Your image component goes here */}
      <img src={imageUrl} alt="Carousel Slide" />
      {/* Text overlay */}
      <div className="carousel-text-overlay">
        <p>{text}</p>
      </div>
    </div>
  );
};

ExampleCarouselImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
