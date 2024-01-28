import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Emplogin({onEmpLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();
    const handleSubmit = async(e) => {
      e.preventDefault();
      const response=await fetch('http://localhost:8080/emplogin',{
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          empid:username,
          password:password
        })
      }).then((response)=>{response.json()})
      .then((data)=>{console.log(data)})
      .catch((error)=>{setError(error)})
      console.log(username+" login")
      onEmpLogin(username);
      navigate("/emp");
    };
  
    return (
      <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Employee ID: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
}
