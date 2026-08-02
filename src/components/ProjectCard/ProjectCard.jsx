import { Card, CardMedia, CardContent, Typography, Button, Box, Chip, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRulerCombined, FaArrowRight } from 'react-icons/fa';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
      elevation={2}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={project.heroImage}
          alt={project.name}
          loading="lazy"
          sx={{ height: 200, transition: 'transform 0.4s ease', '&:hover': { transform: 'scale(1.08)' } }}
        />
        <Chip
          label={project.category}
          size="small"
          color="primary"
          sx={{ position: 'absolute', top: 12, left: 12, fontWeight: 600 }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontSize: '1.02rem', mb: 1 }}>{project.name}</Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 1.5, flexWrap: 'wrap' }}>
          <Stack direction="row" spacing={0.6} alignItems="center">
            <FaMapMarkerAlt size={12} color="#F59E0B" />
            <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>{project.location}</Typography>
          </Stack>
          <Stack direction="row" spacing={0.6} alignItems="center">
            <FaRulerCombined size={12} color="#F59E0B" />
            <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>{project.area}</Typography>
          </Stack>
        </Stack>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.86rem', mb: 2, flexGrow: 1 }}>
          {project.shortDescription}
        </Typography>
        <Button
          component={RouterLink}
          to={`/projects/${project.id}`}
          endIcon={<FaArrowRight size={12} />}
          variant="outlined"
          size="small"
          sx={{ alignSelf: 'flex-start' }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
