import React from 'react';
import abortionTypesImage from '../assets/types-of-abortions.jpeg';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Abortion</h2>
      <img src={abortionTypesImage} alt="Types of Abortion" className="about-image" />
      {/* Other content */}
    </div>
  );
};

export default About;
