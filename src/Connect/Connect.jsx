import React from 'react';
import './Connect.css';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <h3 className="contact-heading">
          <span className="hash">#</span> Get_In_Touch
        </h3>
        
        <div className="contact-box">
          <div className="info-line">
            <span className="label">const location =</span>
            <span className="value">"Banglore, Karnataka, India";</span>
          </div>

          <div className="info-line">
            <span className="label">const email =</span>
            <a href="mailto:shaikaman2411@gmail.com" className="value link">
              "shaikaman2411@gmail.com";
            </a>
          </div>

          <div className="social-line">
            <span className="label">// Socials</span>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/aman-shaik7"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ShaikAman733"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;