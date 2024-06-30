import React from 'react'
import './newslater.css'
const Newslater = () => {
  return (
    <div className='newslater'>
    <h1>Get Exclusive Offer on Your Email</h1>
        <p>Subscribe To Our Newsletter</p>
        <div>
            <input type="email" placeholder='Enter Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newslater