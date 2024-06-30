import React from 'react'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import Shopcategory from './pages/Shopcategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Footer from './component/footer/Footer'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import { Toaster } from 'react-hot-toast'
import Placeorder from './pages/placeorder/placeorder'
import Verify from './pages/verify/Verify'
import Myorder from './pages/myorders/Myorder'
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Shop/>}></Route>
      <Route path='/men' element={<Shopcategory banner ={men_banner}  category='men'/>}></Route>
      <Route path='/women' element={<Shopcategory banner ={women_banner} category='women'/>}></Route>
      <Route path='/kid' element={<Shopcategory banner ={kid_banner} category='kid'/>}></Route>
      <Route path='/product' element={<Product/>}>
      <Route path=':productid' element={<Product/>}></Route>
      </Route>
      <Route path='/cart' element = {<Cart/>}></Route>
      <Route path='/login' element= {<Login/>}></Route>
      <Route path='/placeorder' element={<Placeorder/>}></Route>
      <Route path='/verify' element={<Verify/>}></Route>
      <Route path='/myorders' element={<Myorder/>}></Route>
    </Routes>
<Footer/>
    </BrowserRouter>
    <Toaster/>
     
    </div>
  )
}

export default App