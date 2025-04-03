import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Importă logo-ul
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Dr. Doofenshmirtz Logo" className="logo-image" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;