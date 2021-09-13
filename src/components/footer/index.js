import React from 'react'
import Newsletter from './newsletter'
import FooterBottom from './footer-bottom'

const FooterContent = () => {
    return(
        <div>
            content
        </div>
    )
}

const Footer = () => {
    return(
        <div>   
            <Newsletter/>
            <FooterContent/>
            <FooterBottom/>
        </div>
    )
}

export default Footer