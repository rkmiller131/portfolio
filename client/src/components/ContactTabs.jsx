import React from 'react';
import { useTheme } from '../DarkThemeContext.jsx';

export default function ContactTabs() {
  const darkMode = useTheme();
  return (
    <div className="contact-tabs">
      <div className={darkMode ? 'link-tab dark' : 'link-tab'}>
      {'>'}
      <a href="https://www.linkedin.com/in/rachel-miller-mlr/" target="blank">
        LinkedIn
      </a>
      </div>

      <div className={darkMode ? 'link-tab dark' : 'link-tab'}>
        {'>'}
        <a href="https://github.com/rkmiller131" target="blank">
          Github
        </a>
      </div>
    </div>
  )
}