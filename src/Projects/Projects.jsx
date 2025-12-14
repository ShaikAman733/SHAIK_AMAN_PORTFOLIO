import React, { useState } from 'react';
import './Projects.css';
import enzo from '/assets/enzo.png';
import collegecampus from '/assets/college.png';
import games from '/assets/gamepic.jpg';
import { FaExternalLinkAlt, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Enzo - AI Health Helper',
        description: 'An AI-powered chatbot designed to offer preliminary health suggestions. This full-stack application demonstrates seamless integration of OpenAI API with a React frontend.',
        imageUrl: enzo,
        projectUrl: 'https://enzo-chatbot-rust.vercel.app/',
        tech: ['react', 'css', 'js'],
    },
    {
        id: 2,
        title: 'Campus Mate',
        description: 'A smart college assistant chatbot for querying schedules, faculty details, and campus services. Built with a modular architecture to allow easy expansion of features.',
        imageUrl: collegecampus,
        projectUrl: 'https://campus-mate-frontend.vercel.app/',
        tech: ['react', 'node', 'css'], 
    },
    {
        id: 3,
        title: 'Interactive Tic-Tac-Toe',
        description: 'A fully functional game application featuring dynamic game logic, score tracking, and a sleek user interface for an engaging two-player experience.',
        imageUrl: games,
        projectUrl: 'https://tic-tac-toe-tau-black.vercel.app/',
        tech: ['html', 'css', 'js'],
    },
];

const getTechBadge = (tech) => {
    switch (tech) {
        case 'react': return <span className="badge react"><FaReact /> React</span>;
        case 'js': return <span className="badge js"><FaJs /> JavaScript</span>;
        case 'html': return <span className="badge html"><FaHtml5 /> HTML5</span>;
        case 'css': return <span className="badge css"><FaCss3Alt /> CSS3</span>;
        case 'node': return <span className="badge node"><FaNodeJs /> Node.js</span>;
        default: return null;
    }
};

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h2>Featured Projects</h2>
                <div className="underline"></div>
            </div>

            <div className="projects-wrapper">
                <div 
                    className="projects-track" 
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {projects.map((project) => (
                        <div className="project-slide" key={project.id}>
                            <div className="project-card">
                                <div className="card-image-wrapper">
                                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                                    {/* Overlay Button (Optional visual flair) */}
                                    <div className="overlay">
                                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn-icon-only">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <div className="tech-stack">
                                        {project.tech.map((t, i) => <React.Fragment key={i}>{getTechBadge(t)}</React.Fragment>)}
                                    </div>
                                    <p>{project.description}</p>
                                    
                                    {/* NEW: Live Preview Button in Content Area */}
                                    <div className="card-actions">
                                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
                                            Live Preview <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls only visible on Mobile via CSS */}
            <div className="carousel-controls">
                <button 
                    className="control-btn prev" 
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    &#8592; Prev
                </button>
                
                <div className="indicators">
                    {projects.map((_, idx) => (
                        <span 
                            key={idx} 
                            className={`dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>

                <button 
                    className="control-btn next" 
                    onClick={handleNext}
                    disabled={currentIndex === projects.length - 1}
                >
                    Next &#8594;
                </button>
            </div>
        </section>
    );
};

export default Projects;