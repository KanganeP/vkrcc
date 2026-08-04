import { Card, CardMedia, CardContent, Typography, Button, Box, Chip, Stack, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRegCalendarAlt } from 'react-icons/fa';

export default function BlogCard({ blog, index = 0 }) {
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
          image={blog.image}
          alt={blog.title}
          loading="lazy"
          sx={{ height: 180, transition: 'transform 0.4s ease', '&:hover': { transform: 'scale(1.08)' } }}
        />
        <Chip label={blog.category} size="small" color="secondary" sx={{ position: 'absolute', top: 12, left: 12, fontWeight: 600 }} />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
          <Avatar sx={{ width: 24, height: 24, fontSize: '0.7rem', bgcolor: 'primary.main', color: '#1F2937' }}>
            {blog.author.split(' ').map((w) => w[0]).join('')}
          </Avatar>
          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{blog.author}</Typography>
          <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: 'text.secondary' }}>
            <FaRegCalendarAlt size={10} />
            <Typography sx={{ fontSize: '0.72rem' }}>{blog.date}</Typography>
          </Stack>
        </Stack>
        <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1 }}>{blog.title}</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.86rem', mb: 2, flexGrow: 1 }}>
          {blog.shortDescription}
        </Typography>
        <Button component={RouterLink} to={`/blogs/${blog.id}`} endIcon={<FaArrowRight size={12} />} sx={{ alignSelf: 'flex-start', px: 0 }}>
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
