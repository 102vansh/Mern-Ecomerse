import React, { useContext } from 'react'
import './css/shopcategory.css'
import { Shopcontext } from '../context/Storecontext'
import dropdown from '../assets/dropdown_icon.png'
import Item from '../component/item/Item'
const Shopcategory = (props) => {
  const{all_product} = useContext(Shopcontext)
  return (
    <div className='shopcategory'>
        <img className='banner' src={props.banner} alt="" />
        <div className='index-sort'>
        <p><span style={{marginLeft:'30px'}}>showing 1-12</span>out of 36 products</p>
        
        <div className='sort'>
          sort by <img   src={dropdown} alt="" />
        </div>
        </div>
<div className='products'>
  {

    all_product?.map((item,i)=>{
      console.log(item.category)
      if(props.category===item.category){
        console.log(item)
        return <Item id={item?._id} name={item.name} new_price={item.new_price} image={item?.image?.url} old_price={item.old_price} key={i}/>
      }
      else return null
    })
  }
</div>
<div className='loadmore'>
  loadmore
</div>
    </div>
  )
}

export default Shopcategory