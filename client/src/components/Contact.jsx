import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer.jsx';

import { useTheme } from '../DarkThemeContext.jsx';
import '../styles/contact.scss';
{/* <FontAwesomeIcon icon={faPaperPlane} className="contact-send-icon"/> */}

export default function Contact() {
  const darkMode = useTheme();
  return (
    <section id="contact" className={darkMode ? 'contact-section dark' : 'contact-section'}>
      <h2 className={darkMode ? 'contact-title dark' : 'contact-title'}>Contact Me</h2>
      <div className={darkMode ? 'contact-container dark' : 'contact-container'}>
        <div className="contact-column-left">
          LEFTY
        </div>
        <div className={darkMode ? 'contact-column-right dark' : 'contact-column-right'}>
          <div className={darkMode ? 'link-tab dark' : 'link-tab'}>{'>'}<a href="https://www.linkedin.com/in/rachel-miller-mlr/" target="blank">LinkedIn</a></div>
          <div className={darkMode ? 'link-tab dark' : 'link-tab'}>{'>'}<a href="https://github.com/rkmiller131" target="blank">Github</a></div>
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1692225003/112_ftlggu.png" alt="blonde chibi taking notes" />
        </div>
      </div>

      <a className={darkMode ? 'portfolio-github dark' : 'portfolio-github'} href="https://github.com/rkmiller131/portfolio" target="blank">See this portfolio on GitHub</a>

      <Footer />

    </section>
  )
}