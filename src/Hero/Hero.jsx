import React from 'react';
import ChangingText from './ChangingText';
import './Hero.css';
import profile from '/assets/profile.jpg';
// Remember to install react-icons: npm install react-icons
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'; 
import { SiLeetcode } from 'react-icons/si';

// Updated Resume Link
const RESUME_LINK = "https://drive.google.com/file/d/1171MfsUW4k1n4x4FnV1Gq7wPJS-ZNkcA/view?usp=drive_link";

// Social/Coding Profile Links - FINAL LINKS
const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/shaikaman733', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aman-shaik7/', icon: FaLinkedin },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Shaik_Aman7/', icon: SiLeetcode },
    { name: 'CodeWars', url: 'https://www.codewars.com/users/Shaikaman', icon: FaCode },
];

function Hero() {
    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const offset = 80;
            const elementPosition = aboutSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="Home" className="hero-section">
            <div className="hero-container">
                <div className="profile-wrapper">
                    <div className="profile-card">
                        <div className="profile-content">
                            <img className='profile-img' src={profile} alt="Shaik Aman" />
                        </div>
                    </div>
                </div>

                <h1 className='hero-title'>Shaik Aman</h1>
                
                <div className='hero-typewriter'>
                    <ChangingText />
                </div>
                
                <p className='hero-subtitle'>
                    "Passionate about MERN, Python & data analysis."
                </p>

                {/* Social & Coding Profiles Section - RENDERED HERE FOR BOTH DESKTOP/MOBILE */}
                <div className='social-links-container'>
                    {SOCIAL_LINKS.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={`Visit ${link.name} profile`}
                            className='social-link-icon' 
                        >
                            <link.icon size={30} />
                        </a>
                    ))}
                </div>
                {/* END SOCIAL SECTION */}

                <div className='hero-actions'>
                    <button className='btn btn-primary' onClick={handleScrollToAbout}>
                        More About Me
                    </button>
                    <button
                        className="btn btn-outline"
                        onClick={() => window.open(RESUME_LINK, "_blank")}>
                        View Resume
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;