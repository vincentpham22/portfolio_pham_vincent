'use client';
import { AppBar, Box, Button, Drawer, IconButton, List, Toolbar, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import GradientText from './GradientText';

const NAV_LINKS = [
    { href: '#about', label: 'À propos de moi' },
    { href: '#projects', label: 'Projets' },
    { href: '#formations', label: 'Formations' },
    { href: '#exp', label: 'Expériences' },
];

export default function Navigation() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
    <>
    <AppBar
      position="fixed"
      className="glass--nav"
      sx={{
        backgroundColor: 'var(--au-glass-fill-hi)',
        backgroundImage: 'none',
        backdropFilter: 'blur(18px) saturate(150%)',
        WebkitBackdropFilter: 'blur(18px) saturate(150%)',
        borderBottom: '1px solid var(--au-hairline)',
        boxShadow: 'var(--au-glass-shadow)',
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        <GradientText
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 800,
            letterSpacing: '-0.01em',
          }}
        >
          Portfolio de Vincent Pham
        </GradientText>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                disableRipple
                sx={{
                  position: 'relative',
                  color: 'var(--au-text-dim)',
                  px: 1.75,
                  py: 1,
                  fontWeight: 600,
                  transition:
                    'color var(--au-dur-fast) ease, background-color var(--au-dur-fast) ease',
                  '&:hover': {
                    color: 'var(--au-text)',
                    backgroundColor: 'transparent',
                  },
                  // Center-growing underline: blue-light -> azure gradient.
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    bottom: 6,
                    transform: 'translateX(-50%) scaleX(0)',
                    transformOrigin: 'center',
                    width: 'calc(100% - 28px)',
                    height: '2px',
                    borderRadius: '2px',
                    background:
                      'linear-gradient(90deg, var(--au-blue-light), var(--au-azure))',
                    boxShadow: '0 0 10px rgba(91,200,255,0.55)',
                    transition: 'transform var(--au-dur-base) var(--au-ease-glide)',
                  },
                  '&:hover::after, &:focus-visible::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
        </Box>
        {}
        <IconButton
          aria-label="menu"
          className="glow-pill"
          onClick={handleOpen}
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: 'inherit',
            border: '1px solid var(--au-hairline)',
            borderRadius: '12px',
          }}
        >
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer
      anchor="right"
      open={open}
      onClose={handleOpen}
      transitionDuration={360}
    >
        <List sx={{ mt: 4, px: 1.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <ListItem disablePadding>
                <ListItemButton href="#about" onClick={handleOpen}>
                    <ListItemText primary="À propos de moi" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton href="#projects" onClick={handleOpen}>
                    <ListItemText primary="Projects" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton href="#formations" onClick={handleOpen}>
                    <ListItemText primary="Formations" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton href="#exp" onClick={handleOpen}>
                    <ListItemText primary="Expériences" />
                </ListItemButton>
            </ListItem>
        </List>
    </Drawer>
    </>
  );
}
