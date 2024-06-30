// import React, { useContext } from 'react'
// import './display.css'
// import star_icon from '../../assets/star_icon.png'
// import star_dull_icon from '../../assets/star_dull_icon.png'
// import { Shopcontext } from '../../context/Storecontext'
// const Display = (props) => {
//     const{product} = props
//     const{addtocart} = useContext(Shopcontext)
//     console.log(product?._id)
//   return (
//     <div className='display'>
//     <div className='display-left'>
// <div className='image-list'>
// <img src={product?.image?.url} alt=""/>
// <img src={product?.image?.url} alt=""/>
// <img src={product?.image?.url} alt=""/>
// <img src={product?.image?.url} alt=""/>

// </div>
// <div className='display-img'>
// <img src={product?.image?.url} alt=""/>
// </div>
    
//     <div className='display-right'>
//     <h1>{product?.name}</h1>
//     <div className='stars'>
//         <img src={star_icon} alt=""/>
//         <img src={star_icon} alt=""/>
//         <img src={star_icon} alt=""/>
//         <img src={star_icon} alt=""/>
//         <img src={star_dull_icon} alt=""/>
//         <p>122</p>
    
//     </div>
//     <div className='right-prices'>
//         <div className='new_price'>$ {product?.old_price}</div>
//         <div className='old_price'>$ {product?.new_price}</div>
//     </div>
//     <div className='right-description'>
//         a light weight and durable watch for everyday use with a stylish design.
//     </div>
//     <div className='right-size'>
// <div>S</div>
// <div>M</div>
// <div>L</div>

// <div>XL</div>
// <div>XXL</div>
//     </div>
    
    
//     <div className='right-button'>
//         <button onClick={() => addtocart(product?._id)}>Add to cart</button>

//     </div>
// <div className='right-category'>
//     <span>Category :</span> Women, T-shirt ,Criop-top
// </div>
// <div className='right-category'>
//     <span>Category :</span> Women, T-shirt ,Criop-top
// </div>
// </div>
//     </div>
//     </div>
//   )
// }

// export default Display


import React, { useState, useContext } from 'react';
import './display.css';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';
import { Shopcontext } from '../../context/Storecontext';

const Display = (props) => {
    const { product } = props;
    const { selectedSize, handleSizeClick, handleAddToCart } = useContext(Shopcontext);
    
    

    return (
        <div className='display'>
            <div className='display-left'>
                <div className='image-list'>
                    <img src={product?.image?.url} alt="" />
                    <img src={product?.image?.url} alt="" />
                    <img src={product?.image?.url} alt="" />
                    <img src={product?.image?.url} alt="" />
                </div>
                <div className='display-img'>
                    <img src={product?.image?.url} alt="" />
                </div>
            </div>
            <div className='display-right'>
                <h1>{product?.name}</h1>
                <div className='stars'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div>
                <div className='right-prices'>
                    <div className='new_price'>$ {product?.old_price}</div>
                    <div className='old_price'>$ {product?.new_price}</div>
                </div>
                <div className='right-description'>
                    A lightweight and durable watch for everyday use with a stylish design.
                </div>
                <div className='right-size'>
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                        <div
                            key={size}
                            className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => handleSizeClick(size)}
                        >
                            {size}
                        </div>
                    ))}
                </div>
                <div className='right-button'>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
                <div className='right-category'>
                    <span>Category:</span> Women, T-shirt, Crop-top
                </div>
            </div>
        </div>
    );
};

export default Display;
