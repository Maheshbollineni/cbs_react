import React from 'react'
import { NavLink } from 'react-router-dom';
import bank from '../css/bank.jpg'; 
import Empdashboard from './Empdashboard';

export default function EmpHome(props) {
  return (
    <div className='home'>
    
         {props.isEmpLoggedIn ? (
        <div>
          <Empdashboard empid={props.empid} />
        </div>
      ) : (
        <div>
      <h1 className='welcome'>CBS Employee Portal</h1>
      <NavLink className='login' to='/emplogin'>Login</NavLink>
      <NavLink className='register' to='/empregister'>Register</NavLink>
    </div>  
      )}
      </div>
  )
}
