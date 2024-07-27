import React, { useState, useEffect } from 'react';
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

  const [errors, setErrors] = useState({});

  function validateForm() {
    let formErrors = {};
    let formValid = true;

    if (!details.user_name) {
      formErrors.user_name = 'your name';
      formValid = false;
    }

    if (!details.user_email) {
      formErrors.user_email = 'your email';
      formValid = false;
    }

    if (!details.input1) {
      formErrors.input1 = 'a message for why you are reaching out';
      formValid = false;
    }

    setErrors(formErrors);
    return formValid;
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      alert(`Oops! I need some more information to submit the form: ${Object.values(errors).join(', ')}.`);
    }
  }, [errors]);

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((deets) => (
      {...deets, [name]: value}
    ));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    } else {
      submitForm(details);
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} ariaLabel="Fill in the sentence blanks to send a message">
      <label className={darkMode ? 'left-align dark' : 'left-align'} htmlFor="user_name">Hello there, my name is</label>
      <input className={darkMode ? 'left-align dark' : 'left-align'} type="text" name="user_name" onChange={handleChange} />

      <label className={darkMode ? 'indent dark' : 'indent'} htmlFor="input1">I'm reaching out because</label>
      <input className={darkMode ? 'indent dark' : 'indent'} type="text" name="input1" onChange={handleChange} />

      <label className={darkMode ? 'indent dark' : 'indent'} htmlFor="input2">If I were a bug<FontAwesomeIcon icon={faBug}/>, I would be</label>
      <input className={darkMode ? 'indent dark' : 'indent'} type="text" name="input2" onChange={handleChange} />

      <label className={darkMode ? 'left-align dark' : 'left-align'} htmlFor="user_email">Anyways, you can reach me at:</label>
      <input className={darkMode ? 'left-align dark' : 'left-align'} type="email" placeholder='yourEmail@email.com' name="user_email" onChange={handleChange} />
    </form>
  )
}