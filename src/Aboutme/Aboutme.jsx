import React from 'react';
import './Aboutme.css';

const statsData = [
  { value: "4", label: "Projects Completed" },
  { value: "2", label: "Industry Certifications" },
  { value: "500+", label: "LinkedIn Connections" },
  { value: "100+", label: "Codewars Score" }
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="main-container">
        
        {/* Left Side: Text */}
        <div className="about-content">
          <h2 className="section-title">
            About Me
            <span className="underline"></span>
          </h2>
          
          <div className="about-description">
            <p>
              I'm a passionate <strong>Data Science student</strong> at R.L. Jalappa Institute, 
              affiliated with Visvesvaraya Technological University (VTU), Doddaballapur.
            </p>
            <p>
              Skilled in <strong>JavaScript, Python, and React</strong>, I’m currently expanding my 
              expertise in the MERN stack while deepening my knowledge of data 
              analysis. My focus is on building impactful tools that blend full-stack 
              development with data-driven insights.
            </p>
          </div>
        </div>

        {/* Right Side: Stats */}
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;