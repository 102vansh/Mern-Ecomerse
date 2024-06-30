import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
const Item = ({id,name,image,old_price,new_price}) => {
    
  return (
    <div className='item'>
 <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} src={image} alt=""/></Link>
<p>{name}</p>
<div className='item-prices'>
    <div className='price-new'>
        $ {new_price}
    </div>
    <div className='price-old'>
        {old_price}
    </div>

</div>


    </div>
  )
}

export default Item