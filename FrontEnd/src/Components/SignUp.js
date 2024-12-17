import React, { useState } from 'react';
import Header from './Header';
import { Link } from "react-router-dom";

import './SignUp.css';
const SignUp = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic here to handle form submission, like sending data to an API
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        console.log("User ID submitted:", userId);
        console.log("Password submitted:", password);
      };
  
    return (
      <div>
       <Header/>
      <div className="Sign-page">
        <div className="Sign-content">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit} className="Sign-form">
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your user ID"
              required
            />
            <input className='Sign-password'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />
            <input className='Sign-confirm'
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your Password"
              required
            />
            
            <button type="submit">SignUp</button>
            
          </form>
        </div>
      </div>
      </div>
    );
  };
  
  export default SignUp;
  
