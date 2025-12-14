import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="copyright">
          &copy; {currentYear} Shaik Aman. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;