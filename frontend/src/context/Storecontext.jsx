// import { useEffect } from "react";
// import { createContext } from "react";
// // import all_product from '../assets/all_product'
// import { useState } from "react";
// export const Shopcontext = createContext(null)
// import axios from "axios";


// const getdefaultcart = ()=>{
//     let cart = {}
//     for(let index = 0; index<300 +1 ; index++){
//         cart[index] = 0
//     }
//     return cart
// }



// const Shopcontextprovider = (props) =>{
// const[all_product,setAllproduct] = useState([])
// const[cart,setCart] = useState(getdefaultcart())


// const getallproduct = async()=>{
//     try{
//     const reponse = await axios.get('http://localhost:4001/api/v1/product/get',
//     {
//         headers:{
//             'Content-Type':'application/json'
//         }
//     })  
//     console.log(reponse.data.product)
// setAllproduct(reponse.data.product)

// }
// catch(error){
//     console.log(error)
// }

// }

// const addtocart = async(itemid)=>{
//     console.log(itemid)
//     try{
// setCart((prev)=>({...prev,[itemid]:prev[itemid]+1}))
// if (localStorage.getItem('token')) {
//  const response =  await axios.post('http://localhost:4001/api/v1/user/addtocart', {itemid}, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//     })
//     console.log(response.data)
// }

// }catch(error){
//     console.log(error)
// }




// }

// const removefromcart = async(itemid)=>{
//     setCart((prev)=>({...prev,[itemid]:prev[itemid]-1}))
//     if(localStorage.getItem('token')){
// try{
// const response = await axios.post('http://localhost:4001/api/v1/user/removecart', {itemid}, {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//     }
// })
// console.log(response.data)
// }catch(error){
// console.log(error)
// }
//     }
// }
// const totalcartamount = ()=>{
//     let total = 0
//     for(const item in cart){
//         if(cart[item] > 0){
//             console.log(item._id)
//             let iteminfo = all_product.find((product)=> product?._id === item)
//             total += cart[item] * iteminfo.new_price
//         }
//     }
//     console.log(total)
//     return total
//         }
//         const gettotalitem = ()=>{
//             let total = 0
//             for(const item in cart){
//                 if(cart[item] > 0){
//                     total += cart[item]
//                 }
//             }
//             return total
//         }
//         const getcart = async()=>{
//             try{
//             if(localStorage.getItem('token')){
//                 const response = await axios.get('http://localhost:4001/api/v1/user/getcart', {
//                     headers: {
                    
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${localStorage.getItem('token')}`
//                     }
//                 })
//                 console.log(response.data)
//                 setCart(response.data.userdata)
//                 console.log(cart)
//             }else{
//                 conole.log('no cartdata')
//             }
//         }
//         catch(error){
//             console.log(error)
//         }
//     }

//       useEffect(()=>{
//           getallproduct()
//           getcart()
//       },[])  

// const contextvalue = {all_product,addtocart,removefromcart,cart,setCart,totalcartamount,gettotalitem}
//     return (
//         <Shopcontext.Provider value={contextvalue}>
//             {props.children}
//         </Shopcontext.Provider>
//     )
// }

// export default Shopcontextprovider

import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const Shopcontext = createContext(null);

const getdefaultcart = () => {
    let cart = {};
    for (let index = 0; index <= 300; index++) {
        cart[index] = 0;
    }
    return cart;
}

const Shopcontextprovider = (props) => {
    const [all_product, setAllproduct] = useState([]);
    const [cart, setCart] = useState(getdefaultcart());
     const[token,settoken] = useState(null)


     const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);

         console.log(selectedSize);
    };

    const handleAddToCart = () => {
        if (selectedSize) {
            addtocart(product._id, selectedSize);
        } else {
            alert('Please select a size');
        }
    };


    const getallproduct = async () => {
        try {
            const response = await axios.get('http://localhost:4001/api/v1/product/get', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setAllproduct(response.data.product);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    const getcart = async () => {
        try {
            if (localStorage.getItem('token')) {
                const response = await axios.get('http://localhost:4001/api/v1/user/getcart', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setCart(response.data.userdata.cartdata);
            } else {
                console.log('No cart data available');
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    }

    const addtocart = async (itemid) => {
        setCart((prev) => ({ ...prev, [itemid]: (prev[itemid] || 0) + 1 }));
        if (localStorage.getItem('token')) {
            try {
                const response = await axios.post('http://localhost:4001/api/v1/user/addtocart', { itemid }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error adding to cart:', error);
            }
        }
    }

    const removefromcart = async (itemid) => {
        setCart((prev) => ({ ...prev, [itemid]: (prev[itemid] || 1) - 1 }));
        if (localStorage.getItem('token')) {
            try {
                const response = await axios.post('http://localhost:4001/api/v1/user/removecart', { itemid }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error removing from cart:', error);
            }
        }
    }

    const totalcartamount = () => {
        let total = 0;
        for (const item in cart) {
            if (cart[item] > 0) {
                const iteminfo = all_product.find((product) => product?._id === item);
                if (iteminfo) {
                    total += cart[item] * iteminfo.new_price;
                }
            }
        }
        console.log( typeof total,total);
        return total;
    }

    const gettotalitem = () => {
        let total = 0;
        for (const item in cart) {
            if (cart[item] > 0) {
                total += cart[item];
            }
        }
        return total;
    }


    // async function loaddata() {
        
    //     if(localStorage.getItem('token')){
    //       settoken(localStorage.getItem('token'))
    //       console.log(token)
    //     }
    //   }
     
    


    useEffect(() => {
        getallproduct();
        getcart();
        // loaddata();
    }, []);

    const contextvalue = { all_product, addtocart, removefromcart, cart, setCart, totalcartamount, gettotalitem,token,settoken,handleSizeClick,handleAddToCart,selectedSize, setSelectedSize };

    return (
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    );
}

export default Shopcontextprovider;
