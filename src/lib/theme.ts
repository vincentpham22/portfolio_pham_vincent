'use client';
import { createTheme } from '@mui/material/styles';

/**
 * AURORA / GLASS theme — strictly black + blue.
 * Azure #5BC8FF is the single bright accent and the definitive replacement
 * for the retired pink (#FF6584) and orphaned purple (rgba(108,99,255)).
 *
 * The colour subset of the --au-* token set (declared on :root in globals.css)
 * is mirrored here so `sx` and `color="secondary"` consumers inherit the look
 * with zero per-component edits, and `theme.custom` exposes the full ramp.
 */

// --- Canonical token values (mirrored from globals.css :root) ---
const au = {
  bg: '#0A0A0F',
  bgDeep: '#07070B',
  bgLift: '#10131F',

  blueDark: '#1E3A5F',
  blue: '#3f6196',
  blueLight: '#6B8FC9',
  azure: '#5BC8FF',
  azureLight: '#8FDBFF',
  azureDark: '#2A9FD6',
  azureSoft: 'rgba(91, 200, 255, 0.14)',

  text: '#EDF1F8',
  textDim: '#9BA8C2',
  textFaint: 'rgba(155, 168, 194, 0.55)',

  glassFill: 'rgba(18, 20, 30, 0.55)',
  glassFillHi: 'rgba(24, 28, 42, 0.62)',
  hairline: 'rgba(107, 143, 201, 0.18)',
  hairlineLit: 'rgba(91, 200, 255, 0.45)',

  glassShadow:
    'inset 0 1px 0 rgba(237, 241, 248, 0.06), 0 8px 32px rgba(0, 0, 0, 0.45)',
  glowHover:
    'inset 0 1px 0 rgba(237, 241, 248, 0.10), 0 12px 40px rgba(0, 0, 0, 0.50), 0 0 28px rgba(91, 200, 255, 0.18)',
  glowAz: '0 0 18px rgba(91,200,255,0.35), 0 0 2px rgba(91,200,255,0.6)',

  easeGlide: 'cubic-bezier(0.22, 1, 0.36, 1)',
  easeBack: 'cubic-bezier(0.34, 1.4, 0.64, 1)',
  easeDrift: 'cubic-bezier(0.45, 0, 0.55, 1)',

  durMicro: '120ms',
  durFast: '220ms',
  durBase: '360ms',
  durSlow: '620ms',
  stagger: '90ms',
} as const;

const theme = createTheme({
  // Expose the full Aurora token set to `sx` via theme.custom.
  // (Augmentation declared at the bottom of this file.)
  custom: au,
  palette: {
    mode: 'dark',
    primary: {
      main: au.blue, // #3f6196 — workhorse
      light: au.blueLight, // #6B8FC9 — text gradients, hairlines
      dark: au.blueDark, // #1E3A5F — borders, deep wash, anchor halo
    },
    secondary: {
      // RETIRED pink #FF6584 -> azure accent. Re-tints every color="secondary"
      // chip (the "acquis" chips) azure with zero per-component edits.
      main: au.azure, // #5BC8FF
      light: au.azureLight, // #8FDBFF
      dark: au.azureDark, // #2A9FD6
    },
    background: {
      default: au.bg, // page void — body fallback behind the fixed aurora
      paper: au.glassFill, // glass surface for MUI Paper-derived components
    },
    text: {
      primary: au.text, // #EDF1F8 — near-white, cold (never pure #FFF)
      secondary: au.textDim, // #9BA8C2 — cool grey-blue
    },
    divider: au.hairline,
  },
  typography: {
    fontFamily: 'var(--font-roboto), "Roboto", sans-serif',
    // clamp() replaces the scattered @media (max-width:800px) overrides.
    h1: {
      fontWeight: 800,
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'var(--font-nunito), "Nunito", sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(2rem, 5vw, 3.25rem)',
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: 'var(--font-nunito), "Nunito", sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
      letterSpacing: '-0.02em',
    },
    h4: { fontWeight: 600, fontSize: 'clamp(1.4rem, 3vw, 2rem)' },
    h5: { fontWeight: 600, fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)' },
    h6: { fontWeight: 600, fontSize: 'clamp(1rem, 2vw, 1.25rem)' },
    body1: { fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', lineHeight: 1.7 },
    body2: { fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)', lineHeight: 1.65 },
    button: { textTransform: 'none' },
  },
  shape: {
    borderRadius: 16, // canonical glass radius
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: au.bg,
          color: au.text,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    // Cards become the canonical frosted glass surface so sections inherit it.
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // kill the default MUI dark gradient
          backgroundColor: au.glassFill,
          backdropFilter: 'blur(18px) saturate(140%)',
          WebkitBackdropFilter: 'blur(18px) saturate(140%)',
          border: `1px solid ${au.hairline}`,
          borderRadius: 16,
          boxShadow: au.glassShadow,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '0.75rem',
          transition: `transform ${au.durMicro} ${au.easeBack}, border-color ${au.durFast} ease, box-shadow ${au.durFast} ease, background-color ${au.durFast} ease`,
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
        // Tech chips: primary outlined — hairline border, transparent fill,
        // dim label. Distinct from acquis by fill weight, not hue.
        outlinedPrimary: {
          borderColor: au.hairline,
          color: au.textDim,
          backgroundColor: 'transparent',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.04)',
            borderColor: au.hairlineLit,
            boxShadow: au.glowAz,
            backgroundColor: 'transparent',
          },
        },
        // Acquis chips (was pink secondary): azure soft-fill.
        outlinedSecondary: {
          borderColor: au.hairlineLit,
          color: au.azure,
          backgroundColor: au.azureSoft,
          '&:hover': {
            transform: 'translateY(-2px) scale(1.04)',
            borderColor: au.hairlineLit,
            boxShadow: au.glowAz,
            backgroundColor: au.azureSoft,
          },
        },
      },
    },
    // Nav bar: the .glass--nav surface. Transparent by default; the component
    // agent toggles the scrolled state, but this gives a glass baseline.
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: au.text,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: au.glassFillHi,
          backdropFilter: 'blur(16px) saturate(150%)',
          WebkitBackdropFilter: 'blur(16px) saturate(150%)',
          borderLeft: `1px solid ${au.hairline}`,
          backgroundImage: 'none',
          width: 250,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          transition: `background-color ${au.durFast} ease, color ${au.durFast} ease`,
          '&:hover': {
            backgroundColor: au.azureSoft,
            color: au.azure,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: au.glassFillHi,
          backdropFilter: 'blur(8px)',
          border: `1px solid ${au.hairline}`,
          color: au.text,
          fontSize: '0.75rem',
        },
      },
    },
  },
});

export default theme;

// --- Theme augmentation: expose the Aurora token set on `theme.custom`. ---
type AuroraTokens = typeof au;

declare module '@mui/material/styles' {
  interface Theme {
    custom: AuroraTokens;
  }
  interface ThemeOptions {
    custom?: AuroraTokens;
  }
}
