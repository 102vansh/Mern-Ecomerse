import React, { useContext } from 'react'
import { Shopcontext } from '../context/Storecontext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../component/breadcrum/Breadcrum'
import Display from '../component/display/Display'
import Descriptionbox from '../component/description/Descriptionbox'
import Relatedproduct from '../component/relatedproduct/Relatedproduct'

const Product = () => {
  const{all_product} = useContext(Shopcontext)
  const {productid} = useParams()
  const product = all_product.find((e)=>e?._id === productid)
  return (
    <div>
<Breadcrum Product = {product} />
<Display product = {product} />
<Descriptionbox/>
<Relatedproduct/>
    </div>
  )
}

export default Product