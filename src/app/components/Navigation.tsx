'use client';
import { AppBar, Box, Button, Drawer, IconButton, List, Toolbar, Typography, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Navigation() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
    <>
    <AppBar position="fixed" sx={{ bgcolor: 'rgba(10, 10, 15, 0.6)', boxShadow: 'none', borderBottom: '1px solid #333', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio de Vincent Pham
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" href="#about" sx={{ ml: 2 }}>À propos de moi</Button>
            <Button color="inherit" href="#projects" sx={{ ml: 2 }}>Projets</Button>
            <Button color="inherit" href="#formations" sx={{ ml: 2 }}>Formations</Button>
            <Button color="inherit" href="#exp" sx={{ ml: 2 }}>Expériences</Button>
        </Box>
        {}
        <IconButton color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'none' } }} onClick={handleOpen}>
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer anchor="right" open={open} onClose={handleOpen}>
        <List sx={{ mt: 3 }}>
            <ListItem>
                <ListItemButton href="#about" onClick={handleOpen}>
                    <ListItemText primary="À propos de moi" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton href="#projects" onClick={handleOpen}>
                    <ListItemText primary="Projects" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton href="#formations" onClick={handleOpen}>
                    <ListItemText primary="Formations" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton href="#exp" onClick={handleOpen}>
                    <ListItemText primary="Expériences" />
                </ListItemButton>
            </ListItem>
        </List>
    </Drawer>
    </>
  );
}
