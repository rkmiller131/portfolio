import React from 'react';
import TechStackItem from './TechStackItem.jsx';

import { useTheme } from '../DarkThemeContext.jsx';
import '../styles/techstack.scss';

export default function TechStack() {
  const darkMode = useTheme();

  const sections = ['frontEnd', 'backEnd', 'devTools'];

  return (
    <section className={darkMode ? 'tech-stack dark' : 'tech-stack'}>
      <h2 className={darkMode ? 'tech-stack-text dark' : 'tech-stack-text'}>
        Tech Stack
      </h2>
      {sections.map((section, i) => <TechStackItem section={section} key={i}/>)}
    </section>
  )
}