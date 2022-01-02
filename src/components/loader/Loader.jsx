import React from 'react';

import './Loader.css';

const Loader = () => {
    const quotes = [
        "If You're Not With Me, Then You're My Enemy!",
        "Anakin Skywalker Was Weak. I Destroyed Him.",
        "Be Careful Not To Choke On Your Aspirations, Director!",
        "I Find Your Lack Of Faith Disturbing.",
        "When I Left You, I Was But The Learner. Now, I Am The Master.",
        "I Have You Now!",
        "Don't Fail Me Again...Admiral!",
        "He Will Join Us Or Die, Master!",
        "No! I... Am Your Father!",
        "There Is No Escape! Don't Make Me Destroy You"
    ]

    return(
        <div className="loader-container">
            <img src="/images/bg.jpg" alt="background-sw" className="background-loader"></img>
            <div className="loading-content">
                <p className="loading-content__loading">Loading...</p>
                <img src='/images/dv.png' className="loader-img" alt="logo" />
                <p className="loading-content__quote">{
                    quotes[Math.floor(Math.random() * (quotes.length-1 - 0) + 0)]
                }</p>    
            </div>
        </div>
    )
}

export default Loader;