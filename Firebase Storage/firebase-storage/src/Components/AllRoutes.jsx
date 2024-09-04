import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './ProductsPage'
import Description from './Description'
import EditProducts from './EditProducts'
import AddProducts from './AddProducts'
import HomePage from './HomePage'
import PrivateAuthentication from './PrivateAuthentication'
import LoginSignUp from '../Pages/LoginSignUp'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<PrivateAuthentication><ProductsPage/></PrivateAuthentication>}/>
        <Route path='/description/:id' element={<Description/>}/>
        <Route path='/editPage/:id' element={<EditProducts/>}/>
        <Route path='/addProducts' element={<AddProducts/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
