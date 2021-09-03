import React from 'react' 
import Navbar from './navbar'
const logo = require('src/public/imgs/logos/Buy_Soccer_Cards_Logo_Final_300x.png')


const Header = () => {
    return(
        <div>
            <img src={logo.default}></img>
            <Navbar/>
        </div>
    )
}

export default Header