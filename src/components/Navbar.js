import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="McNicho Clinic Logo" className="navbar-logo" />
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/women">Women Issues</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
