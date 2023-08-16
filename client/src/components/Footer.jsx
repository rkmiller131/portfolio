import React from 'react';
import { useTheme } from '../DarkThemeContext.jsx';

export default function Footer() {
  const darkMode = useTheme();
  return (
    <footer className={darkMode ? 'contact-footer dark' : 'contact-footer'}>
      <p>© 2023 Rachel Miller - Crafting Code and Spreading Smiles one pixel at a time ⭐</p>
      <p>Chibi art by ArtStudioRiri [Twitch] - <a href="https://www.twitch.tv/liliangreen" target="blank">https://www.twitch.tv/liliangreen</a> [Twitter] - <a href="https://twitter.com/EmoteRiriGurin" target="blank">@EmoteRiriGurin</a></p>
    </footer>
  );
}