import { useEffect, useState } from 'react';
import {
  AppBar, Toolbar, Container, Box, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText, Divider, useTheme,
} from '@mui/material';
import { NavLink, Link as RouterLink, useLocation } from 'react-router-dom';
import { FaBars, FaSun, FaMoon, FaPhoneAlt } from 'react-icons/fa';
import { useColorMode } from '../../hooks/useDarkMode.jsx';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { mode, toggleMode } = useColorMode();
  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';
  const solid = scrolled || !isHome;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={solid ? 2 : 0}
        sx={{
          bgcolor: solid ? 'background.paper' : 'transparent',
          transition: 'background-color 0.25s ease',
          borderBottom: solid ? `1px solid ${theme.palette.divider}` : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.2, justifyContent: 'space-between' }}>
            <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
              <Box sx={{ width: 12, height: 12, bgcolor: 'primary.main', transform: 'rotate(45deg)' }} />
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800, fontSize: '1.15rem', color: solid ? 'text.primary' : '#fff' }}>
                APEXCON <Box component="span" sx={{ color: 'primary.main' }}>RCC</Box>
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {LINKS.map((link) => (
                <Button
                  key={link.to}
                  component={NavLink}
                  to={link.to}
                  end={link.to === '/'}
                  sx={{
                    color: solid ? 'text.primary' : '#fff',
                    fontSize: '0.85rem',
                    '&.active': { color: 'primary.main' },
                    '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <IconButton onClick={toggleMode} sx={{ ml: 1, color: solid ? 'text.primary' : '#fff' }} aria-label="Toggle dark mode">
                {mode === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
              </IconButton>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="primary"
                startIcon={<FaPhoneAlt size={12} />}
                sx={{ ml: 1 }}
              >
                Get a Quote
              </Button>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton onClick={toggleMode} sx={{ color: solid ? 'text.primary' : '#fff' }} aria-label="Toggle dark mode">
                {mode === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
              </IconButton>
              <IconButton onClick={() => setOpen(true)} sx={{ color: solid ? 'text.primary' : '#fff' }} aria-label="Open menu">
                <FaBars size={18} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, pt: 2 }} role="presentation">
          <Typography sx={{ px: 3, py: 1, fontFamily: '"Poppins", sans-serif', fontWeight: 800 }}>
            APEXCON <Box component="span" sx={{ color: 'primary.main' }}>RCC</Box>
          </Typography>
          <Divider sx={{ my: 1 }} />
          <List>
            {LINKS.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton component={NavLink} to={link.to} onClick={() => setOpen(false)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ px: 3, mt: 2 }}>
            <Button component={RouterLink} to="/contact" onClick={() => setOpen(false)} variant="contained" color="primary" fullWidth>
              Get a Quote
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
