import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css';
export default function Navbar(props) {
  return (
    
      <nav className='navbar'>
        <br></br>
        <NavLink className='nl' to='/openAC'>Open a new Account  </NavLink>
        <NavLink className='nl' to='/accounts'>  Manage account  </NavLink>
        <NavLink className='nl' to='/statement'>  Monthly Statement  </NavLink>
        <NavLink className='nl' to='/interest'>  Quarterly Interest </NavLink>    
      </nav>
    
  )
}
