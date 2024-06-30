import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero'>
    <div className='left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hand-icon'>
<p>new</p>
<img src={hand_icon} alt="" />
            </div>
            <p>Collection</p>
            <p>For Every Occasion</p>
        </div>
    
    <div className='latest-btn'>
        <div > Latest Collection</div>
        <img src={arrow_icon} alt="" />
    </div>
    </div>

    <div className='right'></div>
<img src={hero_image} alt="" />
    </div>
  )
}

export default Hero