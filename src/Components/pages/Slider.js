import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../App.css'; 
import './Slider.css';

const PhotoSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1290,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src="assets/img-24.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="assets/img-20.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="assets/img-21.jpg" alt="Image 3" />
        </div>
        <div>
          <img src="assets/img-23.jpg" alt="Image 4" />
        </div>
        <div>
          <img src="assets/img-22.jpg" alt="Image 5" />
        </div>
        <div>
          <img src="assets/img-18.jpg" alt="Image 6" />
        </div>
        <div>
          <img src="assets/img-19.jpg" alt="Image 7" />
        </div>
        {/* Add more images here */}
      </Slider>
    );
  };


export default PhotoSlider;