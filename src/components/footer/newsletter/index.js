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
            <form method="post" accept-charset="UTF-8" className="contact-form">  
                <div>
                    <div>
                        <label for="Email" >Email</label>                    
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
        <div>
            <div className="container">
                <NewsLetterContent/>
                <NewsLetterField/>
            </div>
        </div>
    )
}

export default Newsletter