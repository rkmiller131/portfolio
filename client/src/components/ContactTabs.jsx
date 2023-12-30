import React from 'react';
import { useTheme } from '../DarkThemeContext.jsx';

export default function ContactTabs() {
  const darkMode = useTheme();
  return (
    <div className="contact-tabs">
      <a href="https://www.linkedin.com/in/rachel-miller-mlr/" target="blank">
        <div className={darkMode ? 'link-tab dark' : 'link-tab'}>
          {'>'}
          <span>LinkedIn</span>
        </div>
      </a>
      <a href="https://github.com/rkmiller131" target="blank">
        <div className={darkMode ? 'link-tab dark' : 'link-tab'}>
          {'>'}
          <span>GitHub</span>
        </div>
      </a>
    </div>
  )
}