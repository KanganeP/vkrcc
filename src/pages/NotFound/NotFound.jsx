import { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | ApexCon RCC';
  }, []);

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 12, md: 18 }, textAlign: 'center' }}>
      <Typography sx={{ fontFamily: '"Roboto Mono", monospace', color: 'primary.main', fontSize: '1rem', mb: 1 }}>
        ERROR 404
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 4 }}>
        This page doesn't exist, or it may have been moved.
      </Typography>
      <Button component={RouterLink} to="/" variant="contained" color="primary" startIcon={<FaHome />}>
        Back to Home
      </Button>
    </Container>
  );
}
