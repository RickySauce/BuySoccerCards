import React from 'react'
import Newsletter from './newsletter'
import FooterBottom from './footer-bottom'
import FooterContent from './footer-content'
import './footer.css'

const Footer = () => {
    return(
        <div className='footer'>   
            <Newsletter/>
            <FooterContent/>
            <FooterBottom/>
        </div>
    )
}

export default Footer