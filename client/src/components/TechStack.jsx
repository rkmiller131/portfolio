import React from 'react';

import TechStackItem from './TechStackItem.jsx';
import CompanyCardItem from './CompanyCardItem.jsx';

import { useTheme } from '../DarkThemeContext.jsx';
import '../styles/techstack.scss';

export default function TechStack() {
  const darkMode = useTheme();

  const sections = ['frontEnd', 'backEnd', 'devTools'];
  const companies = [
    {
      name: 'Galvanize',
      url: 'https://www.galvanize.com/',
      img: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1722109876/galvanize_zneodf.jpg'
    },
    {
      name: 'Refactor Games',
      url: 'https://www.refactorgames.com/',
      img: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1722109962/refactor_wnkkp4.jpg'
    },
    {
      name: 'UbiquityVX',
      url: 'https://www.ubiquityvx.com/',
      img: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1722110093/uvxicon_ngyxis.svg'
    },
    {
      name: 'Infinite Reality',
      url: 'https://theinfinitereality.com/',
      img: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1722110157/ir_c11une.jpg',
    },
    {
      name: 'Gamer\'s Outreach',
      url: 'https://gamersoutreach.org/',
      img: 'https://res.cloudinary.com/dnr41r1lq/image/upload/v1722110405/gamers_nm5soy.jpg'
    },
  ]

  return (
    <section id="about" className={darkMode ? 'tech-stack dark' : 'tech-stack'}>
      <h2 className={darkMode ? 'tech-stack-text dark' : 'tech-stack-text'}>
        Tech Stack
      </h2>
      <div className="tech-stack-container">
        {sections.map((section, i) => <TechStackItem section={section} key={i}/>)}
      </div>
      <h2 className={darkMode ? 'industry-text dark' : 'industry-text'}>
        Industry Experience
      </h2>
      <div className="industry-experience-container">
        {companies.map((company, i) => <CompanyCardItem url={company.url} img={company.img} key={company.name}/>)}
      </div>
    </section>
  )
}