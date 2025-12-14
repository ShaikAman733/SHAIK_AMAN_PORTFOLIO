import React, { useState, useEffect } from 'react';

const TEXTS = [
    'Frontend Developer',
    'MERN Stack Explorer',
    'Data Science Student',
    'Turning Ideas into Code'
];

const ChangingText = () => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = TEXTS[index];
        let timer;

        if (!isDeleting && charIndex < currentText.length) {
            timer = setTimeout(() => {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            }, 100);
        } 
        else if (isDeleting && charIndex > 0) {
            timer = setTimeout(() => {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            }, 50);
        } 
        else if (!isDeleting && charIndex === currentText.length) {
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } 
        else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % TEXTS.length);
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, index]);

    return (
        <span className="typing-text">
            {displayText}
            <span className="cursor">|</span>
            <style jsx>{`
                .cursor {
                    animation: blink 1s step-end infinite;
                    color: inherit;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </span>
    );
};

export default ChangingText;