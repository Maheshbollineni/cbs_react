import React, { useState } from 'react'
import Navbar from './Navbar'
import Accounts from './Accounts';
export default function Dashboard(props) {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Welcome Customer {props.customerId}</h1>
      Your accounts
     <div>
       <h2>
         Accounts Details 
      </h2>
    </div>
      <Accounts custid={props.customerId}></Accounts>
    </div>
  )
}
