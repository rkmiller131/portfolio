import React, { useState, useEffect } from 'react';
import { useTheme } from '../DarkThemeContext.jsx';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import '../styles/navmobile.scss';

export default function NavMobile() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const darkMode = useTheme();

  useEffect(() => {
    function handler() {
      setToggleDrawer(false);
    }
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);

  })

  const styles = {
    menu: {
      fontFamily: 'Play',
      fontSize: '28px'
    },
    items: {
      fontFamily: 'Play',
      fontSize: '22px',
      padding: '10px',
      borderBottom: darkMode ? '1px solid #FAFAFA' : '1px solid #5e253c'
    }
  }

  const list = () => (
    <Box>
      <List>
        <ListItem>
          <ListItemText
            primaryTypographyProps={{ style: styles.menu }}
            primary='{ Menu }'
          />
        </ListItem>
        <Divider />
      </List>
      <List>
      {['Home', 'Projects', 'About', 'Contact'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => (document.getElementById(`${text.toLowerCase()}`).scrollIntoView())}>
            <ListItemText
              primaryTypographyProps={{ style: styles.items }}
              primary={text}
            />
          </ListItemButton>
        </ListItem>
      ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton sx={{position: 'absolute', right: '4%', top: '10%'}} aria-label='menu' className='menu' onClick={() => setToggleDrawer(true)}>
        <MenuIcon className={darkMode ? 'navburger dark' : 'navburger'} fontSize='large'/>
      </IconButton>
      <Drawer
        PaperProps={{
          elevation: 8,
          sx: {
            width: 240,
            color: darkMode ? '#FAFAFA' : '#5e253c',
            backgroundColor: darkMode ? '#202123' : '#FAFAFA'
          }
        }}
        anchor='right'
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
        >
      {list()}
      </Drawer>
    </>
  );
}