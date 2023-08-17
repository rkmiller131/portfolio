import React, { useState } from 'react';

export default function ContactForm({ submitForm }) {
  const [details, setDetails] = useState({
    user_name: '',
    user_email: '',
    input1: '',
    input2: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((dets) => (
      {...dets, [name]: value}
    ));
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(details);
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <label>Hello there, my name is</label>
      <input type="text" name="user_name" onChange={handleChange} />
      <label className="indent">I'm reaching out because</label>
      <textarea className="indent" name="input1" onChange={handleChange} />
      <label className="indent">If I were a bug, I would be</label>
      <textarea className="indent" type="text" name="input2" onChange={handleChange} />
      <label>Anyways, you can reach me at:</label>
      <input type="email" name="user_email" onChange={handleChange} />
    </form>
  )
}