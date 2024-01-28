import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Accounts(props) {
    const[bal,setBal]=useState();
    const getBal=()=>{

    }
  return (
    <div>
      <h2>
        Account Details:
      </h2>
      <h4>Account Number:{props.accno}</h4>
      <button onClick={getBal}>Get Balance</button>
      <p>{bal}</p>
      <NavLink to='/history'>View Transaction History</NavLink>
    </div>
  )
}
