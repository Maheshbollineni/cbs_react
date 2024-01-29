import React,{ useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../css/TransactionHistory.css';

export default function TransactionHistory(props) {
  const accno = props.accno || 'No accno provided';
  const [transactions,setTransactions] = useState([]);
  const getTransactions = async () => {
    try {
      const response = await fetch("http://localhost:8080/statement", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ accountno: accno })
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

  useEffect(() => {
    getTransactions();
  }, []); 


  return (
    <div className='filter'>
      <h3>Transaction history for account no: {accno}</h3>
      <br></br>
      <div>
      <label>Start Date </label>
      <input type='date'></input>
      <label> End Date </label>
      <input type='date'></input>
      </div>
      <br></br>
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
