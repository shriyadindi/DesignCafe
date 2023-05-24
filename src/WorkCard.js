import "./WorkCardStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">DESIGNS BY US.</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80" alt="image"/>
                    <h2 className="project-title">Living Room</h2>
                    <div className="pro-details">
                        <p>Living room designs are a reflection of personal style and taste. From modern and minimalist to cozy and traditional, there are endless possibilities for creating a space that is both functional and stylish. A well-designed living room can be the perfect place to relax, entertain guests, and enjoy time with family.Discover a wide range of handpicked, living room interior designs and décor ideas at Livspace.</p>
                        <div className="pro-btns">
                            <NavLink to="url.com" className="btn">view</NavLink>
                            
                        </div>
                    </div>
                </div>
            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FyZHJvYmUlMjBkZXNpZ258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60" alt="image"/>
                <h2 className="project-title">Commercial Designs</h2>
                <div className="pro-details">
                    <p>A well-designed home office needs to be a productive and comfortable space to work in. A few key considerations for designing a home office are functionality, comfort, style, and organization. To make sure that your home office design meets your needs, it is important that you consider the tasks that you will be performing in the space and try to make sure you have enough workspace, storage, and technology to support those tasks. </p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">view</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1614622394738-7e6df45fdfcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZHVsYXIlMjBraXRjaGVufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="image"/>
                <h2 className="project-title">Modular Kitchen Designs</h2>
                <div className="pro-details">
                    <p>A modular kitchen design is a style statement and a product of modern interior designing concept. With kitchen being one of the most used part of the home, everyone deserves the best modular kitchen design with price that is affordable too. A modular kitchen is made up of multiple modules that are organized together to create a completely functional kitchen. Stylish kitchens for the modern home interior design that’s just right for you. Handpicked designs by our design experts.</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">view</NavLink>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1611048268330-53de574cae3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="image"/>
                <h2 className="project-title">Wardrobe Designs</h2>
                <div className="pro-details">
                    <p>Wardrobes are furniture pieces that help store and organize clothing and other personal belongings which makes them an essential part of any bedroom design. Wardrobe designs can range from simple, single-door units to large, multi-door armoires and can be made of a variety of materials like wood, metal or plastic and they can be crafted in a range of decor styles. Let’s make your bedrooms aesthetic, shall we?</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">view</NavLink>
                        
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbSUyMGludGVyaW9yfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="image"/>
                <h2 className="project-title">Bedroom designs</h2>
                <div className="pro-details">
                    <p>A bedroom should be a peaceful and restful retreat, designed to promote relaxation and good sleep. The color scheme should be calming and soothing, with soft, neutral tones that create a sense of tranquility. The furniture should be comfortable and functional, with a bed as the focal point of the room.Our carefully-curated master bedroom designs come in a variety of styles, colour schemes and decor ideas.</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">view</NavLink>
                        
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1607582544644-f1da2a004994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2UlMjBzYXZpbmclMjBmdXJuaXR1cmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60" alt="image"/>
                <h2 className="project-title">Space-saving furniture</h2>
                <div className="pro-details">
                    <p>Space-saving furniture is designed to be compact and take up as little space as possible. It is well suited for small apartments, homes and offices where space is at a premium. This kind of furniture which includes murphy beds, fold-down tables and convertible sofas can be easily stowed away when not in use and can help maximize the use of the available space in a room. Ready to get creative with your space?</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">view</NavLink>
                    </div>
                </div>
            </div>

            
        </div> 
    </div>



    )
}

export default WorkCard
