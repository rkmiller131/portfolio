import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../DarkThemeContext.jsx';

export default function ContactForm({ submitForm }) {
  const darkMode = useTheme();
  const [details, setDetails] = useState({
    user_name: '',
    user_email: '',
    input1: '',
    input2: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((deets) => (
      {...deets, [name]: value}
    ));
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(details);
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <label className={darkMode ? 'dark' : ''}>Hello there, my name is</label>
      <input className={darkMode ? 'dark' : ''} type="text" name="user_name" onChange={handleChange} />
      <label className={darkMode ? 'indent dark' : 'indent'}>I'm reaching out because</label>
      <textarea className={darkMode ? 'indent dark' : 'indent'} name="input1" onChange={handleChange} />
      <label className={darkMode ? 'indent dark' : 'indent'}>If I were a bug<FontAwesomeIcon icon={faBug}/>, I would be</label>
      <textarea className={darkMode ? 'indent dark' : 'indent'} type="text" name="input2" onChange={handleChange} />
      <label className={darkMode ? 'dark' : ''}>Anyways, you can reach me at:</label>
      <input className={darkMode ? 'dark' : ''} type="email" name="user_email" onChange={handleChange} />
    </form>
  )
}