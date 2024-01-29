import React from 'react'
import { useState } from 'react';

export default function DeporWdraw({accno}) {
    const [res,setRes]=useState("");
    const deposit=async()=>{
        const response =await fetch('http://localhost:8080/close',{
            method:"delete",
            headers: {
                'Content-Type': 'application/json'
            },
            body:accno
        }).then((response)=>{return response.json()}).then((data)=>setRes(data)).catch((error)=>console.log(error))
    }

    const withdraw=async()=>{
        const response =await fetch('http://localhost:8080/close',{
            method:"delete",
            headers: {
                'Content-Type': 'application/json'
            },
            body:accno
        }).then((response)=>{return response.json()}).then((data)=>setRes(data)).catch((error)=>console.log(error))
    }
  return (
    <div>
      <form>
        <label for="amt">Enter amount</label>
        <input type='number' id="amt" className='amt'></input>
        <button>Initiate Transaction</button>
      </form>
    </div>
  )
}
