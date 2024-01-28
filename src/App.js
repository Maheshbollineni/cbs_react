import './App.css';
import { Routes,Route, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import UserRegister from './Components/UserRegister';
import UserLogin from './Components/UserLogin';
import { useState } from 'react';
import Dashboard from './Components/Dashboard';
import Empdashboard from './Components/Empdashboard';
import Emplogin from './Components/Emplogin';
import Interest from './Components/Interest';
import ManageAccounts from './Components/ManageAccounts';
import Monthlystatement from './Components/Monthlystatement';
import NewAC from './Components/NewAC';
import TransactionHistory from './Components/TransactionHistory';
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
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} custid={custid}></Home>}/>
        <Route path="/Register" element={<UserRegister/>}/>
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path='/employee' element={<Empdashboard/>}/>
        <Route path='/emplogin' element={<Emplogin/>}/>
        <Route path='/qinterest' element={<Interest/>}/>
        <Route path='/myaccount' element={<ManageAccounts/>}/>
        <Route path='/statement' element={<Monthlystatement/>}/>
        <Route path='/openAC' element={<NewAC/>}/>
        <Route path='/history' element={<TransactionHistory/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
