import React from 'react'
import '../css/Home.css';
import { NavLink } from 'react-router-dom';
import bank from '../css/bank.jpg'; 
import Dashboard from './Dashboard';
export default function Home(props) {
  return (
    <div className='home'>
         {props.loggedIn ? (
        <div>
          {/* <h1>Welcome, Customer {props.custid}</h1> */}
          <Dashboard customerId={props.custid} />
        </div>
      ) : (
        <div>
      <h1 className='welcome'>Welcome to CBS</h1>
      <NavLink className='login' to='/UserLogin'>Login</NavLink>
      <NavLink className='register' to='/Register'>Register</NavLink>
    </div>  
      )}
      </div>
  );
}
