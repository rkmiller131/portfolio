import React from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm.jsx';
import ContactTabs from './ContactTabs.jsx';
import Footer from './Footer.jsx';

import { useTheme } from '../DarkThemeContext.jsx';
import '../styles/contactform.scss';
import '../styles/contact.scss';

function submitForm(details) {
  const message = `Hello there, my name is ${details.user_name}. I'm reaching out because ${details.input1}. If I were a bug, I would be: >> ${details.input2}. << Anyways, you can reach me at ${details.user_email}.`;
  const templateParams = {
    user_name: details.user_name,
    user_email: details.user_email,
    message: message
  };
  emailjs.send('service_pyjzf4d', 'template_aig3nmf', templateParams, 'zld5m_PN1O1qXgvPS')
    .then((response) => {
      alert('Thanks! We\'ll be in touch.');
    })
    .catch((error) => {
      alert('Oops! Something went wrong. Please try again.');
    })
}

export default function Contact() {
  const darkMode = useTheme();
  return (
    <section id="contact" className={darkMode ? 'contact-section dark' : 'contact-section'}>
      <h2 className={darkMode ? 'contact-title dark' : 'contact-title'}>Contact Me</h2>

      <div className={darkMode ? 'contact-container dark' : 'contact-container'}>
        <div className="contact-column-left">
          <ContactForm submitForm={submitForm}/>
        </div>3
        <div className={darkMode ? 'contact-column-right dark' : 'contact-column-right'}>
          <ContactTabs />
          <button form="contact-form" type="submit" className={darkMode ? 'contact-btn dark' : 'contact-btn'}><FontAwesomeIcon icon={faPaperPlane} className="send-icon"/>Send</button>
          <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1692225003/112_ftlggu.png" alt="blonde chibi taking notes" />
        </div>
      </div>

      <a className={darkMode ? 'portfolio-github dark' : 'portfolio-github'} href="https://github.com/rkmiller131/portfolio" target="blank">See this portfolio on GitHub</a>

      <Footer />

    </section>
  )
}