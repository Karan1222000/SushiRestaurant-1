import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h2>Japanese Traditional Food</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-1.jpg'
                path='/services'
                />
                <CardItem 
                src='images/img-2.jpg' 
                // text="Travel through the Islands of Bali in a Private Cruise" 
                // label="Udon"
                path='/services'
                />
               
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-3.jpg'
                path='/services'
                />
                <CardItem 
                src='images/img-4.jpg' 
                path='/services'
                />
                <CardItem 
                src='images/img-5.jpg' 
                path='/services'
                />         
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
