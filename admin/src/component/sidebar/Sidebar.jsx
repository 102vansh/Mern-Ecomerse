import React from 'react'
import './sidebar.css'

import add_product from '../../Ecommerce_Admin_Panel_Assets/Admin Panel Assets/Product_Cart.svg'
import {Link } from 'react-router-dom'
import list_product from '../../Ecommerce_Admin_Panel_Assets/Admin Panel Assets/Product_list_icon.svg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
<Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
    <div className='sidebarItem'>
<img src={add_product} alt="" />
<p>Add Product</p>

</div>
</Link>
<Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
    <div className='sidebarItem'>
<img src={list_product} alt="" />
<p>Product List</p>

</div>
</Link>
<Link to={'/orders'} style={{ textDecoration: 'none' }}>
    <div className='sidebarItem'>
<img src={list_product} alt="" />
<p>Orders List</p>

</div>
</Link>

    </div>
  )
}

export default Sidebar