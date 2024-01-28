import '../css/Account.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Account(props) {
    const[bal,setBal]=useState();
    const getBal=async()=>{
        const response=await fetch("http://localhost:8080/getBalance",{
          method: "post",
            headers: {
              'Content-Type': 'application/json'
            },
          body:props.accno
        })
        .then((response)=>{console.log(response);return response.json();})
        .then((data)=>{console.log(data);setBal(data);})
        .catch((error)=>{setBal("Error fetching balance! Check your account number")});
      }
  return (
    <div className='account'>
      <h4>Account Number:{props.accno}</h4>
      <button onClick={getBal}>Get Balance</button>
      <p>{bal}</p>
      <Link to={{
        pathname:'/history',
        aboutProps:{accno:props.accno}
    }} >View Transaction History</Link>
    </div>
  )
}
