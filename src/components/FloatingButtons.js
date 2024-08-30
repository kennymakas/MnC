import React from 'react';
import './FloatingButtons.css';

function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a href="https://wa.me/27634814025" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
      </a>
      <a href="tel:+27634814025" className="call-button">
        <img src="https://img.icons8.com/color/48/000000/phone.png" alt="Call" />
      </a>
    </div>
  );
}

export default FloatingButtons;
