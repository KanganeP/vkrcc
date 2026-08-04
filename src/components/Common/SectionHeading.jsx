import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      sx={{ textAlign: align, mb: { xs: 4, md: 6 } }}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 600, mb: 1, display: 'block' }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, color: light ? '#fff' : 'text.primary', mb: subtitle ? 1.5 : 0 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{ color: light ? 'rgba(255,255,255,0.75)' : 'text.secondary', maxWidth: 560, mx: align === 'center' ? 'auto' : 0 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
