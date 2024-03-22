import React from 'react';
import logo from './logo.svg';
import {Route, BrowserRouter as Router, Routes, Switch} from 'react-router-dom';
import './App.css';
import LoginForm from '../src/LoginPage/LoginForm.jsx';
import Dashboard from '../src/Position/Admin/Dashboard.jsx';

function App() {
  return (
      
       <div>
            <Routes>
                <Route path='/' element={<LoginForm/>}> </Route>
                <Route path='/Dashboard' element={<Dashboard/>}> </Route>
            </Routes>

       </div>

      

  );
}

export default App;
