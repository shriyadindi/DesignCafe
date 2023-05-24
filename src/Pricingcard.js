import "./PricingcardStyles.css"

import React from 'react'

const Pricingcard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
        <div className="card">
         <h3>What Interior stuff?</h3>
         <span className="bar"></span>
         <p className="btc"></p> 
         <p>Lighting</p>
         <p>Kitchen and dining</p>
         <p>Home furnishing</p>
         <p>Decor</p>
         <p>Furniture</p>
         <p>Wall art</p>           
        </div>
        <div className="card">
        
         <h3>Why DesignCafe?</h3>
         <span className="bar"></span>
         <p className="btc"></p> 
         <p>Flat 10 years warranty</p>
         <p>45 days or we pay you rent</p>
         <p>25,000+ happy customers</p>
         <p>Post-installation service</p>
         <p>Aesthetic designs at your budget</p>
         <p>10,000+ templates</p>
           
        </div>
        <div className="card">
         <h3>What we design?</h3>
         <span className="bar"></span>
         <p className="btc"></p> 
         <p>Home interior design</p>
         <p>Commercial interiors</p>
         <p>Space saving designs</p>
         <p>Modular kitchen designs</p>
         <p>Living room designs</p>
         <p>Balcony designs</p>
           
        </div>
      </div>
    </div>
  )
}

export default Pricingcard
