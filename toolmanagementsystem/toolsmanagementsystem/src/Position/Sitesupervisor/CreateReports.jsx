import "./createReports.css"
import Sbar from '../../Components/Sbar'
import {Link} from "react-router-dom"
import Navbr from '../../Components/Navbar/Navbr'
import HandymanIcon from '@mui/icons-material/Handyman';
import AssessmentIcon from '@mui/icons-material/Assessment';
const CreateReports = () => {
  
  return (
    <div className='Createrep'>
        <Sbar/>
    <div className='container'>
        <Navbr/>
       
        <div className="button">
       
        <Link className="btn" to="/ToolStatosRep">
        <div className="cont"> <  HandymanIcon style={{ fontSize: 60 }}/>
       Tool Status Reports</div></Link>
        
       <button  className="btn" >
       Required Tool Reports</button>
        
        
         </div>
      </div>
      </div>
   
  )
}
export default CreateReports
