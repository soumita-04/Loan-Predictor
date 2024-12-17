import React from 'react';
import Header from "./Header"
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
    <Header/>
    <div className="homepage">
    <div className="homepage-content">
        <h2>Welcome to the Loan Approval Prediction System</h2>
        <p>Enter your details to find out if your loan application is likely to be approved.</p>
        <button className='get'>Get Started</button>
    </div>
    <div className='right-content'>
    <img src="./bank-loan-concept-illustration_114360-25995.jpg" alt="Loan Approval" className="homepage-image"></img>
    </div>
    </div>
    </div>
  );
};

export default HomePage;
