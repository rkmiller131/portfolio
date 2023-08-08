import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="white-grid"></div>
      <div className="hero-content-container">
        <div className="hero-column hero-left">
          TEST LEFT
        </div>
        <div className="hero-column hero-right">
          TEST RIGHT
        </div>
      </div>
      <div className="hero-slant">
        <button className="hero-btn">
          <FontAwesomeIcon icon={faDownload} className="hero-btn-icon" />
          Resume
        </button>
      </div>
    </div>
  )
}``