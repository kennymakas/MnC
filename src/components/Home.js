import React from 'react';
import advantagesImage from '../assets/abortion-info.jpeg';
import contactImage from '../assets/contact-us.jpg';
import typesImage from '../assets/types-of-abortions.jpeg';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-column hover-animate">
        <img src={advantagesImage} alt="Advantages of Abortion" className="home-image" />
        <h2>Advantages of Abortion</h2>
        <p>Abortion can help prevent potential complications in cases of unplanned pregnancies.</p>
      </div>
      <div className="home-column hover-animate">
        <img src={contactImage} alt="Contact Us" className="home-image" />
        <h2>Contact for More Information</h2>
        <p>For more detailed consultations, please contact us at +27634814025.</p>
      </div>
      <div className="home-column hover-animate">
        <img src={typesImage} alt="Types of Abortion" className="home-image" />
        <h2>Types of Abortion</h2>
        <p>We provide both medical and surgical abortions, depending on the stage of pregnancy.</p>
      </div>
    </div>
  );
}

export default Home;
