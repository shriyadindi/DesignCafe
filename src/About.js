import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT US" 
      text="We bring you carefully-curated interior design ideas, to give your home a brand new look."color="#ffbf00" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
