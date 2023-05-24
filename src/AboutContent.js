import "./AboutContentStyles.css"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1>-Meet our designers-</h1>
        <p>The magicians who transform and create space...
           Boho chic, rustic, mediterranean, minimalist, modern, industrial, classic-contemporary, art deco, traditional – do you get lost with these terms? Or perhaps you know what you want, but don’t know how to get there?
           That is why we have a team of 400+ designers to advise customers.</p>
    </div>
    <div className="right">
        <div className="img-container">
                <img src="https://media.designcafe.com/wp-content/uploads/2023/01/03120622/top-10-best-interior-designers-bangalore-mumbai-hyderabad-india-690x380.webp" className="img"/>
        </div>
    </div>
    </div>
  )
}

export default AboutContent
