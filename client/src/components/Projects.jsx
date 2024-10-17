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
      description: `A custom Content Management System (CMS) designed for an indie game studio and made with React and CSS modules to create directly editable components and page layouts through an admin interface. Leveraged Next.js's dynamic routes to add new pages each time the admin creates a blog post.`,
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1702160880/PapercatAdminDemo_zaar0r.mp4',
      github: 'https://github.com/Paper-Studios/cms-papercat',
      link: 'https://papercatgames.com/',
      id: 198
    },
    {
      title: 'Styl Forge',
      description: 'Translated UI wireframe design into a SPA, creating a fractional 5-star rating system and product breakdown charts with vanilla CSS. Employed industry standard testing libraries such as Jest and RTL, achieving 80% code coverage for unit and integration tests. Enabled photo uploads in URL format via externally hosted base64 data to address backend compatibility issues.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692139856/ShortenedFECDemo_vyagyn.mp4',
      github: 'https://github.com/CBC-Ecommerce/styl-forge',
      // link: 'http://54.177.180.141:3000/',
      id: 567
    },
    {
      title: 'Village Sports',
      description: 'A sports league meetup mobile app with React Native. Developed a Home Page carousel, weekly announcement feed and Wishlist feature, integrating Firebase authentication and Firestore database.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692151765/Untitled_video_ohhxpp.mp4',
      github: 'https://github.com/Blue-Ocean-Naruto/Village-Sports',
      id: 345
    },
    {
      title: 'Dog Age Calculator',
      description: `A fun app for converting a dog's age into the human equivalent using two different formulas (it's a little more than just the age times 7). Created over a holiday weekend using an accessible, mobile-first approach.`,
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1703956908/dogAgeDemo_vughie.mp4',
      github: 'https://github.com/rkmiller131/dog-age-calculator',
      link: 'https://calculatedogage.netlify.app/',
      id: 7922
    },
  ];
  const rightProjects = [
    {
      title: 'Discord Achievement Bot',
      description: 'A social reward system for interacting with peers on a Discord server using Discord API Websockets, Node, and MongoDB. Unlock 15 different achievements over time and see community ranks with a "/leaderboard" command.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1729171237/DiscordBotDemo_xhrjgu.mp4',
      github: 'https://github.com/rkmiller131/achievement-bot',
      link: 'https://discord.com/oauth2/authorize?client_id=1264779705685639261&scope=bot&permissions=311419989056',
      id: 77774
    },
    {
      title: 'WhimsiWorld',
      description: 'Pioneered the inception of a collaborative, turn-based creative writing platform for storytelling with friends using multimedia assets, community engagement, and competition. Created over 100 visual assets and story packs using Photoshop, Figma, generative AI, and styled the storyboard home page with React and Tailwind CSS to ensure a cohesive and engaging user experience.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1695477373/WhimsiWorldDemo_mvdoxy.mp4',
      github: 'https://github.com/WhimsWorld/BlueOcean',
      id: 222
    },
    {
      title: 'OldSkool CFVanguard',
      description: 'Wrote a script to generate a JSON file containing 1000+ card Ids and names categorized by deck release dates, sourced from a CardFight!! Vanguard API. Utilized this JSON data to access specific card details from an external API, implementing object mapping techniques to populate a MongoDB database. Employed scheduled annotation for the front-end to fetch daily random cards at 9 a.m. PST. Made in Java/Spring MVC.',
      src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692131215/cfVanguardDemo_pyu7nq.mp4',
      github: 'https://github.com/oldskool-vg/oldskoolbackend',
      id: 123
    },
    // {
    //   title: 'LifeTrack Labs',
    //   description: 'A minimum viable product (MVP) created in 2.5 days as a prototype for a blood lab interpretation app. A passion project that I want the world to have; an app that uses unbiased research to establish correlations between blood lab results and lifestyle choices. Open to collab? Contact me!',
    //   src: 'https://res.cloudinary.com/dnr41r1lq/video/upload/v1692147931/LifeTrackDemo_1_oepqcq.mp4',
    //   github: 'https://github.com/rkmiller131/LifeTrack-Labs',
    //   id: 789
    // }
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