import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import Navbar from './Navbar.jsx';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <Navbar />
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
              <img className="character" src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691605496/300__1_mi9t2u.png" alt="blonde haired chibi girl holding a giant pink heart"/>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-slant">
        <a href="https://app.box.com/s/kjxbe409i76g3mi6v62feikjx4kxuu8p" target="blank">
          <button className="hero-btn">
            <FontAwesomeIcon icon={faDownload} className="hero-btn-icon" />
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}``