import React, { useContext, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Shopcontext } from '../../context/Storecontext'
import toast,{Toaster} from 'react-hot-toast'
const Navbar = () => {
    const[menu,setmenu] = useState('shop')
    const{gettotalitem} = useContext(Shopcontext)
  const navigate  = useNavigate()
  return (
    <div className='navbar'>
    <div className='logo'>
       <img src={logo} ></img>
       <p>SHOPPY</p>
       </div>
    <ul className='nav-menu'>
       <li onClick={() => setmenu('shop')}><Link to={`/`}>Shop</Link>{menu==='shop' ? <hr/>:''} </li>
       <li onClick={() => setmenu('men')}> <Link to={`/men`}>Men</Link> {menu==='men' ? <hr/>:''}</li>
       <li onClick={() => setmenu('women')}> <Link to={`/women`}>Women</Link>  {menu==='women' ? <hr/>:''}</li>
       <li onClick={() => setmenu('kid')}> <Link to={`/kid`}>Kids</Link> {menu==='kid' ? <hr/>:''}</li>
       </ul>
       <div className='nav-login'>
       {
      localStorage.getItem('token') ? <button onClick={() => localStorage.removeItem('token')&& navigate('/login') && toast.success('Logged out successfully')}>{ localStorage.getItem('token')?'logout':'Login'}</button> : <Link to={`/login`}>  <button>Login</button> </Link>

      
        
      }
       

       <Link to={`/cart`}>   <img src={cart_icon} /> </Link>
        <div className='count'>{gettotalitem()}</div>
       </div>
       <Toaster/>
    </div>
  )
}

export default Navbar