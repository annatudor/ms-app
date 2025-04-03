import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Dr. Doofenshmirtz The Evil. All rights reserved.</p>
        <nav className="footer-nav">
          <Link to="/">Home</Link> | <Link to="/about">About Us</Link> | <Link to="/contact">Contact Us</Link>
        </nav>
        <div className="social-media">
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;