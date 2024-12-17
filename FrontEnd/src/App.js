import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from './Components/SignUp';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import Landing from './Components/Landing';

function App() {
  return (
    <div className="App">
      <Router>
      {/* The Header is included in every page */}
      <div className="app-container">

        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Landing" element={<Landing/>} />
        </Routes>
        </div>
    </Router>
    </div>

  );
}

export default App;
