import React from 'react'

const NewsLetterContent = () =>{
    return(
        <div className="newsletter-content">
            <h2 className="newsletter-title"> newsletter </h2>
            <div>
                <p>
                     Want to be the first to know when new rare cards are available? Sign up now for the latest updates!
                </p>
            </div>
        </div>
    )
}

const NewsLetterField = () => {
    return(
        <div>
            <form method="post" acceptCharset="UTF-8" className="contact-form">  
                <div className="container centered">
                    <div>
                        <input type="email" name="email" placeholder="email@example.com" autoCorrect="off" autoCapitalize="off"/>              
                    </div>
                    <div >
                        <button type="submit" name="commit">Subscribe</button>
                    </div>
                </div>
             </form>
        </div>
    )
}

const Newsletter = () => {
    return(
        <div className="newsletter-container">
            <div className="newsletter-inner">
                <div className="newsletter-main">
                    <NewsLetterContent/>
                    <NewsLetterField/>
                </div>
            </div>
        </div>
    )
}

export default Newsletter