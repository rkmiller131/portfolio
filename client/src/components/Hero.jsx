import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '../DarkThemeContext.jsx';
import ThemeButton from './ThemeButton.jsx';
import Navbar from './Navbar.jsx';

export default function Hero() {
  const darkMode = useTheme();
  return (
    <section className={darkMode ? 'hero-section dark' : 'hero-section'} id="home">
      <Navbar />
      <ThemeButton />
      <div className="white-grid"></div>
      <div className="hero-content-container">
        <div className="hero-column">
          <article className="hero-left">
            <p className="hero-title anim-typewriter">Hi, I'm Rachel</p>
            <p className="hero-subtitle">Full Stack Software Engineer</p>
          </article>
        </div>
        <div className="hero-column">
          <div className="hero-right">
            <div className={`${darkMode ? "character-backdrop dark" : "character-backdrop"}`}>
              {darkMode ?
                <img className="character" src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691888601/300_2_cinamx.png" alt="blonde haired chibi girl with devil horns and hands together"/>
                :
                <img className="character" src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691605496/300__1_mi9t2u.png" alt="blonde haired chibi girl holding a giant pink heart"/>
              }
            </div>
          </div>
        </div>
      </div>
      <div className={`${darkMode ? "hero-slant dark" : "hero-slant"}`}>
        <a href="https://app.box.com/s/kjxbe409i76g3mi6v62feikjx4kxuu8p" target="blank">
          <button className={darkMode ? 'hero-btn dark' : 'hero-btn'}>
            <FontAwesomeIcon icon={faDownload} className="hero-btn-icon" />
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}