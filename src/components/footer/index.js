import React from 'react'
import Newsletter from './newsletter'
import FooterBottom from './footer-bottom'
import './footer.css'

const FooterContent = () => {
    return(
        <div>
            content
        </div>
    )
}

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