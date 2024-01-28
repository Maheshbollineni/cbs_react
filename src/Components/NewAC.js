import React, { useState } from 'react'

export default function NewAC() {
    const [formData, setFormData] = useState({
        custid: '',
        ifsccode: '',
        branch: '',
        type: 'savings',
        balance: '',
        nominee1: '',
        nominee2: '',
        upiid: '',
        category: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <h1>Enter the following details</h1>
          <label htmlFor="custid">Customer ID:</label>
          <input type="text" id="custid" name="custid" value={formData.custid} onChange={handleChange} /><br />
    
          <label htmlFor="ifsccode">IFSC Code:</label>
          <input type="text" id="ifsccode" name="ifsccode" value={formData.ifsccode} onChange={handleChange} /><br />
    
          <label htmlFor="branch">Branch:</label>
          <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleChange} /><br />
    
          <label htmlFor="type">Account Type:</label>
          <select id="type" name="type" value={formData.type} onChange={handleChange}>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select><br />
    
          <label htmlFor="balance">Balance:</label>
          <input type="text" id="balance" name="balance" value={formData.balance} onChange={handleChange} /><br />
    
          <label htmlFor="nominee1">Nominee 1:</label>
          <input type="text" id="nominee1" name="nominee1" value={formData.nominee1} onChange={handleChange} /><br />
    
          <label htmlFor="nominee2">Nominee 2:</label>
          <input type="text" id="nominee2" name="nominee2" value={formData.nominee2} onChange={handleChange} /><br />
    
          <label htmlFor="upiid">UPI ID:</label>
          <input type="text" id="upiid" name="upiid" value={formData.upiid} onChange={handleChange} /><br />
    
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} /><br />
    
          <input type="submit" value="Submit" />
        </form>
      );
}
