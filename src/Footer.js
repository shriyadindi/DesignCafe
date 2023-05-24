import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Bengaluru :  MG Road | Whitefield | HSR | JP Nagar<br/>
                                Mumbai :   Thane | Navi Mumbai<br/>
                                Hyderabad :  Gachibowli | Banjara Hills<br/>
                                Chennai :  Anna Salai | OMR<br/>
                                Coimbatore :  R.S. Puram<br/>
                                Vizag :   Dwaraka Nagar</p>
                        </div>
                        <br/>
                        <div className="phone">
                            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                +91 965393342</h4>
                        </div>
                        <br/>
                        <div className="email">
                            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                desingcafe@gmail.com
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <h4>About the company</h4>
                    <p>Having studied and worked as architects for 15 years, we founded DesignCafe in 2015 to extend the intelligent and beautiful home interior design to a wider range of budgets.
                       Obsessively quality focused, we do most things in-house – with expert designers, our own factory, and trained carpenters – to ensure flawless execution.
                       We consistently focus on solving customer needs, with a big focus on space optimisation, to deliver up to 20% extra space to your home.</p><br/>
                    <div className="social">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Footer;
