import React from 'react';
import { Carousel } from 'react-bootstrap';
import silder1 from './images/slibar__one.jpg';
import silder2 from './images/slibar__tow.jpg';
import silder3 from './images/slibar__three.jpg';

import './CarCarousel.css';
const images = [silder2];

const CarCarousel = () => {
  return (
    <Carousel pause='hover' className='custom-carousel'>
      {images.map((image, index) => (
        <Carousel.Item key={index} className='custom-carousel-item'>
          <img src={image} alt={`Image ${index + 1}`} className='d-block w-100 custom-carousel-image' />
          
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarCarousel;
