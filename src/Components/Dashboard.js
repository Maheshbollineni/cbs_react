import React, { useState } from 'react'
import Navbar from './Navbar'
export default function Dashboard(props) {
  const[account,SetAccount]=useState([]);

  return (
    <div>
      <Navbar></Navbar>
      <h1>Welcome Customer {props.customerid}</h1>
      View your accounts
      
    </div>
  )
}
