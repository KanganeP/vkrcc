import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

export default function CTA() {
  return (
    <Box sx={{ bgcolor: 'secondary.main', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={3}
        >
          <Box>
            <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.6rem', md: '2.1rem' }, mb: 1 }}>
              Ready to start your project?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
              Get a free site estimate — most quotes are ready within 48 hours.
            </Typography>
          </Box>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<FaPhoneAlt size={14} />}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Get a Free Quote
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
