// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Stay Connected!</h2>
        <div className="social-media-icons">
          <a href="www.google.com" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="www.google.com" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="www.google.com" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="www.google.com" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gfest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
