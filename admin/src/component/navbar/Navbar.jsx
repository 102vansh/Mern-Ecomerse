import React from 'react'
import navlogog from '../../Ecommerce_Admin_Panel_Assets/Admin Panel Assets/nav-logo.svg'
import './navbar.css'
import navprofile from '../../Ecommerce_Admin_Panel_Assets/Admin Panel Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogog} alt="" />
        <img src={navprofile} alt="" />
    </div>
  )
}

export default Navbar