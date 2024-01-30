import React from 'react'
import { useLocation } from 'react-router-dom/dist';
import { useState } from 'react'
import '../css/TransactionHistory.css';
export default function Monthlystatement() {
  const[accno,setaccno]=useState();
  const [mn,setmn]=useState();
  const [transactions,setTransactions] = useState([]);
  const handlechange=(event)=>{
    setaccno(event.target.value);
  }
  console.log("http://localhost:8080/monthly/?month="+{mn}+"&accountno="+{accno});
  const getTransactions = async () => {
    try {
      console.log("mn value: ",typeof(mn))
      const response = await fetch(`http://localhost:8080/monthly?accountno=${accno}&month=${mn}`, {
        method: "Get",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      // setTransactions([{ transactionStatus: "Error fetching transactions" }]);
    }
  }
  const submitMonth = ()=>{
    getTransactions();
  }
  return (
    <div>
      <label>Enter Account Number</label>
      <input type="text" onChange={handlechange} />
      
      <br/>
      <label for="monthSelect">Select a Month:</label>
    <select id="monthSelect" onChange={(e)=>{console.log(e.target.value);setmn(parseInt(e.target.value, 10))}}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
    </select>
    <button onClick={submitMonth}>Submit</button>
    <p>Statement for account no: {accno}</p>
      {console.log(transactions)}
      {/* <p>{transactions.map((transaction)=>console.log(transaction))}</p> */}
      <table className='transaction-table'>
      <thead>
        <tr>
          {/* Use Object.keys() to get the field names from the first transaction object */}
          {transactions.length > 0 &&
            Object.keys(transactions[0]).map((field) => (
              <th key={field}>{field}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            {/* Use Object.values() to get the values of each field in the transaction object */}
            {Object.values(transaction).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    
    </div>
  )
}
