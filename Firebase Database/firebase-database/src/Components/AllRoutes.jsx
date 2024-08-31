import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import PrivateAuthentication from './PrivateAuthentication'
import DashboardPage from './DashboardPage'
import LoginSignUp from '../Pages/LoginSignUp'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/dashboard" element={<PrivateAuthentication><DashboardPage /></PrivateAuthentication>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
    
    </Routes>
  )
}

export default AllRoutes
