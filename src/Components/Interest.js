import React, { useState } from 'react'
import EmpNavBar from './EmpNavBar'

export default function Interest() {
  const[val,setVal]=useState("");

  const calcInt =async()=>{
    const response= await fetch('http://localhost:8080/calInterest')
  }
  return (
    <div>
      <EmpNavBar></EmpNavBar>
      <button onClick={calcInt}>Generate Quarterly Interest For all Accounts</button>
      <p>{val}</p>
    </div>
  )
}
