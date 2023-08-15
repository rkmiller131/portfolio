import React from 'react';
import ProjectBubble from './ProjectBubble.jsx';

import { useTheme } from '../DarkThemeContext.jsx';
import '../styles/projects.scss';

export default function Projects() {
  const darkMode = useTheme();

  const leftProjects = [
    {
      title: 'OldSkool CFVanguard',
      description: 'Developed the backend for a legacy playstyle card searching app. Harvested specific card IDs with a script and utilized Mongock for an ETL process that object mapped relevant card information from an external API into a MongoDB.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692131215/cfVanguardDemo_pyu7nq.mp4'
    },
    {
      title: 'Personal Portfolio',
      description: 'An echo of this frotend portfolio. UI designed with Figma and developed with plain React, Scss, and MaterialUI.',
      src: ''
    }
  ];
  const rightProjects = [
    {
      title: 'Styl Forge',
      description: 'Created the Ratings & Reviews widget for a full stack E-commerce app. Designed a fractional star rating system, review submission form, and product breakdown graphs with Flexbox. Optimized PostgreSQL queries to handle 1,000+ requests per second once depolyed on AWS EC2.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692139856/ShortenedFECDemo_vyagyn.mp4'
    },
    {
      title: 'Lifetrack Labs',
      description: 'A minimum viable product (MVP) created in 2.5 days as a prototype for a blood lab interpretation app. A passion project that uses unbiased research to establish correlations between blood lab results and lifestyle choices.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692139995/mvp-demo_lmtz2a.mp4'
    }
  ];

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
        </figure>
        <h2 className="projects-text">Projects</h2>
      </div>

      <div className="projects-container">

        <article className={darkMode ? 'project-column lefty dark' : 'project-column lefty'}>
          {leftProjects.map((project) => <ProjectBubble project={project} className={'left-bubble'} key={project} />)}
        </article>

        <article className={darkMode ? 'project-column righty dark' : 'project-column righty'}>
          {rightProjects.map((project) => <ProjectBubble project={project} className={'right-bubble'} key={project} />)}
        </article>
      </div>

    </section>
  );
}