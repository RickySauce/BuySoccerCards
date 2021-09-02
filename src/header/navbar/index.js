import React from 'react'
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav>
                <Link to='/'>HOME</Link>
                <Link to='/about-us'>ABOUT US</Link>
                <Link to='/reviews'>REVIEWS</Link>
                <Link to='/blog'>BLOG</Link>
                <Link to='/all-products'>ALL PRODUCTS</Link>
                <Link to='/single-cards'>RAW SINGLE CARDS</Link>
                <Link to='/graded-cards'>GRADED SOCCER CARDS</Link>
                <Link to='/hobby-boxes'>HOBBY BOXES</Link>
                <Link to='/grading-service'>EXPERT GRADING ADVICE</Link>
                <Link to='/trading-card-stands'>TRADING CARD STANDS</Link>
            </nav>
        </div>
    )
}

export default Navbar