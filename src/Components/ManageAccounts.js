import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import Manage from './Manage';
export default function ManageAccounts(props) {

  const [accounts,setAccounts]=useState([]);

  useEffect(()=>{
      const response= fetch("http://localhost:8080/getAccount",{
      method:"post",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        custid:props.custid
      })
    })
    .then((response)=>{console.log(response); return response.json();})
    .then((data)=>{console.log("manage"+data); setAccounts(data);})
    .catch((error)=>{console.log(error)})
  },[])

  return (
    <div>
      <Navbar/>
      <>
      {
        accounts.map((data)=>{
          return(
            <div>
              <Manage accno={data}></Manage>
              </div>
          );  
            }
        )
    }
    </>
    </div>
  )
}
