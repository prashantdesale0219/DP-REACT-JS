import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Description from './components/Description'
import PrivatePage from './components/PrivatePage'
import Login from './components/Login'
import Addproduct from './components/Addproduct'
import EditProduct from './components/EditProduct'


const Allroutes = () => {
  return (
    <div>
      <Routes>
         <Route path='/home' element={<Home/>}></Route>
         <Route path='/product' element={<PrivatePage><Product/></PrivatePage>}></Route>
         <Route path='/addproduct' element={<PrivatePage><Addproduct/></PrivatePage>}></Route>
         <Route path='/description/:id' element={<Description/>}></Route>
         <Route path='/editproduct/:id' element={<EditProduct/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
