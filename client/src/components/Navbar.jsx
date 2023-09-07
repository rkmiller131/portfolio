import React, { useState } from 'react';
import { useTheme } from '../DarkThemeContext.jsx';
import NavMobile from './NavMobile.jsx';
import ThemeButton from './ThemeButton.jsx';

import '../styles/navbar.scss';

export default function Navbar() {
  const darkMode = useTheme();
  return (
    <header className={darkMode ? "nav-wrapper dark" : "nav-wrapper"}>
      <div className="navbar">
        <a href="/" className={darkMode ? "logo dark" : "logo"} />
        <div className="navigation-links">
          <NavMobile />
          <nav className={darkMode ? "navigation-desktop dark" : "navigation-desktop"}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
        <ThemeButton />
    </header>
  )
}

// export default function Navbar() {
//   const darkMode = useTheme();
//   return (
//     <header className="nav-wrapper">
//       <nav className="navbar">
//         <div className="navbar-content">
//           <div className="nav-left">
//           </div>
//           <div className="nav-right">
//             TESTING RIGHT
//           </div>
//           <ThemeButton />
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default function Navbar() {
//   const darkMode = useTheme();
//   return (
//     <header className={darkMode ? "nav dark" : "nav"}>
//       <a className="logo" href="/">
//         {darkMode ?
//           <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691973707/RachelLogoPurple_wurjos.png" alt="Rachel's logo: semicolon inside two curly braces" />
//           :
//           <img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691973711/RachelLogoRed_si7e32.png" alt="Rachel's logo: semicolon inside two curly braces"/>
//         }
//       </a>
//       <nav className="navigation-links">
//         <NavMobile />
        // <ul>
        //   <li><a href="#home">Home</a></li>
        //   <li><a href="#projects">Projects</a></li>
        //   <li><a href="#about">About</a></li>
        //   <li><a href="#contact">Contact</a></li>
        // </ul>
//       </nav>
//     </header>
//   )
// }