import React from 'react';
import './booking.css';
import '../App.css';
import Reservation from './pages/Reservation';
import StrokeDesign from './Stroke';

function Booking() {
    return (
        <>
            <div className='booking_container'>
                <div className='event__detail'>
                    <div className='design'>
                        <StrokeDesign />
                        <h2>Events & Business Meetings</h2>
                    </div>
                    <hr></hr>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>
                    <button>BOOK A TABLE</button>
                </div>
                <div className='img_events'>
                    <img src='/assets/img-11.jpg' />
                </div>
            </div>
        </>
    )
}
export default Booking
