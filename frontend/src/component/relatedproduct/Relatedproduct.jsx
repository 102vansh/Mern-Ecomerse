import React from 'react'
// import data_product from '../../assets/data'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Item from '../item/Item'
import './relatesproduct.css'
const Relatedproduct = () => {
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
    <div className='relatedproduct'>
    <h1>Related Products</h1>
    <hr/>
    <div className='related-items'>
        {popularproduct.map((item,index)=>{
            return <Item key={index} name={item.name} new_price={item.new_price} old_price={item.old_price}  image={item.image.url} id={item._id}/>
        })}
    </div>
    </div>
  )
}

export default Relatedproduct