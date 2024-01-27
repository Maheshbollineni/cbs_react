import './App.css';
import { Routes,Route, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import UserRegister from './Components/UserRegister';
import UserLogin from './Components/UserLogin';
import { useState } from 'react';
import Dashboard from './Components/Dashboard';
function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  const [custid, setCustid] = useState("")

  const handleLogin = (customerId) => {
    setCustid(customerId);
    setLoggedIn(true);
  };

  const handleLogout=()=>{
    setLoggedIn(false);
    setCustid(null);
  }
  return (
    <div className="App">
      <div className='header'>
        <h1>Core Banking System</h1>
    </div>
    {/* {loggedIn ? (
        <div>
          <h1>Welcome, Customer {custid}</h1>
          <Dashboard customerId={custid} />
        </div>
      ) : (
        <UserLogin onLogin={handleLogin} />
      )} */}
      <Routes>
        <Route path="/home" element={<Home loggedIn={loggedIn} custid={custid}></Home>}/>
        <Route path="/Register" element={<UserRegister/>}/>
        <Route path="/UserLogin" element={<UserLogin/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
