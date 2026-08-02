import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { buildTheme } from './theme/theme.js';
import { ColorModeProvider, useColorMode } from './hooks/useDarkMode.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/Common/ScrollToTop.jsx';
import BackToTop from './components/Common/BackToTop.jsx';
import WhatsAppButton from './components/Common/WhatsAppButton.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

function ThemedApp() {
  const { mode } = useColorMode();
  const theme = buildTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ColorModeProvider>
      <ThemedApp />
    </ColorModeProvider>
  );
}
