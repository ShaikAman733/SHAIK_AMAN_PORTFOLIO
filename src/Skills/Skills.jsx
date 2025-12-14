import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Redux', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    skills: ['Python', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Data Analytics',
    skills: ['Power BI', 'Tableau', 'Excel', 'Pandas', 'NumPy'],
  },
  {
    category: 'Soft Skills',
    skills: ['Team Player', 'Problem Solving', 'Communication', 'Adaptability'],
  },
];

const Skills = () => {
  return (
    <section id="Skills" className="skills-section">
      <div className="section-header">
        <h2 className="skills-heading">Technical Skills</h2>
        <div className="underline"></div>
      </div>

      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-card">
            <h3 className="category-title">{category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="swipe-hint">
        <span>Swipe for more &rarr;</span>
      </div>
    </section>
  );
};

export default Skills;