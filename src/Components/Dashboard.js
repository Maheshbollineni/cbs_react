import React, { useState } from 'react'
import Navbar from './Navbar'
import Accounts from './Accounts';
export default function Dashboard(props) {
  const[account,SetAccount]=useState([]);

  return (
    <div>
      <Navbar></Navbar>
      <h1>Welcome Customer {props.customerid}</h1>
      Your accounts
      <Accounts accno="123"></Accounts>
    </div>
  )
}
