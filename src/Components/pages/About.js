import React from 'react';
import '../../App.css';
import './About.css';

function AboutUs() {
    return(
    <>
    <div className='about__container'>
      
       <div className='ourchef'>
        <h2>Meet Our Chef's</h2>
        <div className='chef'>
            <div className='chef-info'>
                <img src="images/img-9.jpg"/>
            </div>
            <div className='chef-info'>
                <img src="images/img-9.jpg"/>
            </div>
            <div className='chef-info'>
                <img src="images/img-10.jpg"/>
            </div>
        </div>
       </div>
    </div>
    </>
    )
}

export default AboutUs;