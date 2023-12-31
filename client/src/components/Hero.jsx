import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '../DarkThemeContext.jsx';
import ThemeButton from './ThemeButton.jsx';
import Navbar from './Navbar.jsx';

export default function Hero() {
  const darkMode = useTheme();
  return (
    <section className={darkMode ? "hero-section dark" : "hero-section"} id="home">
      <Navbar />
      <div className={darkMode ? "hero-bg dark": "hero-bg"}>
        <div className="white-grid" />
        {/* Begin hero content: row of 2 columns for text and chibi picture */}
        <div className="hero-content-container">
          <div className="column">
            <p className={darkMode ? "hero-title anim-typewriter dark" : "hero-title anim-typewriter"}>
              Hi, I'm Rachel
            </p>
            <p className="hero-subtitle">
              Full Stack Software Engineer
            </p>
          </div>
          <div className="column hero-right">
            <div className={darkMode? "hero-right-image dark" : "hero-right-image"}>
              <img
                className="hero-chibi"
                src={`${darkMode ?
                  "https://res.cloudinary.com/dnr41r1lq/image/upload/v1691888601/300_2_cinamx.png"
                  :
                  "https://res.cloudinary.com/dnr41r1lq/image/upload/v1691605496/300__1_mi9t2u.png"}`
                }
                alt="blonde chibi"
              />
            </div>
          </div>
        </div>
      </div>
      <a href="https://app.box.com/s/kjxbe409i76g3mi6v62feikjx4kxuu8p" target="blank">
        <button className={darkMode ? 'hero-btn dark' : 'hero-btn'}>
          <FontAwesomeIcon icon={faDownload} className="hero-btn-icon" />
          Resume
        </button>
      </a>
    </section>
  )
}