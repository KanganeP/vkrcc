import { createTheme } from '@mui/material/styles';

// Brand palette
export const brand = {
  orange: '#F59E0B',      // Construction Orange — primary
  steelBlue: '#1E3A8A',   // Steel Blue — secondary
  concreteWhite: '#F5F5F5', // background
  charcoal: '#1F2937',    // dark
  accent: '#EF6C00',      // Accent
};

export function buildTheme(mode = 'light') {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: brand.orange,
        dark: brand.accent,
        contrastText: '#1F2937',
      },
      secondary: {
        main: brand.steelBlue,
        contrastText: '#FFFFFF',
      },
      background: {
        default: isDark ? brand.charcoal : brand.concreteWhite,
        paper: isDark ? '#26303D' : '#FFFFFF',
      },
      text: {
        primary: isDark ? '#F5F5F5' : brand.charcoal,
        secondary: isDark ? '#B7C0CC' : '#4B5563',
      },
      divider: isDark ? 'rgba(245,245,245,0.12)' : 'rgba(31,41,55,0.1)',
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      h1: { fontFamily: '"Poppins", sans-serif', fontWeight: 800 },
      h2: { fontFamily: '"Poppins", sans-serif', fontWeight: 700 },
      h3: { fontFamily: '"Poppins", sans-serif', fontWeight: 700 },
      h4: { fontFamily: '"Poppins", sans-serif', fontWeight: 700 },
      h5: { fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
      button: { fontFamily: '"Poppins", sans-serif', fontWeight: 600, textTransform: 'none' },
      overline: { fontFamily: '"Roboto Mono", monospace', letterSpacing: '0.1em' },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 8, padding: '10px 24px' },
          containedPrimary: { color: '#1F2937' },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: 14 },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: { boxShadow: 'none' },
        },
      },
    },
  });
}
