import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">
      <NavLink  to="/" className="nav-item" >Home</NavLink>
      <NavLink to="/dashboard" className="nav-item" >Products</NavLink>
      <NavLink to="/login" className="nav-item" >Login</NavLink>
    </nav>
  );
}

export default Navigation;