import React, { useState, useContext, Suspense, lazy } from 'react';
import { ThemeProvider } from './DarkThemeContext.jsx';

import Hero from './components/Hero.jsx';
import TechStack from './components/TechStack.jsx';
// import Projects from './components/Projects.jsx';
// import Contact from './components/Contact.jsx';
const Projects = lazy(() => import('./components/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

import './styles/hero.scss';

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <Hero />
        <TechStack />
        <Suspense fallback={null}>
          <Projects />
          <Contact />
        </Suspense>
      </main>
    </ThemeProvider>
  )
}