import React from 'react'
import './Offer.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offer=()=>{
    return(
        <div className='offer'>
            <div className="offer-left">
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>Only On Best Sellers Products</p>
            <button>Check Now</button>

            </div>
            <div className="offer-right">
                <img src={exclusive_image} alt=""/>
                
            </div>

        </div>
    )
}
export default Offer;