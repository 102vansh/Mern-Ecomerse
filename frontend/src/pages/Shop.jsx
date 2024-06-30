import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/Popular'
import Offer from '../component/offers/Offer'
import Newcollection from '../component/newcollection/Newcollection'
import Newslater from '../component/newslater/Newslater'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <Newcollection/>
         <Newslater/> 
    </div>
  )
}

export default Shop