import React from 'react';
import Footer from '../Footer/Footer';
import Particles from 'react-particles-js';
import './Home.css'
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import Navbar from '../Header/Navbar/Navbar';
import GetInTouch from './GetInTouch/GetInTouch';
import HomePageProject from './HomePageProject/HomePageProject';
import ParticleBg from '../Particles/ParticleBg';

const Home = () => {
    return (
        <div style={{backgroundColor:'black'}} >

            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <HomePageProject></HomePageProject>
            <GetInTouch></GetInTouch>
           <Footer></Footer>
            <ParticleBg></ParticleBg>
            
        </div>
    );
};

export default Home;