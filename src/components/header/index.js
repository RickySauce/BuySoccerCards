import React from 'react' 
import Navbar from './navbar'
import './header.css'
const logo = require('src/public/imgs/logos/Buy_Soccer_Cards_Logo_Final_300x.png')

const LogoContainer = () => {
    return (
        <div className="container centered logo-container">
            <img className="logo" src={logo.default}></img>
        </div>
    )
}

const Header = () => {
    return(
        <div className="header">
            <LogoContainer/>
            <Navbar/>
        </div>
    )
}

export default Header