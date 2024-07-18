import React from 'react';
import './NewsLetter.css'
const NewsLetter=()=>{
    return(
        <div className='newletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our NewsLetter and stay Updated</p>
            <div>
                <input type="email" placeholder="your email id"/>
                <button>Subscribe</button>
            </div>

        </div>
    )
}
export default NewsLetter; 