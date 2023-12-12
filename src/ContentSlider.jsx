// ContentSlider.js

import React from 'react';
import './ContentSlider.css';
import content1 from './images/content_slider_1.png';
import content2 from './images/content_slider_2.png';
import content3 from './images/content_slider_3.png';
import content4 from './images/content_slider_4.png';

const ContentSlider = () => {
  return (
    <div>
      <h1 className="text__color__white">TÌM HIỂU THÊM</h1>

      {/* Silder content */}
      <div className="slider__content">

        <div className="card" style={{ width: '18rem' }}>
          <img src={content1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={content2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={content3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={content4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContentSlider;
