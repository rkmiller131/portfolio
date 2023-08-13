import React, { useState } from 'react';
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

  const styles = {
    menu: {
      fontFamily: 'Play',
      fontSize: '28px'
    },
    items: {
      fontFamily: 'Play',
      fontSize: '22px',
      padding: '10px',
      borderBottom: '1px solid white'
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
          <ListItemButton onClick={() => (document.getElementById(`#${text.toLowerCase()}`).scrollIntoView())}>
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
      <IconButton sx={{position: 'fixed', right: '2%'}} aria-label='menu' onClick={() => setToggleDrawer(true)}>
        <MenuIcon className={darkMode ? 'navburger dark' : 'navburger'} fontSize='large'/>
      </IconButton>
      <Drawer
        PaperProps={{
          elevation: 8,
          sx: {
            width: 240,
            color: '#FAFAFA',
            backgroundColor: '#9c7cac'
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