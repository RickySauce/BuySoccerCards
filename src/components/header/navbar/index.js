import React from 'react'
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about-us'>ABOUT US</Link></li> 
                <li><Link to='/reviews'>REVIEWS</Link></li>
                <li><Link to='/blog'>BLOG</Link></li>
                <li><Link to='/all-products'>ALL PRODUCTS</Link></li>
                <li><Link to='/single-cards'>RAW SINGLE CARDS</Link></li>
                <li><Link to='/graded-cards'>GRADED SOCCER CARDS</Link></li>
                <li><Link to='/hobby-boxes'>HOBBY BOXES</Link></li>
                <li><Link to='/grading-service'>EXPERT GRADING ADVICE</Link></li>
                <li><Link to='/trading-card-stands'>TRADING CARD STANDS</Link><Link to='/trading-card-stands'>TRADING CARD STANDS</Link></li>
            </nav>
        </div>
    )
}

export default Navbar