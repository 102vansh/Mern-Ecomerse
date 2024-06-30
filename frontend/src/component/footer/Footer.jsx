import React from 'react'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import twitter_icon from '../../assets/whatsapp_icon.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo'>
        <img src={footer_logo} alt="logo" />
        <p>SHOPPY</p>
        </div>
        <ul className='links'>
            <li>Company</li>
           <li>Products</li> 
           <li>Office</li>
           <li>About</li> 
           <li>Contact</li>
           
        </ul>
        <div className='icon'>
            <div className='footer-cont' style={{ display: 'flex' }}>
<img src={instagram_icon} alt="instagram" />
<img src={twitter_icon} alt="twitter" />
<img src={pintester_icon} alt="pintester" />
            </div>
            </div>
            <div className='copyright'>
            <hr/>
                <p>Copyright © 2022. All rights reserved.</p>
            </div>
        
    </div>
  )
}

export default Footer