import React from 'react'

const NewsLetterContent = () =>{
    return(
        <div>
            <h2> newsletter </h2>
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
                <div>
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
            <div className="container newsletter-inner">
                <NewsLetterContent/>
                <NewsLetterField/>
            </div>
        </div>
    )
}

export default Newsletter