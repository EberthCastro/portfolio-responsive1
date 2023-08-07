import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../assets/styles/show.css'
import  {Link} from 'react-router-dom'

const endpoint = "http://127.0.0.1:8000/api";

function ShowProject() {
    const [ projects, setProjects ] = useState([])
    useEffect ( () => {
        getAllProjects()
    }, [])

    const getAllProjects = async() => {
        const response = await axios.get(`${endpoint}/projects`)
        setProjects(response.data)
    }

    const deleteProject = async(id) => {
        await axios.delete(`${endpoint}/projects/${id}`)
        getAllProjects()
    }


  return (
    <div>
      <div className='dgrip'>
        {/* <Link to="/create" className='btn btn-success btn.lg mt-2 mb-2 text-white'>Create</Link> */}
      </div>

      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
            <tr>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            { projects.map( (project) => (
                <tr key={project.id}>
                    <td>{project.title}</td>
                    <td>{project.description}</td>
                    <td>{project.tech}</td>
                    <td>
                        {/* <Link to={`/edit/${project.id}` } className='btn btn-warning'>Edit</Link> */}
                        <button onClick={ () => deleteProject(project.id)} className='btn btn-danger'>Delete</button>
                    </td>

                </tr>
            ) )}
        </tbody>    


      </table>



    </div>
  )
}

export default ShowProject
