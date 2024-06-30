import React from 'react'
import { useEffect } from 'react'
// import data_product from '../../assets/data'
import Item from '../item/Item'
import './popular.css'
import { useState } from 'react'
import axios from 'axios'
const Popular = () => {
  const[popularproduct,setpopularproduct]=useState([])

const getpoularproduct=async()=>{
  const {data}=await axios.get('http://localhost:4001/api/v1/product/women',{
    headers:{
      'Content-Type':'application/json'
    }
  })
  console.log(data)
  setpopularproduct(data.poularinwomens)
}
  useEffect(()=>{
    getpoularproduct()
  },[])  
  return (
    <div className='popular'>
    <h1>Popular in Women</h1>
    <hr/>
    <div className='popular-items'>
{popularproduct.map((item,index)=>{
  return(
    console.log(item),
<Item key={index} name={item.name} id ={item._id }  image={item.image.url} new_price={item.new_price} old_price={item.old_price}/>
  )
})
}
    

    </div>

    </div>
  )
}

export default Popular