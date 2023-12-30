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
        <div className="hero-content-container">
          <article className="column hero-left">
            <p className={darkMode ? "hero-title anim-typewriter dark" : "hero-title anim-typewriter"}>
              Hi, I'm Rachel
            </p>
            <p className="hero-subtitle">
              Full Stack Software Engineer
            </p>
          </article>
          <div className={darkMode ? "column hero-right dark" : "column hero-right"} />
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