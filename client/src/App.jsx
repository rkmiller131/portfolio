import React, { useState, useContext } from 'react';
import { ThemeProvider } from './DarkThemeContext.jsx';

import Hero from './components/Hero.jsx';
import './styles/hero.scss';

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <Hero />
      </main>
    </ThemeProvider>
  )
}