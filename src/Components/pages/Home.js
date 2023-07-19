import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Homemenu from '../Homemenu';
import Homeabout from '../homeabout';
import Booking from '../booking';
import Footer from '../Footer';


function Home() {
    return (
        <>
        <HeroSection />
        <Homemenu/>
        <Cards/>
        <Homeabout/>
        <Booking/>
        <Footer />
        </>
    );
}

export default Home;