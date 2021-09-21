import React from 'react'
import {
    Link
  } from "react-router-dom";
const logo = require('src/public/imgs/logos/Buy_Soccer_Cards_Logo_Final_300x.png')


const LogoContainer = () => {
    return (
        <div className="container centered logo-container">
            <img className="logo" src={logo.default}></img>
        </div>
    )
}

const HeaderTopNav = () => {
    return(
        <div className="header-top-nav">
            <nav className="container centered">
                <li className="link"><button>Currency Options</button></li>
                <li className="link"><Link to='/accounts/login'>LOG IN</Link></li>
                <li className="link"><Link to='/cart'>CART</Link></li>
            </nav>
        </div>
    )
}

const HeaderTop = () => {
    return(
        <div className="container centered">
            <LogoContainer/>
            <HeaderTopNav/>
        </div>
    )
}

export default HeaderTop