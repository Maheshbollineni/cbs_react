import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    
      <nav className='navbar'>
        <NavLink to='/openAC'>OpenAccount  |</NavLink>
        <NavLink to='/accounts'>  Manage accounts | </NavLink>
        <NavLink to='/statement'>  Monthly Statement | </NavLink>
        <NavLink to='/interest'>  Quarterly Interest </NavLink>    
      </nav>
    
  )
}
