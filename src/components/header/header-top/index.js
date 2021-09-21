import React from 'react'
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
        <div>

        </div>
    )
}

const HeaderTop = () => {
    return(
        <div>
            <LogoContainer/>
            <HeaderTopNav/>
        </div>
    )
}

export default HeaderTop