import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='videos/video-2.mp4' autoPlay loop muted /> */}
      <h1 className='animate__animated animate__fadeInUp'>Sushi Restaurant</h1>
      <p className='animate__animated animate__fadeInUp'>JAPANESE CUISINE & ONLINE DELIVERY</p>
      <div className='hero-btns'>
        <Button className='btns animate__animated animate__fadeInUp'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          MAKE A RESERVATION
        </Button>
        {/* <Button className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          ORDER ONLINE
        </Button> */}
      </div>
    </div>
  )
}

export default HeroSection;

