import React from 'react';
import womenIssuesImage from '../assets/women-issues.jpeg';
import './WomenIssues.css';

function WomenIssues() {
  return (
    <div className="women-issues-container">
      <img src={womenIssuesImage} alt="Women Issues" className="women-issues-image" />
      <h2>Common Reproductive Organ Medical Issues</h2>
      <ul>
        <li>Endometriosis</li>
        <li>Ovarian Cysts</li>
        <li>Polycystic Ovary Syndrome (PCOS)</li>
        <li>Uterine Fibroids</li>
        <li>Cervical Dysplasia</li>
      </ul>
    </div>
  );
}

export default WomenIssues;
