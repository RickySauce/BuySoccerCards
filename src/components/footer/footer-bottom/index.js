import React from 'react'

const CurrencyChanger = () => {
    return (
        <div className='button-container'>   
            <button>
                Currency Options
            </button>
        </div>
    )
}

const PaymentOptions = () => {
    return(
        <div>

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