import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../../../../Components/ManagerSidebar.jsx';

export default function Updateprojects() {

  let navigate=useNavigate()

const Id =useParams()

        const[projects,setprojects]=useState({
          projectId:"", 
          projectName:"",
          descriptions:"",
          siteSupervisorID:"",
          siteSupervisorName:"",
          locationId:""
        })

        const{projectId,projectName,description,siteSupervisorID,siteSupervisorName,locationId}=projects
          //get projects 
          
        const onInputChange=(e)=>{
          setprojects({...projects,[e.target.name]:e.target.value})
        }

        const loadProjects =async ()=>{
          const result=await axios.get(`http://localhost:8080/Projects/${Id.project_id}`)
          setprojects(result.data)
        }

        useEffect (()=>{
          loadProjects();
        },[])

        const onSubmit =async(e)=>{
            e.preventDefault();
            await axios.put(`http://localhost:8080/Projects/${Id.project_id}`,projects)
            navigate("/manageprojects")
        }
            
    
  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className="col-lg-4">
          <Sidebar/>
        </div>
        <div className="col-lg-6">
        <h2 className='text-center m-4'>Edit Projects Details </h2>
              <div className='col-md-11 offset-md-1 border rounded p-4 mt-4 shadow' style={{ maxHeight: '80vh', overflowY: 'auto', maxWidth: '800px' }}>
                <form onSubmit={(e) =>onSubmit(e)}>
                    <div className='mb-3'>
                      <lable htmlFor="Name" className="form-lable">Project Id</lable>
                      <input type={"text"} className='form-control' 
                      placeholder='Enter Project id' 
                      name="projectId"
                      value={projectId}
                      onChange={(e)=>onInputChange(e)}
                      />
                    </div>
                    <div className='mb-3'>
                      <lable htmlFor="Name" className="form-lable">Project name</lable>
                      <input type={"text"} className='form-control' 
                      placeholder='Enter Project Name' 
                      name="projectName"
                      value={projectName}
                      onChange={(e)=>onInputChange(e)}
                      />
                    </div>

                    <div className='mb-3'>
                      <lable htmlFor="Name" className="form-lable">Description</lable>
                      <input type={"text"} className='form-control' 
                      placeholder='Enter Description' 
                      name="description"
                      value={description}
                      onChange={(e)=>onInputChange(e)}
                      />
                    </div>

                    <div className='mb-3'>
                      <lable htmlFor="Name" className="form-lable">Site Supervisor ID</lable>
                      <input type={"text"} className='form-control' 
                      placeholder='Enter Site Supervisor ID' 
                      name="siteSupervisorID"
                      value={siteSupervisorID}
                      onChange={(e)=>onInputChange(e)}
                      />
                    </div>

                    <div className='mb-3'>
                      <lable htmlFor="Name" className="form-lable">Site Supervisor name</lable>
                      <input type={"text"} className='form-control' 
                      placeholder='Enter Supervisor name' 
                      name="siteSupervisorName"
                      value={siteSupervisorName}
                      onChange={(e)=>onInputChange(e)}
                      />
                    </div>

                    <div className='mb-3'>
                      <lable htmlFor="Name" className="form-lable">Location ID</lable>
                      <input type={"text"} className='form-control' 
                      placeholder='Enter Location ID'
                      name="locationId"
                      value={locationId}
                      onChange={(e)=>onInputChange(e)}
                      />
                    </div>

                    <button type="submit" className='btn btn-outline-primary'>Submit</button>
                    <Link className='btn btn-outline-danger mx-2'to="/manageprojects">Back</Link>

                </form>
                </div>
                </div>
        </div>
    </div>
  )
}
