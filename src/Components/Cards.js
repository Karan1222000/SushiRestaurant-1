import React from 'react';
import CardItem from './CardItem';
import IMG01 from './image/img01.jpg'
import IMG02 from './image/img02.jpg'
import IMG03 from './image/img3.jpg'
import IMG04 from './image/img04.jpg'
import IMG05 from './image/img05.jpg'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h2>Japanese Traditional Food</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src= {IMG01}
                path='/services'
                />
                <CardItem 
                src={IMG02}
                // text="Travel through the Islands of Bali in a Private Cruise" 
                // label="Udon"
                path='/services'
                />
               
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src = {IMG03}
                //src='./assets/img3.jpg'
                path='/services'
                />
                <CardItem 
                src = {IMG04}
                //src='/assets/img04.jpg' 
                path='/services'
                />
                <CardItem 
                src = {IMG05}
                //src='assets/img05.jpg' 
                path='/services'
                />         
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
