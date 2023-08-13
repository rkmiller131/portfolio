import React from 'react';
import { useTheme, useThemeUpdate } from '../DarkThemeContext.jsx';

import '../styles/themebtn.scss';

export default function ThemeButton() {
  const darkMode = useTheme();
  const toggleDarkTheme = useThemeUpdate();
  return (
    <button className={darkMode ? 'theme-btn dark' : 'theme-btn'} onClick={toggleDarkTheme}>
      Theme Changer
    </button>
  )
}