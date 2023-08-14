import React from 'react';
import { useTheme } from '../DarkThemeContext.jsx';

export default function TechStackItem({ section }) {
  const darkMode = useTheme();
  let techList;

  switch(section) {
    case 'frontEnd':
      techList = ['JavaScript', 'React', 'React Native', 'Html', 'CSS', 'Sass'];
      break;
    case 'backEnd':
      techList = ['Node', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL', 'Spring Boot MVC'];
      break;
    case 'devTools':
      techList = ['Jest', 'GitHub', 'Trello', 'Amazon AWS', 'CircleCI', 'Webpack'];
      break;
    default:
      return techList;
  }

  return (
    <div className={darkMode ? 'stack-item-container dark' : 'stack-item-container'}>
      {darkMode ?
        <div className="stack-items dark">
          <img src="" alt="Open purple curly brace icon" />
          <span className="section-label dark">{`${section}: [`}</span>
          {techList.map((technology) => <div>{technology}</div>)}
          <span className="section-label dark">{']'}</span>
          <img src="" alt="Close purple curly brace icon" />
        </div>
        :
        <div className="stack-items">
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691373172/favicon_latcnb.ico" alt="Open red curly brace icon" />
          <span className="section-label">{`${section}: [`}</span>
          {techList.map((technology) => <div>{technology}</div>)}
          <span className="section-label">{']'}</span>
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691373172/favicon_latcnb.ico" alt="Close red curly brace icon" />
        </div>
      }
    </div>
  )
}