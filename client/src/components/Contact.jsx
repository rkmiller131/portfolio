import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm.jsx';
import ContactTabs from './ContactTabs.jsx';
import Footer from './Footer.jsx';

import { useTheme } from '../DarkThemeContext.jsx';
import '../styles/contactform.scss';
import '../styles/contact.scss';
{/* <FontAwesomeIcon icon={faPaperPlane} className="contact-send-icon"/> */}

function submitForm(details) {
  console.log('submitting form');
  console.log(details);
}

export default function Contact() {
  const darkMode = useTheme();
  return (
    <section id="contact" className={darkMode ? 'contact-section dark' : 'contact-section'}>
      <h2 className={darkMode ? 'contact-title dark' : 'contact-title'}>Contact Me</h2>

      <div className={darkMode ? 'contact-container dark' : 'contact-container'}>
        <div className="contact-column-left">
          <ContactForm submitForm={submitForm}/>
        </div>
        <div className={darkMode ? 'contact-column-right dark' : 'contact-column-right'}>
          <ContactTabs />
          <button form="contact-form" type="submit">Testing Outside Button</button>
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1692225003/112_ftlggu.png" alt="blonde chibi taking notes" />
        </div>
      </div>

      <a className={darkMode ? 'portfolio-github dark' : 'portfolio-github'} href="https://github.com/rkmiller131/portfolio" target="blank">See this portfolio on GitHub</a>

      <Footer />

    </section>
  )
}