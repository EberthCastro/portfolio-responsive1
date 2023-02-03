import React, { useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'
import '../assets/styles/login.css'

function FetchApi() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const [user, setUser] = useState(null);
      const [error, setError] = useState(null);
      const [redirect, setRedirect] = useState(false);
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
          console.log(response.data);
          setUser(response.data.user);
          localStorage.setItem('token', response.data.token);
          setRedirect(true);
        } catch (error) {
          setError(error.response.data.message);
        }
      };
      
      if (redirect) {
        // return redirect('/projects')
        // return redirect('<Projects/>')
        }



    
      return (
        <div className="Login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {user && (
            <div className="user-details">
              <h3>User Details</h3>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          )}
        </div>
      );
    };

export default FetchApi;
