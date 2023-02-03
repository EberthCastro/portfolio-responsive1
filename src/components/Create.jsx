import React, { useState } from "react";
import axios from "axios";
import '../assets/styles/create.css'

const endpoint = "http://127.0.0.1:8000/api/projects";

function Create() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tech, setTech] = useState("");
    const [cover, setCover] = useState("");
    const [url_deploy, setUrl_Deploy] = useState("");
    const [url_github, setUrl_Github] = useState("");

    const handleCreateProject = async () => {
        try {
          const token = localStorage.getItem("token");
          const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          };
          const response = await axios.post(endpoint, {
            title: title,
            description: description,
            tech: tech,
            cover: cover,
            url_deploy: url_deploy,
            url_github: url_github,
          }, { headers });
          console.log(response.data);
        } catch (error) {
          console.error(error.response.data.message);
        }
      };

      
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateProject();
  }




  return (
    <div className="form-container">
  <form onSubmit={handleSubmit} className="form">
    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-input" />
    <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-input" />
    <input type="text" value={tech} onChange={e => setTech(e.target.value)} className="form-input" />
    <input type="text" value={cover} onChange={e => setCover(e.target.value)} className="form-input" />
    <input type="text" value={url_deploy} onChange={e => setUrl_Deploy(e.target.value)} className="form-input" />
    <input type="text" value={url_github} onChange={e => setUrl_Github(e.target.value)} className="form-input" />
    <button type="submit" className="form-submit">Crear proyecto</button>
  </form>
</div>
  )
}

export default Create
