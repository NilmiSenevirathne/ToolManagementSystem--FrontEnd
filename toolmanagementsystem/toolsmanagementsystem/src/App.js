
import React from 'react';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';


import LoginForm from '../src/LoginPage/LoginForm.jsx';

import ManageStock from './Position/StockSupervisor/ManageStock/ManageStock.jsx';

// import Toolbox from './Position/StockSupervisor/ToolBox/Toolbox.jsx';
// import CreateToolbox from './Position/StockSupervisor/ToolBox/CreateToolBox/CreateToolbox.jsx';
// import STrackToolbox from './Position/StockSupervisor/ToolBox/TrackToolbox/STrackToolbox.jsx';

import Reports from './Position/StockSupervisor/Reports/Reports.jsx';
import AddTool from './Position/StockSupervisor/ManageStock/AddTool.jsx';
import EditTool from './Position/StockSupervisor/ManageStock/EditTool.jsx';
import StockSupervisorDashboard from './Position/StockSupervisor/Dashboard/StockSupervisorDashboard.jsx';
import ManagerDashboard from './Position/Manager/Pages/ManagerDashboard.jsx';
import ManageProjects from './Position/Manager/Pages/ManageProjects/ManageProjects.jsx';
import ViewInventory from './Position/StockSupervisor/ManageStock/ManageStock.jsx';
import MTrackToolbox from './Position/Manager/Pages/TrackToolbox.jsx';
import AddProjects from './Position/Manager/Pages/ManageProjects/Projects/AddProjects.jsx';
import UpdateProjects from './Position/Manager/Pages/ManageProjects/Projects/UpdateProjects.jsx'
import DeleteProjects from './Position/Manager/Pages/ManageProjects/Projects/DeleteProjects.jsx'
import LocationHome from './Position/Manager/Pages/ManageProjects/Projects/Location/LocationHome.jsx';
import AddLocation from './Position/Manager/Pages/ManageProjects/Projects/Location/AddLocation.jsx';
import UpdateLocation from './Position/Manager/Pages/ManageProjects/Projects/Location/UpdateLocation.jsx';
import Home from './Position/Manager/Pages/ManageProjects/Home.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
          
       <>
               <Routes>
                    <Route path='/' element={<LoginForm/>}> </Route>

                    {/* Manager pages  */}
                    <Route path="/managerdashboard" element={<ManagerDashboard/>} />
                    <Route path="/manageprojects" element={<ManageProjects />} />
                    <Route path="/managestock" element={<ViewInventory />} />
                    <Route path="/tracktoolbox" element={<MTrackToolbox />} />
                    <Route path="/addprojects" element={<AddProjects />} />
                    <Route path="/UpdateProjects/:project_id" element={<UpdateProjects />} />
                    <Route path="/AddLocation" element={<AddLocation />} />
                    <Route path="/UpdateLocation/:location_id" element={<UpdateLocation />} />
                    <Route path="/DeletePojects/:project_id" element={<DeleteProjects />} />
                    <Route path="/locationHome" element={<LocationHome />} />
                    <Route path="/home" element={<Home/>}/>



                     {/* StockSupervisor pages  */}
                    <Route path='/stocksupervisordashboard' element={<StockSupervisorDashboard/>} />
                    <Route  path = "/managestock"  element={<ManageStock/>}/>
                    <Route  path = "/addTool"  element={<AddTool/>}/>
                    <Route path='/editTool/:toolId' element={<EditTool/>}/>
                    {/* <Route  path = "/createtoolbox"  element={<CreateToolbox/>}/> */}
                    {/* <Route  path = "/tracktoolbox"  element={<TrackToolbox/>}/> */}
                    <Route  path = "/reports"  element={<Reports/>}/>
                    
               </Routes>
          
       </>

  );
}

export default App;





