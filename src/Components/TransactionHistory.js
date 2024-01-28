import React from 'react'
import { useLocation } from 'react-router-dom'

export default function TransactionHistory() {
  const location=useLocation();
  const accno = location.state?.accno || 'No accno provided';
  console.log(location.state)
  return (
    <div>
      <p>{accno}</p>
    </div>
  )
}
