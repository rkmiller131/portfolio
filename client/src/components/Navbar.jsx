import React, { useState } from 'react';
import { useTheme } from '../DarkThemeContext.jsx';
import NavMobile from './NavMobile.jsx';

import '../styles/navbar.scss';

export default function Navbar() {
  const darkMode = useTheme();
  return (
    <header className={darkMode ? "toolbar dark" : "toolbar"}>
      <a href="/">
        {darkMode ?
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691973707/RachelLogoPurple_wurjos.png" alt="Rachel's logo: semicolon inside two curly braces" />
          :
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691973711/RachelLogoRed_si7e32.png" alt="Rachel's logo: semicolon inside two curly braces"/>
        }
      </a>
      <nav className="toolbar-navigation">
        <NavMobile />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}