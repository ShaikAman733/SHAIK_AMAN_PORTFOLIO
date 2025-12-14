import React from 'react';
import ChangingText from './ChangingText';
import './Hero.css';
import profile from '/assets/profile.jpg';

// Updated Resume Link
const RESUME_LINK = "https://drive.google.com/file/d/1bKa6PvGhMqPaeWKeUI1NR18Ud3Umt8Ka/view?usp=drive_link";

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