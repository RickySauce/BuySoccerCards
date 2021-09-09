import React from 'react' 
import Navbar from './navbar'
import './header.css'
const logo = require('src/public/imgs/logos/Buy_Soccer_Cards_Logo_Final_300x.png')

const Banner = () => {
    return (
        <div id="banner" className="container centered">
            <p>
                All soccer cards are shipped in penny sleeves and top loaders and First Class shipping with tracking! Shipping is $2.99 within the US and only $6.99 internationally to any location.
            </p>
        </div>
    )
}

const LogoContainer = () => {
    return (
        <div id="logo-container" className="container centered">
            <img id="logo" src={logo.default}></img>
        </div>
    )
}

const Header = () => {
    return(
        <div>
            <Banner/>
            <LogoContainer/>
            <Navbar/>
        </div>
    )
}

export default Header