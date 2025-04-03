import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#2d0c50', color: '#e29c06', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo">
        <img src="/assets/images/logo.png" alt="Dr. Doofenshmirtz Logo" style={{ height: '50px' }} />
        <h1>Dr. Doofenshmirtz The Evil</h1>
      </div>
      <div className="social-media">
        <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
        <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
      </div>
    </header>
  );
};

export default Header;