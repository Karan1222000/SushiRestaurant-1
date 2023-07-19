import React from 'react'
import './Menuitem.css'
import { Link } from 'react-router-dom'

function Menuitem(props) {
    return (
        <>
            <div className='menu__item'>
                <Link className='menu__items'>
                    <div className='menu__item__info'>
                        <ul>
                            <li><text className='menu__item__text-1'>{props.text1}</text></li>
                            <li><text className='menu__item__text'>{props.text2}</text></li>
                        
                        </ul>
                    </div>
                    <div className='menu__item__price'>
                        <text className='menu__price__text'>{props.price}</text>
                    </div>
                </Link>
              
            </div>

        </>
    )
}

export default Menuitem