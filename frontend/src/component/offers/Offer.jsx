import React from 'react'
import './offer.css'
import exclusive_image from '../../assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offer'>
        <div className='left'>
            <h1>Exclusive</h1>
            <h1>Offer  for you</h1>
            <p>Only on Best Seller Product</p>
            <button>Check Now</button>
        </div>
        <div className='right'>
            <img src={exclusive_image} alt=''/>

        </div>
    </div>
  )
}

export default Offer