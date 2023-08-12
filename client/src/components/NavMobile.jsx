import React, { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import '../styles/navmobile.scss';

export default function NavMobile() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <>
      <IconButton sx={{position: 'fixed', right: '2%'}} aria-label='menu' onClick={() => setToggleDrawer(true)}>
        <MenuIcon className='navburger' fontSize='large'/>
      </IconButton>
      <Drawer anchor='right' open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
        <h2 className="sidebar-title">Menu</h2>
        <nav className="sidebar-navigation">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      </Drawer>
    </>
  )
}