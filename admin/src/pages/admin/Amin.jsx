import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Addproduct from '../addproduct/Addproduct'
import Listproduct from '../../component/list/Listproduct'
import Order from '../orders/Orders'

const Amin = () => {
  return (
    <div style={{display:'flex'}} className='amin'>
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<Addproduct/>}/>
            <Route path='/listproduct' element={<Listproduct/>}/>
            <Route path='/orders' element={<Order/>}/>
        </Routes>
    </div>
  )
}

export default Amin