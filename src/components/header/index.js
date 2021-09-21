import React from 'react' 
import Navbar from './navbar'
import HeaderTop from './header-top'
import './header.css'
const logo = require('src/public/imgs/logos/Buy_Soccer_Cards_Logo_Final_300x.png')



const Header = () => {
    return(
        <div className="header">
            <HeaderTop/>
            <Navbar/>
        </div>
    )
}

export default Header