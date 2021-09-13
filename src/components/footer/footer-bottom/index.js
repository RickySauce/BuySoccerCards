import React from 'react'
import { Amex, Applepay, Bitcoin, DinersClub, Discover, Elo, Googlepay, Jcb, Mastercard, Paypal, Visa} from "react-pay-icons";
import { Dai, Doge, Eth, Ltc,} from "react-pay-icons/lib/crypto";


const CurrencyChanger = () => {
  /* responsible for app wide state change that will update currency
  for multiple componets */
    return (
        <div className='button-container'>   
            <button> 
                Currency Options
            </button>
        </div>
    )
}

const PaymentOptions = () => {
    
    const icons = [ Amex, Applepay, Bitcoin, DinersClub, Discover, Elo, Googlepay, Jcb, Mastercard, Paypal, Visa, Dai, Doge, Eth, Ltc]
    // need icons for venmo and shop pay
    return(
        <div className="payment-options">
            <ul className= "container items-centered">
                {icons.map((icon, index) => {
                    //need tooltips for icons 
                    return(
                        <li key={index}>
                            {React.createElement(icon, { margin: 30, width: 35})}
                         </li>
                    )
                })}
            </ul>
        </div>
    )
}

const FooterBottom = () => {
    return (
        <div className="container footer-bottom">
            <CurrencyChanger/>
            <PaymentOptions/>
            <p className="copyright">&copy; 2021, Buysoccercards</p>
        </div>
    )
}

export default FooterBottom