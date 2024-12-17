

import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from "react-router-dom";

import './Login.css';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResponse = await validateLogin(userId, password);

    if (apiResponse.success) {
      setError('');
      console.log('Login successful:', apiResponse); // Log successful response
      navigate('/Landing'); // Redirect to the Landing page
    } else {
      setError(apiResponse.message);
      console.error('Login failed:', apiResponse); // Log failure response
    }
  };

  // Simulated API call for user validation
  const validateLogin = async (userId, password) => {
    console.log('Validating user:', { userId, password }); // Log input for debugging

    // Replace the below logic with an actual API call if needed
    return new Promise((resolve) => {
      setTimeout(() => {
        if (userId === 'admin' && password === 'password') {
          resolve({ success: true, message: 'Login successful!' });
        } else {
          resolve({ success: false, message: 'Invalid User ID or Password' });
        }
      }, 1000); // Simulate network latency
    });
  };
  

  return (
    <div>
     <Header/>
    <div className="login-page">
      <div className="login-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your user ID"
            required
          />
          </form>
           <form onSubmit={handleSubmit} className="login-password">
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
          
          <button type="submit">Login</button>
          
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
