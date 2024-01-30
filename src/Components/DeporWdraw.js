import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

export default function DeporWdraw() {
    const [res,setRes]=useState("");
    const[rec,setRec]=useState();
    const[sender,setSender]=useState();
    const[amt,setAmt]=useState();
    const handleSubmit= async(e)=>{
      e.preventDefault();
      const response =await fetch('http://localhost:8080/transfer',{
        method:"post",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          sender_accountno:sender,
          receiver_accountno:rec,
          amount:amt
        })
      }).then((response)=>{console.log(response); return response.json();})
      .then((data)=>{console.log(data); setRes(data);})
      .catch((error)=>{console.log(error)})
    }
  return (
    <div>
      <Navbar />
      <form className='transfer' onSubmit={handleSubmit}>
        <br></br><br></br>
        <h1>Send money to another account</h1>
        
        < label for="send">Enter Your Account Number </label>
        <input type='number' id="send" className='send' value={sender} onChange={(e)=>{setSender(e.target.value)}}></input>
        <br></br>
      < label for="rec">Enter Reciever Account Number </label>
        <input type='number' id="rec" className='rec' value={rec} onChange={(e)=>{setRec(e.target.value)}}></input>
        <br></br>
        <label for="amt">Enter amount </label>
        <input type='number' id="amt" className='amt' value={amt} onChange={(e)=>{setAmt(e.target.value)}}></input>
        <br></br>
        <button type='submit'>Initiate Transaction</button>
      </form>
      <h3>{res}</h3>
    </div>
  )
}
