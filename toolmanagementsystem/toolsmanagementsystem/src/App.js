import React from 'react';
import logo from './logo.svg';
import {Route, BrowserRouter as Router, Routes, Switch} from 'react-router-dom';
import './App.css';
import LoginForm from '../src/LoginPage/LoginForm.jsx';
import Dashboard from '../src/Position/StockSupervisor/Dashboard.jsx';

function App() {
  return (
      
       <div>
            <Routes>
                <Route path='/' element={<LoginForm/>}> </Route>
                <Route path='/dashboard/*' element={<Dashboard/>}> </Route>
            </Routes>

       </div>

      

  );
}

export default App;
