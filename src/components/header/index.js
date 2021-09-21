import React from 'react' 
import Navbar from './navbar'
import HeaderTop from './header-top'
import './header.css'


const Header = () => {
    return(
        <div className="header">
            <HeaderTop/>
            <Navbar/>
        </div>
    )
}

export default Header