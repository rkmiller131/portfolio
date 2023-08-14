import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useTheme } from '../DarkThemeContext.jsx';

export default function TechStackItem({ section }) {
  const darkMode = useTheme();
  // set a reference to our wrapping div, and track if it is in view ONCE it is scrolled to (framer motion uses intersection observer under the hood, only fires it once rather than over and over again)
  const stackSectionRef = useRef(null);
  const isInView = useInView(stackSectionRef, { once: true});
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // controls.start('visible') is the same as controls.start({ y: 0, opacity: 1 });
      // it maps to the visible variant in the motion.div below
      controls.start('visible');
    }
  }, [isInView])

  let techList;
  let imgList;

  switch(section) {
    case 'frontEnd':
      techList = ['JavaScript', 'React', 'React Native', 'Html', 'CSS', 'Sass'];
      imgList = ['js', 'react', 'reactnative', 'html', 'css', 'sass'];
      break;
    case 'backEnd':
      techList = ['Node', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL', 'SpringMVC'];
      imgList = ['node', 'express', 'mongo', 'postgres', 'mysql', 'spring'];
      break;
    case 'devTools':
      techList = ['Jest', 'GitHub', 'Trello', 'Amazon AWS', 'CircleCI', 'Webpack'];
      imgList = ['jest', 'github', 'trello', 'aws', 'circleci', 'webpack'];
      break;
    default:
      return techList;
  }

  return (
    <motion.div
      ref={stackSectionRef}
      className={darkMode ? 'stack-item-container dark' : 'stack-item-container'}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {/* for responsiveness: change the section titles to be above the icons on mobile */}
      <span className={darkMode ? 'section-label-mobile dark' : 'section-label-mobile'}>{`[ ${section} ]`}</span>
      {/* for an on hover effect to display the text of each technology */}
      <div className={darkMode ? 'stack-items-hover-text dark' : 'stack-items-hover-text'}><p>{techList.join(', ')}</p></div>
      {darkMode ?
        <div className="stack-items dark">
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691974395/purpleCurlyOpen_z2v3tb.png" alt="Open purple curly brace icon" />
          <span className="section-label dark">{`${section}: [`}</span>
          {imgList.map((icon, i) => <img className="tech-icon" src={require(`../assets/dark/dark${icon}.png`)} key={i}/>)}
          <span className="section-label dark">{']'}</span>
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691974392/purpleCurlyClose_dbeo5w.png" alt="Close purple curly brace icon" />
        </div>
        :
        <div className="stack-items">
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691974389/redCurlyOpen_xkvc6w.png" alt="Open red curly brace icon" />
          <span className="section-label">{`${section}: [`}</span>
          {imgList.map((icon, i) => <img className="tech-icon" src={require(`../assets/light/${icon}.png`)} key={i}/>)}
          <span className="section-label">{']'}</span>
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691974385/redCurlyClose_e0boks.png" alt="Close red curly brace icon" />
        </div>
      }
    </motion.div>
  )
}