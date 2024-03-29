import React from 'react'
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { SiInstagram } from "react-icons/si";
import {
    Link
  } from "react-router-dom";

const ContactIcons = () => {
    //should all link to relative social media sites
    return (
        <div className='contact-icons'>
            <ul className="container">
                <li>
                    <TiSocialFacebook value={{ style: {size: "3em"}}}/>
                </li>
                <li>
                    <TiSocialTwitter/>
                </li>
                <li>
                    <SiInstagram/>
                </li>
            </ul>
        </div>
    )
}

const Contact = () => {
    return(
        <div className="footer-content-section">
            <h4> contact </h4>
            {/* should be a clickable link, linked to the email address provided */}
            <p> captain@buysoccercards.com </p> 
            <p> 415-340-2510 </p>
            <ContactIcons/>
        </div>
    )
}

const PolicyPages = () => {
    //links need to link to appropriate pages
    return (
        <div className="footer-content-section">
            <h4>Policy Pages</h4>
            <ul className="styled-list policy-links">
                <li><Link to='/policies/privacy-policy'>Privacy Policy</Link></li>
                <li><Link to='/policies/terms-of-service'>Terms of Service</Link></li> 
                <li><Link to='/policies/refund-policy'>Refund Policy</Link></li> 
            </ul>
        </div>
    )
}

const FooterContent = () => {
    return(
        <div className="footer-content">
            <Contact/>
            <PolicyPages/>
        </div>
    )
}


export default FooterContent