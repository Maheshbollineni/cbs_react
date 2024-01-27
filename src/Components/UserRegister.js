import React, { useState } from 'react'
import '../css/UserRegister.css'
export default function UserRegister() {
    const [formData, setFormData] = useState({
        custid: '',
        password: '',
        firstname: '',
        middlename: '',
        lastname: '',
        mobileno: '',
        emailid: '',
        dob: '',
        fathername: '',
        mothername: '',
        pan: '',
        aadhaarid: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pin: ''
      });

      const handleChange = (e, field) => {
        const { value } = e.target;
        setFormData({ ...formData, [field]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const reponse=fetch('http://localhost:8080/register')
        
      };
  return (
    <div className='form-container'>
      <h1>Welcome</h1>
      <br></br>
      <h3>Register as a customer</h3>
      <br></br>
      <p>Fill in your details</p>
      <form onSubmit={handleSubmit}>
      <label>
        Cust ID:
        <input
          type="text"
          value={formData.custid}
          onChange={(e) => handleChange(e, 'custid')}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={(e) => handleChange(e, 'password')}
        />
      </label>
      <label>
        First Name:
        <input
          type="text"
          value={formData.firstname}
          onChange={(e) => handleChange(e, 'firstname')}
        />
      </label>
      <label>
        Middle Name:
        <input
          type="text"
          value={formData.middlename}
          onChange={(e) => handleChange(e, 'middlename')}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={formData.lastname}
          onChange={(e) => handleChange(e, 'lastname')}
        />
      </label>
      <label>
        Mobile No:
        <input
          type="text"
          value={formData.mobileno}
          onChange={(e) => handleChange(e, 'mobileno')}
        />
      </label>
      <label>
        Email ID:
        <input
          type="text"
          value={formData.emailid}
          onChange={(e) => handleChange(e, 'emailid')}
        />
      </label>
      <label>
        DOB:
        <input
          type="date"
          value={formData.dob}
          onChange={(e) => handleChange(e, 'dob')}
        />
      </label>
      <label>
        Father's Name:
        <input
          type="text"
          value={formData.fathername}
          onChange={(e) => handleChange(e, 'fathername')}
        />
      </label>
      <label>
        Mother's Name:
        <input
          type="text"
          value={formData.mothername}
          onChange={(e) => handleChange(e, 'mothername')}
        />
      </label>
      <label>
        PAN:
        <input
          type="text"
          value={formData.pan}
          onChange={(e) => handleChange(e, 'pan')}
        />
      </label>
      <label>
        Aadhaar ID:
        <input
          type="number"
          value={formData.aadhaarid}
          onChange={(e) => handleChange(e, 'aadhaarid')}
        />
      </label>
      <label>
        Address:
        <textarea
          value={formData.address}
          onChange={(e) => handleChange(e, 'address')}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={formData.city}
          onChange={(e) => handleChange(e, 'city')}
        />
      </label>
      <label>
        State:
        <input
          type="text"
          value={formData.state}
          onChange={(e) => handleChange(e, 'state')}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          value={formData.country}
          onChange={(e) => handleChange(e, 'country')}
        />
      </label>
      <label>
        PIN:
        <input
          type="number"
          value={formData.pin}
          onChange={(e) => handleChange(e, 'pin')}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
