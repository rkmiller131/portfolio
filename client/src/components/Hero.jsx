import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="white-grid"></div>
      <div className="hero-content-container">
        <div className="hero-column">
          <div className="hero-left">
            <p className="hero-title anim-typewriter">Hi, I'm Rachel</p>
            <p className="hero-subtitle">Full Stack Software Engineer</p>
          </div>
        </div>
        <div className="hero-column">
          <div className="hero-right">
            <div className="character-backdrop">
              <img className="character" src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691520552/112_wmov4n.png"/>
            </div>
          </div>
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