import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from '../image/instalogo.png'

const Navbar = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/home">
    <img src={logo} alt="" />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav ms-auto">
      
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login"> Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup"> Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout"> Logout</NavLink>
      </li>
     
    </ul>
   
  </div>
</nav>
     </>
  )
}

export default Navbar
