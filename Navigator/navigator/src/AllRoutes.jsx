import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import AboutPage from './Components/AboutPage'
import ProductPage from './Components/ProductPage'
import LoginPage from './Components/LoginPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/product" element={<ProductPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      
    </div>
  )
}

export default AllRoutes
