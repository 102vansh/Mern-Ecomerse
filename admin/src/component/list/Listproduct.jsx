import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

import './listproduct.css'
const Listproduct = () => {
const[data,setdata] = useState([])
const getproduct = async() => {
    const response = await axios.get('http://localhost:4001/api/v1/product/get', {
        withCredentials: true
    })
    console.log(response.data)
    setdata(response.data.product)
}
const removeproduct = async(id) => {
    try{
    const response = await axios.delete(`http://localhost:4001/api/v1/product/delete/${id}`, {
        withCredentials: true
    })
    console.log(response.data.message)
    console.log(id)
    }catch(error){
        console.log(error)
    }
    await getproduct()
}
useEffect(() => {
    getproduct()
}, [])

  return (
    <div className='listproduct'>
    <h1>Product List</h1>
    <div className='format-main'>
    <p>Product</p>
    <p>Title</p>
    <p>old_price</p>
    <p>new_price</p>
    <p>category</p>
    <p>remove</p>

    </div>
    <div className='lisr-data'>
        {
            data.map((item,index) => (
                <div key={index} className='item'>
                    <img src={item.image?.url} alt="" /> 
                    <p>{item.name}</p>
                
                        <p>{item.new_price}</p>
                        <span>${item.old_price}</span>
                        <p>{item.category}</p>
                        <button onClick={() => removeproduct(item._id)}>Delete</button>
                    
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Listproduct