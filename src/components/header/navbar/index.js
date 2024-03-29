import React from 'react'
import * as Pages from '../../main/pages'
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <nav className="container centered">
                    <li className="link"><Link to='/'>HOME</Link></li>
                    <li className="link"><Link to='/about-us'>ABOUT US</Link></li> 
                    <li className="link"><Link to='/reviews'>REVIEWS</Link></li>
                    <li className="link"><Link to='/blog'>BLOG</Link></li>
                    <li className="link"><Link to='/all-products'>ALL PRODUCTS</Link></li>
                    <li className="link"><Link to='/raw-single-cards'>RAW SINGLE CARDS</Link></li>
                    <li className="link"><Link to='/graded-soccer-cards'>GRADED SOCCER CARDS</Link></li>
                    <li className="link"><Link to='/hobby-boxes'>HOBBY BOXES</Link></li>
                    <li className="link"><Link to='/expert-grading-advice'>EXPERT GRADING ADVICE</Link></li>
                    <li className="link"><Link to='/trading-card-stands'>TRADING CARD STANDS</Link></li> 
            </nav>
        </div>
    )
}

export default Navbar