import React from 'react';
import ProjectBubble from './ProjectBubble.jsx';

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

        <article className={darkMode ? 'project-column lefty dark' : 'project-column lefty'}>
          {[0, 1].map((placeholder) => <ProjectBubble className={'left-bubble'} key={placeholder} />)}
        </article>

        <article className={darkMode ? 'project-column righty dark' : 'project-column righty'}>
        {[0, 1].map((placeholder) => <ProjectBubble className={'right-bubble'} key={placeholder} />)}
        </article>
      </div>

    </section>
  );
}