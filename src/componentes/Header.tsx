import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu'; 

const Header = () => {
  const buttonStyle = { color: 'black' };
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { text: 'HOME', link: '/' },
    { text: 'Registro', link: '/registro' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    checkIsMobile(); 
    window.addEventListener('resize', checkIsMobile); 

    return () => {
      window.removeEventListener('resize', checkIsMobile); 
    };
  }, []);

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: 'white', borderBottom: '8px solid orange' }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <img
              src="HackMX (2).png"
              alt="Logo"
              style={{ width: '250px', height: 'auto' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {isMobile ? ( 
              <Button
                style={buttonStyle}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </Button>
            ) : (
              
              menuItems.map((item, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={item.link}
                  style={buttonStyle}
                  onClick={closeDrawer}
                >
                  {item.text}
                </Button>
              ))
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.link}
              onClick={closeDrawer}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;












