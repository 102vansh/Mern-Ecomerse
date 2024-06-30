// import React, { useContext } from 'react'
// import { Shopcontext } from '../../context/Storecontext'
// import remove from '../../assets/cart_icon.png'
// import { Link } from 'react-router-dom'
// import './cartitem.css'
// const Cartitem = () => {
//     const{all_product,addtocart,removefromcart,cart,totalcartamount} = useContext(Shopcontext)
//     console.log(cart)
//   return (
//     <div className='cartitem'>
// <div className='cart-main'>
//     <p>Products</p>
//     <p>Title</p>
//     <p>Price</p>
//     <p>Quantity</p>
//     <p>Total</p>
//     <p>Remove</p>
// </div>
// <hr/>

// {
//     all_product.map((item)=>{
      
//         const itemQuantity = cart[item?._id];
// {/* m?._id, 'Quantity:', itemQuantity); // Log each item ID and quantity        console.log('Item ID:', ite */}
// console.log(itemQuantity)
//        console.log(typeof item.new_price) 
        
// if(itemQuantity > 0){
  
// return <div key={item?._id}>

// <div  className='cart-items-format cartitems-format-main'>
// <img style={{width:'110px',borderRadius:'10px'}} src={item?.image?.url}></img>
// <p>{item?.name}</p>
// <p>{item?.new_price}</p>
// <button className='quantity'>{cart[item?._id]}</button>
// <p style={{marginLeft:'70px'}}>{item.new_price*cart[item?._id]}</p>
// <button className='remove' onClick={()=>removefromcart(item?._id)}> remove</button>
// </div>
// <hr/>
// </div>

// }
// return null

//     })
    
// }
// <div className='promocode'>
//     <p>If you have a promocode click here</p>
//     <div className='promocode-input'>
//     <input type='text'></input>
//     <button>Apply</button>
//     </div>
//     </div>
// <div className='cart-down'>
//     <div className='cart-total'>
//     <h1>Cart Totals</h1>
//     <div>
//         <div className='cart-total'>
//             <p>Subtotal</p>
//             <p>${totalcartamount()}</p>
//         </div>
//         <hr/>
//         <div className='cart-total'>
//             <p>Shipping</p>
//             <p>Free</p>
//         </div>
//         <hr/>
//         <div className='cart-total'>
//             <p>Total</p>
//             <p>${totalcartamount()}</p>
//         </div>
//         <hr/>
//      <Link to={'/placeorder'} ><button>Checkout</button></Link> 
//     </div>
    
//     </div>
// </div>
//     </div>
//   )
// }

// export default Cartitem

import React, { useContext } from 'react';
import { Shopcontext } from '../../context/Storecontext';
import { Link } from 'react-router-dom';
import './cartitem.css';

const Cartitem = () => {
  const { all_product, removefromcart, cart, totalcartamount,selectedSize } = useContext(Shopcontext);

  console.log(cart); // Check what `cart` contains

  return (
    <div className='cartitem'>
      <div className='cart-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>size</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((item) => {
        const itemQuantity = cart[item._id] ?? 0; // Default to 0 if cart[item._id] is undefined
        console.log('Item ID:', item._id, 'Quantity:', itemQuantity);

        if (itemQuantity > 0) {
          return (
            <div key={item._id}>
              <div className='cart-items-format cartitems-format-main'>
                <img style={{ width: '110px', borderRadius: '10px' }} src={item?.image?.url} alt={item.name} />
                <p >{item.name}</p>
                <p >{item.new_price}</p>
                <button className='quantity'>{itemQuantity}</button>
                <p  >{selectedSize}</p>
                <p  >{item.new_price * itemQuantity}</p>
                <button  className='remove' onClick={() => removefromcart(item._id)}>Remove</button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className='promocode'>
        <p>If you have a promocode click here</p>
        <div className='promocode-input'>
          <input type='text'></input>
          <button>Apply</button>
        </div>
      </div>

      <div className='cart-down'>
        <div className='cart-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cart-total'>
              <p>Subtotal</p>
              <p>${totalcartamount()}</p>
            </div>
            <hr />
            <div className='cart-total'>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cart-total'>
              <p>Total</p>
              <p>${totalcartamount()}</p>
            </div>
            <hr />
            <Link to={'/placeorder'}>
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
