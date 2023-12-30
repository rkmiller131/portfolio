import React, { useState, useContext } from 'react';
import { ThemeProvider } from './DarkThemeContext.jsx';

import Hero from './components/Hero.jsx';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

import './styles/hero.scss';

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  )
}