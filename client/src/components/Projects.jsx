import React, { useState, useEffect } from 'react';
import ProjectBubble from './ProjectBubble.jsx';
import MuiMediaCard from './MuiMediaCard.jsx';

import { useTheme } from '../DarkThemeContext.jsx';
import '../styles/projects.scss';

export default function Projects() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const darkMode = useTheme();

  // track screen size to programmatically render either a motion project component or a static if on mobile
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    }
    // An event listener upon mounting to update the screen size. This will change
    // the state, causing another firing of the useEffect and will continue updating the screen size
    // until the state is no longer changing, then it unmounts.
    window.addEventListener('resize', updateDimension);

    // cleanup function for when the component unmounts
    return () => window.removeEventListener('resize', updateDimension);
  }, [screenSize])

  const leftProjects = [
    {
      title: 'Paper Cat Games',
      description: `A promotional website for an indie game studio. Recognized the client's need for autonomous content management without web development expertise, and proposed a bespoke CMS solution using React Bricks that empowered them with the flexibility to make real-time changes and add future content as the studio expands. Leveraged Next.js's dynamic routes to add new pages each time the admin creates a blog post.`,
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1702160880/PapercatAdminDemo_zaar0r.mp4',
      github: 'https://github.com/Paper-Studios/cms-papercat',
      link: 'https://admirable-clafoutis-124804.netlify.app/',
      id: 198
    },
    {
      title: 'Styl Forge',
      description: 'Translated UI wireframe design into a SPA, creating an innovative fractional 5-star rating system and product breakdown charts with vanilla CSS. Employed industry standard testing libraries such as Jest and RTL, achieving 80% code coverage for unit tests. Enabled photo uploads in URL format via externally hosted base64 data to address backend compatibility issues.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692139856/ShortenedFECDemo_vyagyn.mp4',
      github: 'https://github.com/CBC-Ecommerce/styl-forge',
      link: 'http://54.177.180.141:3000/',
      id: 567
    },
    // {
    //   title: 'Village Sports',
    //   description: 'A sports league meetup mobile app with React Native. Developed a Home Page carousel, weekly announcement feed and Wishlist feature, integrating Firebase authentication and Firestore database.',
    //   src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692151765/Untitled_video_ohhxpp.mp4',
    //   github: 'https://github.com/Blue-Ocean-Naruto/Village-Sports',
    //   id: 345
    // }
    {
      title: 'Dog Age Calculator',
      description: `A fun app for converting a dog's age into the human equivalent using two different formulas (it's a little more than just the age times 7). Created over a holiday weekend using an accessible, mobile-first approach.`,
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1703956908/dogAgeDemo_vughie.mp4',
      github: 'https://github.com/rkmiller131/dog-age-calculator',
      link: 'https://calculatedogage.netlify.app/',
      id: 7922
    }
  ];
  const rightProjects = [
    {
      title: 'WhimsiWorld',
      description: 'Pioneered the inception of a collaborative, turn-based creative writing platform for storytelling with friends using multimedia assets, community engagement, and competition. Created over 100 visual assets and story packs using Photoshop, Figma, generative AI, and styled the storyboard home page with React and Tailwind CSS to ensure a cohesive and engaging user experience.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1695477373/WhimsiWorldDemo_mvdoxy.mp4',
      github: 'https://github.com/WhimsWorld/BlueOcean',
      id: 222
    },
    {
      title: 'OldSkool CFVanguard',
      description: 'Developed the backend for a legacy playstyle card searching app. Harvested pertinent card IDs by extracting data from external API and utilized Mongock for an ETL process that object mapped relevant card information into a MongoDB. Employed scheduled annotation for front-end to fetch daily random cards at 9 a.m. PST while learning Java, SpringMVC, Mongock, and Unirest within 3 weeks.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692131215/cfVanguardDemo_pyu7nq.mp4',
      github: 'https://github.com/oldskool-vg/oldskoolbackend',
      id: 123
    },
    {
      title: 'LifeTrack Labs',
      description: 'A minimum viable product (MVP) created in 2.5 days as a prototype for a blood lab interpretation app. A passion project that I want the world to have; an app that uses unbiased research to establish correlations between blood lab results and lifestyle choices. Open to collab? Contact me!',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692147931/LifeTrackDemo_1_oepqcq.mp4',
      github: 'https://github.com/rkmiller131/LifeTrack-Labs',
      id: 789
    }
  ];

  return (
    <section id="projects" className={darkMode ? 'projects dark' : 'projects'}>
      <div className="project-grid" />
      <div className="slanted-figure-bg" />
      {/* Thank you wonderful internet resource: https://css-tricks.com/cutting-inner-part-element-using-clip-path/ */}
      <div className={darkMode ? "slanted-figure dark" : "slanted-figure"} />

      <div className="projects-container">
        <article className={darkMode ? 'project-column lefty dark' : 'project-column lefty'}>
          {
            screenSize.width < 900 ?
              leftProjects.map((project) => <div className="left-bubble" key={project.id}><MuiMediaCard project={project}/></div>)
              :
              leftProjects.map((project) => <ProjectBubble project={project} className={'left-bubble'} key={project.id} />)
          }
        </article>

        <article className={darkMode ? 'project-column righty dark' : 'project-column righty'}>
          {
            screenSize.width < 900 ?
              rightProjects.map((project, i) => <div className="right-bubble" key={i}><MuiMediaCard project={project}/></div>)
              :
              rightProjects.map((project, i) => <ProjectBubble project={project} className={'right-bubble'} key={i} />)
          }
        </article>
      </div>

      <div className="line-extension-container">
        <div className={darkMode ? "line-extension dark" : "line-extension"} />
        <div className="placeholder-col" />
      </div>

    </section>
  );
}