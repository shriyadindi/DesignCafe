import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Pricingcard from '../components/Pricingcard';
import WorkCard from '../components/WorkCard';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="DESIGN GALLERY" text="Designs by us."/>
      <WorkCard/>
      <Pricingcard/>
      <Footer/>
    </div>
  );
};

export default Project;
