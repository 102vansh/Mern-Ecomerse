import React from 'react'
import './newcollection.css'
import axios from 'axios'
// import new_collection from '../../assets/new_collections'
import Item from '../item/Item'
import { useState } from 'react'
import { useEffect } from 'react'
const Newcollection = () => {
  const [new_collection,setnewcoll] = useState([])
  const newcollections = async()=>{
const response =  await axios.get('http://localhost:4001/api/v1/product/new',{
  withCredentials:true
})
console.log(response.data)
setnewcoll(response.data.newcollection)
  }
  useEffect(()=>{
    newcollections()
  },[])
  return (
    <div className='newcollection'>
        <h1>New Collection</h1>
        <hr/>
        <div className='newcollection-items'>
            {new_collection.map((item,index)=>{
return <Item name={item.name} image={item.image.url} key={index} new_price={item.new_price} old_price={item.old_price} id={item._id}/>
            })
            }
        </div>
    </div>
  )
}

export default Newcollection