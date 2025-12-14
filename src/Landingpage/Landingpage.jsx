import React, { useState, useEffect } from 'react';
import './LandingPage.css';

function LandingPage({ onEnter }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isExiting, setIsExiting] = useState(false); // New state for exit animation

  useEffect(() => {
    const showTimer = setTimeout(() => setShowPopup(true), 2500);
    return () => clearTimeout(showTimer);
  }, []);

  // The new handler wrapper
  const handleExit = () => {
    setIsExiting(true); // 1. Trigger the CSS animation
    
    // 2. Wait 800ms (0.8s) for animation to finish, THEN switch pages
    setTimeout(() => {
      onEnter(); 
    }, 800);
  };

  return (
    <div 
      // Add the 'exiting' class if the user clicked
      className={`landing-page ${isExiting ? 'exiting' : ''}`} 
      onClick={handleExit}
    >
      <div className="ripple-bg"></div>
      
      <div className="content">
        <h3 className="main-text">Student dev turning ideas into clean UI</h3>
        <div className={`popup-message ${showPopup ? 'visible' : ''}`}>
           Tap to Enter
        </div>
      </div>
    </div>
  );
}

export default LandingPage;