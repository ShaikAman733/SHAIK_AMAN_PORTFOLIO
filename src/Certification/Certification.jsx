import React from 'react';
import './Certification.css';
import { FaAward, FaBuilding, FaCalendarAlt, FaFingerprint } from 'react-icons/fa';

const certificationsData = [
  {
    title: 'Generative AI',
    issuer: 'Microsoft & LinkedIn Learning',
    date: 'October 2024',
    id: '19445443454'
  },
  {
    title: 'Data Analytics',
    issuer: 'Deloitte',
    date: 'May 2025',
    id: 'Jjk6Xx2TrZjufb8DW'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-header">
        <h2 className="cert-heading">Certifications</h2>
        <div className="underline"></div>
      </div>

      <div className="certifications-container">
        {certificationsData.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-icon-wrapper">
              <FaAward className="main-icon" />
            </div>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <div className="cert-details">
                <p className="issuer">
                  <FaBuilding className="detail-icon" /> {cert.issuer}
                </p>
                <p className="date">
                  <FaCalendarAlt className="detail-icon" /> {cert.date}
                </p>
                <p className="cert-id">
                  <FaFingerprint className="detail-icon" /> ID: {cert.id}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;