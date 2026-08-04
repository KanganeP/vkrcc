import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '78vh', md: '92vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(180deg, rgba(31,41,55,0.75), rgba(31,41,55,0.9)), url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600 }}>
            RCC &amp; Civil Construction Contractors — Mumbai
          </Typography>
          <Typography
            variant="h1"
            sx={{ color: '#fff', fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem' }, lineHeight: 1.08, my: 2, maxWidth: 780 }}
          >
            Structures built to carry the load, for decades.
          </Typography>
          <Typography sx={{ color: 'rgba(245,245,245,0.85)', fontSize: '1.05rem', maxWidth: 560, mb: 4, lineHeight: 1.7 }}>
            From foundation to finish, we deliver residential, commercial, and
            industrial RCC construction across Mumbai — engineered, tested,
            and handed over on schedule.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={RouterLink} to="/contact" variant="contained" color="primary" size="large">
              Get a Free Estimate
            </Button>
            <Button
              component={RouterLink}
              to="/projects"
              variant="outlined"
              size="large"
              sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)', '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}
            >
              View Our Projects
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
