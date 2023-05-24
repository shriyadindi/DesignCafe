import "./HeroImgStyles.css";

import React from 'react';
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" alt="IntroImg"/>
        </div>
        <div className="content">
            <p1>Design your house</p1>
            <h1>DESIGN CAFE</h1>
            <p>If you’re on the lookout for aesthetic home interior designs,
look no further than DesignCafe for end- to-end interior design services.</p>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">contact</Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg;
