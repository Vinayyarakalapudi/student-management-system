import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="navbar">
    <nav className="navbar-content">
      <div className="navbar-logo">
      <img src="https://img.icons8.com/ios-filled/50/ffffff/student-male.png" alt="Student Icon"  style={{ verticalAlign: 'middle', marginRight: '8px', width: '50px', height: '50px' }} />
      STUDENT MANAGMENT SYSTEM
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/students" className="nav-link">Student List</Link>
        <Link to="/add-student" className="nav-link">Add Student</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
