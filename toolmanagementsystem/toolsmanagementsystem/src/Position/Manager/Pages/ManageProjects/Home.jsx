import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ManagerSidebar from '../../../../Components/ManagerSidebar.jsx';
import { Check } from '@mui/icons-material'; // Import the Check icon from Material-UI
import ReactPaginate from 'react-paginate'; // Import React Paginate
import './Home.css';
import ManagerNavbar from '../../../../Components/Navbar/ManagerNavbar.jsx';
import { Grid, Container, Typography, Box, TextField } from '@mui/material';

export default function Home() {
  const [projects, setProjects] = useState([]); // To store the list of projects
  const [clickedProjects, setClickedProjects] = useState({}); // To store the state of clicked projects
  const [pageNumber, setPageNumber] = useState(0); // State to track current page number
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const projectsPerPage = 2; // Number of projects to show per page
  const pagesVisited = pageNumber * projectsPerPage;

  useEffect(() => {
    loadProjects();
  }, []);

  const { projectId } = useParams();

  const loadProjects = async () => {
    try {
      const result = await axios.get("http://localhost:8080/Projects");
      setProjects(result.data);
    } catch (error) {
      console.error("Error loading projects:", error);
      alert("Error loading projects. Please check the console for more details.");
    }
  };

  const deleteProject = async (projectId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/Projects/${projectId}`);
        loadProjects();
      } catch (error) {
        console.error("Error deleting project:", error);
        alert("Error deleting project. Please check the console for more details.");
      }
    }
  };

  const handleClick = (projectId) => {
    setClickedProjects(prevState => ({ ...prevState, [projectId]: true }));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.projectId.toString().includes(searchTerm) ||
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.siteSupervisorID.toString().includes(searchTerm) ||
    project.siteSupervisorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.locationId.toString().includes(searchTerm) ||
    project.locationName.toString().includes(searchTerm.toLowerCase()) ||
    project.startDate.includes(searchTerm) ||
    project.endDate.includes(searchTerm)
  );

  const displayProjects = filteredProjects
    .slice(pagesVisited, pagesVisited + projectsPerPage) // Get the projects for the current page
    .map((project, index) => (
      <tr key={index}>
        <th scope="row">{pagesVisited + index + 1}</th>
        <td>{project.projectId}</td>
        <td>{project.projectName}</td>
        <td>{project.description}</td>
        <td>{project.siteSupervisorID}</td>
        <td>{project.siteSupervisorName}</td>
        <td>{project.locationId}</td>
        <td>{project.locationName}</td>
        <td>{project.startDate}</td>
        <td>{project.endDate}</td>

        <td>
          <Link className='btn btn-success mx-2' to={`/UpdateProjects/${project.projectId}`}>Edit</Link>
        </td>
        <td>
          <button className='btn btn-danger mx-2' onClick={() => deleteProject(project.projectId)}>Delete</button>
        </td>
        <td>
          <div>
            {clickedProjects[project.projectId] ? (
              <>
                <Check style={{ color: 'green' }} /> {/* Show the tick icon */}
                <span className="text-success">Completed</span> {/* Show the finished status */}
              </>
            ) : (
              <button
                className='btn'
                onClick={() => handleClick(project.projectId)}
              >
                Not Completed
              </button>
            )}
          </div>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Grid container>
      <Grid item>
        <ManagerSidebar />
      </Grid>
      <Grid item xs>
        <ManagerNavbar />
        <Container maxWidth="lg">
          <Box mt={4}>
            <Typography variant="h4" align="center" gutterBottom>
              Welcome to Project Details
            </Typography>
            <Box mb={2} display="flex" justifyContent="space-between">
              <TextField
                label="Search Projects"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth
              />
              <Link className="btn" style={{ backgroundColor: 'navy', color: 'white', marginLeft: '20px' }} to="/addprojects">Add Projects</Link>
            </Box>
            <table className="table border shadow">
              <thead style={{ top: 0, zIndex: 1, background: '#fff' }}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Project id</th>
                  <th scope="col">Project Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Site Supervisor ID</th>
                  <th scope="col">Site Supervisor Name</th>
                  <th scope="col">Location ID</th>
                  <th scope="col">Location Name</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {displayProjects}
              </tbody>
            </table>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
