import React, { useState } from 'react';
import { useTheme } from '../DarkThemeContext.jsx';
import NavMobile from './NavMobile.jsx';
import ThemeButton from './ThemeButton.jsx';

import '../styles/navbar.scss';

export default function Navbar() {
  const darkMode = useTheme();
  return (
    <header className={darkMode ? "nav-wrapper dark" : "nav-wrapper"}>
      <div className="navbar">
        <a href="/" className={darkMode ? "logo dark" : "logo"} ariaLabel="Refresh, go back to the landing page"/>
        <div className="navigation-links">
          <NavMobile />
          <nav className={darkMode ? "navigation-desktop dark" : "navigation-desktop"}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
        <ThemeButton />
    </header>
  )
}