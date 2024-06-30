import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../../context/Storecontext'
import { useNavigate } from 'react-router-dom'
import './placeorder.css'
import axios from 'axios'
const Placeorder = () => {
  const{totalcartamount,cart,all_product,selectedSize} = useContext(Shopcontext)
const navigate = useNavigate()
const[data,setdata ] = useState({
  firstname:'',
  lastname:'',
  email:'',
  street:'',
  city:'',
  state:'',
  pincode:'',
  country:'',
  phone:'',
})
const onchangehandler = (e)=>{
  const name = e.target.name
  const value = e.target.value
  setdata({...data,[name]:value})
}



useEffect(()=>{
console.log(data)
},[data])



const orderplace = async (e) => {
    e.preventDefault();
  
    let orderitems = [];
    all_product.forEach((item) => {
      if (cart[item._id] > 0) {
        let iteminfo = { ...item };
        iteminfo['quantity'] = cart[item._id];
        console.log('Item price:', iteminfo.new_price, 'Type:', typeof iteminfo.new_price);
        console.log('Item name:', iteminfo.name, 'Type:', typeof iteminfo.name);
        console.log('Item id:', iteminfo._id, 'Type:', typeof iteminfo._id);
        console.log(typeof iteminfo.old_price);
        console.log('Item quantity:', iteminfo['quantity'], 'Type:', typeof iteminfo['quantity']);
        orderitems.push(iteminfo);
      }
    });
  
    let totalAmount = totalcartamount();
    console.log('Total Amount:', totalAmount, 'Type:', typeof totalAmount);
  
    if (isNaN(totalAmount)) {
      alert('Total amount calculation resulted in NaN. Please check your cart items.');
      return;
    }
  
    let orderdata = {
      address: data,
      items: orderitems,
      totalamount: parseFloat(totalAmount),
      size: selectedSize

    };
  
    console.log('Order data being sent:', orderdata);
  
    try {
      let response = await axios.post(`http://localhost:4001/api/v1/order/create`, orderdata, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`

        }
      });
  
      console.log('Response data:', response.data);
  
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.assign(session_url);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };
  


  return (
    <form className='placeorder' onSubmit={orderplace}>
      <div className='placeorder-left'>
<p className='title'>Delivery Information</p>
<div className='multi-field'>
  <input required name='firstname' onChange={onchangehandler} value={data.firstname} type="text" placeholder='FirstName' />
  <input required name='lastname' onChange={onchangehandler} value={data.lastname} type="text" placeholder='LatName' />
</div>
<input required name='email' onChange={onchangehandler} value={data.email} type="email" placeholder='Email' />
<input required name='street' onChange={onchangehandler} value={data.street} type='text' placeholder='Street' />
<div className='multi-field'>
  <input required name='city' onChange={onchangehandler} value={data.city}  type="text" placeholder='City' />
  <input required name='state' onChange={onchangehandler} value={data.state} type="text" placeholder='State' />
</div>
<div className='multi-field'>
  <input required name='pincode' onChange={onchangehandler} value={data.pincode} type="number" placeholder='Pincode' />
  <input required name='country' onChange={onchangehandler} value={data.country} type="text" placeholder='Country' />
</div>
<input required name='phone' onChange={onchangehandler} value={data.phone} type ='number' placeholder='Phone' />
      </div>
      <div className='placeorder-right'>
      <div className='total'>
      <h2>Cart Totals</h2>
      <div>
        <div className='details'>
          <p>Subtotal</p>
          <p>${totalcartamount()}</p>
        </div>
        <hr/>
        <div className='details'>
<p>Delivery Fee</p>
<p>Free</p>

        </div>
        <hr/>
        <div className='details'>
<b>Total</b>
<b>$ {totalcartamount()}</b>
        </div>
      </div>
      <button type='submit'>Place Order</button>
    </div>
      </div>
    </form>
  )
}

export default Placeorder


