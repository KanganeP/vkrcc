import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import * as Fa from 'react-icons/fa';
import * as Gi from 'react-icons/gi';

const iconSets = { ...Fa, ...Gi };

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconSets[service.icon] || Fa.FaHammer;

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
      elevation={2}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={service.image}
          alt={service.title}
          loading="lazy"
          sx={{ height: 190, transition: 'transform 0.4s ease', '&:hover': { transform: 'scale(1.08)' } }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            width: 44, height: 44, borderRadius: '50%', bgcolor: 'rgba(245,158,11,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: 'primary.main',
          }}
        >
          <Icon size={20} />
        </Box>
        <Typography variant="h6" sx={{ mb: 1, fontSize: '1.05rem' }}>{service.title}</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.88rem', mb: 2, flexGrow: 1 }}>
          {service.short}
        </Typography>
        <Button
          component={RouterLink}
          to={`/services#${service.id}`}
          endIcon={<FaArrowRight size={12} />}
          sx={{ alignSelf: 'flex-start', px: 0, '&:hover': { bgcolor: 'transparent' } }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
