import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EmpNavBar() {
  return (
    <nav className='navbar'>
        <br></br>
        <NavLink to='/openAC'>Open a new Account  |</NavLink>
        <NavLink to='/accounts'>  Manage account | </NavLink>
        <NavLink to='/statement'>  Monthly Statement | </NavLink>
        <NavLink to='/interest'>  Quarterly Interest </NavLink>  
      </nav>
  )
}
