import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Elevate Your Financial Journey</h1>
        <p>Your Trust.Our Expertise</p>
      </div>

      <div className="header-buttons">
        <button className="header-button">
          <Link to="/Login">Login</Link>
        </button>
        <button className="header-button">
          <Link to="/SignUp">SignUp</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
