import React, { useState } from 'react';
import { useTheme, useThemeUpdate } from '../DarkThemeContext.jsx';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import '../styles/themebtn.scss';

export default function ThemeButton() {
  const [checked, setChecked] = useState(false);
  const darkMode = useTheme();
  const toggleDarkTheme = useThemeUpdate();
  return (
    <div className="theme-btn">
      { darkMode ? <ModeNightIcon sx={{color: '#9c7cac'}}/> : <WbSunnyIcon sx={{color: '#FAFAFA'}}/> }
      <input
        type="checkbox"
        value={checked}
        onChange={toggleDarkTheme}
        className={darkMode ? 'dark' : 'checkbox'}
      />
    </div>
  )
}