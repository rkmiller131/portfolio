import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Routes, Route, Link, RouterProvider } from 'react-router-dom';
import '../styles/navbar.scss';

// navLink components
import Hero from './Hero.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Hero />,
//   },
// ]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Hero />} />
//   )
// )

export default function Navbar() {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-logo"><a href="/"><img src="https://res.cloudinary.com/dnr41r1lq/image/upload/v1691612528/RachelLogoRed_jayuhq.png" alt="Rachel's logo: semicolon inside two curly braces"/></a></div>
        <div className="spacer"></div>
        <div className="navigation-items">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}