import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="white-grid"></div>
      <div className="placement"></div>
      <div className="hero-slant">
        <button className="hero-btn">
          <FontAwesomeIcon icon={faDownload} className="hero-btn-icon" />
          Resume
        </button>
      </div>
    </div>
  )
}