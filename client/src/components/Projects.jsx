import React from 'react';

import { useTheme } from '../DarkThemeContext.jsx';
import '../styles/projects.scss';

export default function Projects() {
  const darkMode = useTheme();

  return (
    <section id="projects" className={darkMode ? 'projects dark' : 'projects'}>
      <div className="white-grid project-grid" />

      <div className="figure-container">
        <figure className="projects-title">
          {darkMode ?
            <img className="title-image dark" src={require('../assets/dark/darkModeSlant.png')} alt="slanted figure" />
            :
            <img className="title-image" src={require('../assets/light/lightModeSlant.png')} alt="slanted figure" />
          }
          <h2 className="projects-text">Projects</h2>
        </figure>
      </div>

      <div className="projects-container">

        <article className="project-column lefty">
          <div className="left-col">Left 1</div>
          <div className="left-col">Left 2</div>
        </article>

        <article className="project-column righty">
          <div className="right-col">Right 1</div>
          <div className="right-col">Right 2</div>
        </article>
      </div>

    </section>
  );
}