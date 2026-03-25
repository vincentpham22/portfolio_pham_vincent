'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f6196',
      light: '#6B8FC9',
      dark: '#1E3A5F',
    },
    secondary: {
      main: '#FF6584',
    },
    background: {
      default: '#0A0A0F',  // fond de la page
      paper: '#13131A',    // fond des cards, surfaces
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0A0B0',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: { fontWeight: 800 },
    h2: {
      fontFamily: "Nunito",
      fontWeight: 700,
      "@media (max-width:800px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontFamily: "Nunito",
      fontWeight: 600,
      "@media (max-width:800px)": {
        fontSize: "2.5rem",
      },
    },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600, 
      "@media (max-width:800px)": {
        fontSize: "1rem",
     },
    },
    body1: {
      "@media (max-width:800px)": {
        fontSize: "0.85rem",
      },
    },
    body2: {
      "@media (max-width:800px)": {
        fontSize: "0.75rem",
      },
    },
  },
  shape: {
    borderRadius: 12, // coins arrondis pour toutes les Cards/Buttons
  },
  components: {
    // Override global du Button MUI
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 800,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // évite le gradient MUI par défaut sur les cards dark
          border: '1px solid rgba(255,255,255,0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '0.75rem',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(10, 10, 15, 0.6)',
          backdropFilter: 'blur(10px)',
          borderLeft: '1px solid #333',
          width: 250,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 600,
          textTransform: 'uppercase',
        },
      },
    },
  }
});

export default theme;
