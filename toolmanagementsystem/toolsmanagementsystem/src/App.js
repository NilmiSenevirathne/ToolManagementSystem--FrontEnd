import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
//import './app.css';
import Home from '../src/Components/HomePage/Home.jsx';
import LoginForm from '../src/LoginPage/LoginForm.jsx';
import ManageStock from './Position/StockSupervisor/ManageStock/ManageStock.jsx';
import Toolbox from './Position/StockSupervisor/ToolBox/Toolbox.jsx';
import CreateToolbox from './Position/StockSupervisor/ToolBox/CreateToolBox/CreateToolbox.jsx';
import STrackToolbox from './Position/StockSupervisor/ToolBox/TrackToolbox/STrackToolbox.jsx';
import Reports from './Position/StockSupervisor/Reports/Reports.jsx';
import AddTool from './Position/StockSupervisor/ManageStock/AddTool.jsx';
import EditTool from './Position/StockSupervisor/ManageStock/EditTool.jsx';
import StockSupervisorDashboard from './Position/StockSupervisor/Dashboard/StockSupervisorDashboard.jsx';
import ManagerDashboard from './Position/Manager/Pages/ManagerDashboard.jsx';
import ManageProjects from './Position/Manager/Pages/ManageProjects/ManageProjects.jsx';
import ToolStockDetails from './Position/Manager/Pages/ToolStockDetails.jsx';
import ViewToolBoxDetails from './Position/Manager/Pages/ViewToolBoxDetails.jsx';
import AddProjects from './Position/Manager/Pages/ManageProjects/Projects/AddProjects.jsx';
import UpdateProjects from './Position/Manager/Pages/ManageProjects/Projects/UpdateProjects.jsx'
import LocationHome from './Position/Manager/Pages/ManageProjects/Projects/Location/LocationHome.jsx';
import AddLocation from './Position/Manager/Pages/ManageProjects/Projects/Location/AddLocation.jsx';
import Dboard from './Position/Sitesupervisor/dashboard/Dboard.jsx'
import CreateReports from './Position/Sitesupervisor/CreateReports.jsx';
import ToolStatosRep from "./Position/Sitesupervisor/ToolStatosRep.jsx";
import AddReportDetails from "./Position/Sitesupervisor/AddReportDetails.jsx";
import RequiredToolReport from "./Position/Sitesupervisor/RequiredToolReport.jsx";
import ViewProjects from './Position/Sitesupervisor/ViewProjects.jsx';
import ViewRequiredToolReports from './Position/Sitesupervisor/View/ViewRequiredToolReports.jsx';
import ViewToolStatusReports from './Position/Sitesupervisor/View/ViewToolStatusReports.jsx';
import Tool from './Position/StockSupervisor/ToolBox/CreateToolBox/Tools/Tool.jsx';
import Cart from './Position/StockSupervisor/ToolBox/CreateToolBox/Tools/Cart.jsx';
import DashBoard from './Position/Admin/Dashboard/DashBoard.jsx';
import UpdateLocation from './Position/Manager/Pages/ManageProjects/Projects/Location/UpdateLocation.jsx';
import StockProfile from './Components/Profile/StockProfile.jsx';


function App() {
   return (

      <>
         <Routes> 
                    <Route  path='/' element={<LoginForm/>}> </Route> 

                    
                    <Route  path='/profile' element={<StockProfile/>}></Route>
                                     
                    {/* Admin pages  */}
                    <Route path="/admindashboard" element={<DashBoard/>} />
                    
                    {/* Manager pages  */}
                    <Route path="/managerdashboard" element={<ManagerDashboard/>} />
                    <Route path="/manageprojects" element={<ManageProjects />} />
                    <Route path="/Toolstockdetails" element={<ToolStockDetails />} />
                    <Route path="/ViewToolBoxDetails" element={<ViewToolBoxDetails />} />
                    <Route path="/addprojects" element={<AddProjects />} />
                    <Route path="/UpdateProjects/:project_id" element={<UpdateProjects />} />
                    <Route path="/AddLocation" element={<AddLocation />} />
                    <Route path="/locationHome" element={<LocationHome />} />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/UpdateLocation/:locationId" element={<UpdateLocation />} />


                     {/* StockSupervisor pages  */}

                     
                    <Route  path='/stocksupervisordashboard' element={<StockSupervisorDashboard/>} />
                    <Route  path = "/managestock"  element={<ManageStock/>}/>
                    <Route  path = "/addTool"  element={<AddTool/>}/>
                    <Route  path='/editTool/:toolId' element={<EditTool/>}/>
                    <Route  path = "/maintoolbox"  element={<Toolbox/>}/>
                    <Route  path = "/createtoolbox"  element={<CreateToolbox/>}/>
                    <Route  path = "/tool"  element={<Tool/>}/>
                    <Route  path='/cart' element={<Cart/>}/>
                    <Route  path = "/Stracktoolbox"  element={<STrackToolbox/>}/>
                    <Route  path = "/reports"  element={<Reports/>}/>

                    {/* SiteSupervisor pages */}
 
                   <Route path='/sitesupervisor' element={<Dboard/>}> </Route>
                   <Route path='/supervisordashboard' element={<Dboard/>}> </Route>
                   <Route path="/CreateReports" element={<CreateReports/>}/>
                   <Route path="/ToolStatosRep" element={<ToolStatosRep/>}/>
                   <Route path="/RequiredToolReport" element={<RequiredToolReport/>}/>
                   <Route path='/ViewProjects' element={<ViewProjects/>}/>
                   <Route path="/AddReportDetails" element={<AddReportDetails/>}/>
                   <Route path="/ViewRequiredToolReports" element={<ViewRequiredToolReports/>}/>
                   <Route path="/ViewToolStatusReports" element={<ViewToolStatusReports/>}/>
                   </Routes>

                      </>

     );
}

export default App;





