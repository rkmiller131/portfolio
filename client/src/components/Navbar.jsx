import React, { useState } from 'react';
import NavMobile from './NavMobile.jsx';

import '../styles/navbar.scss';

export default function Navbar() {
  return (
    <header className="toolbar">
      <a href="/">
        <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691612528/RachelLogoRed_jayuhq.png" alt="Rachel's logo: semicolon inside two curly braces"/>
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