import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => setIsOpen(!isOpen);

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    
    
    const element = document.querySelector(targetId);
    
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with id ${targetId} not found`);
    }
  };

 
  const navLinks = [
    { name: 'Home', id: '#Home' },     
    { name: 'About', id: '#about' },     
    { name: 'Projects', id: '#projects' }, 
    { name: 'Skills', id: '#Skills' },   
    { name: 'Contact', id: '#contact' }  
  ];

  return (
    <nav className={`navbarsection ${isOpen ? 'menu-active' : ''}`}>
      <div className="navbar-container">
        {/* Logo Link */}
        <a href="#Home" className="logo" onClick={(e) => handleLinkClick(e, '#Home')}>
          Shaik Aman
        </a>


        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

      
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={link.name} style={{ transitionDelay: `${index * 100}ms` }}>
              <a 
                href={link.id}
                className="nav-link" 
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;