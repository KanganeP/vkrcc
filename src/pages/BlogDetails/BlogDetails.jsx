import { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box, Container, Grid, Typography, Chip, Stack, Avatar, IconButton,
  Divider, TextField, Button, Paper,
} from '@mui/material';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaLink, FaArrowLeft, FaRegCalendarAlt } from 'react-icons/fa';
import PageBreadcrumb from '../../components/Common/PageBreadcrumb.jsx';
import BlogCard from '../../components/BlogCard/BlogCard.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { blogs } from '../../data/blogs.js';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (blog) document.title = `${blog.title} | ApexCon RCC Blog`;
  }, [blog]);

  if (!blog) return <NotFound />;

  const related = blogs.filter((b) => b.id !== blog.id && b.category === blog.category).slice(0, 3);

  const submitComment = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setComments((c) => [...c, { name, message, date: new Date().toLocaleDateString() }]);
    setName('');
    setMessage('');
  };

  return (
    <Box>
      <PageBreadcrumb items={[{ label: 'Blog', to: '/blogs' }, { label: blog.title }]} />

      {/* Banner */}
      <Box
        sx={{
          height: { xs: 240, md: 340 },
          backgroundImage: `linear-gradient(180deg, rgba(31,41,55,0.55), rgba(31,41,55,0.85)), url(${blog.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Container maxWidth="md" sx={{ pb: 4 }}>
          <Chip label={blog.category} color="secondary" sx={{ mb: 2, fontWeight: 600 }} />
          <Typography variant="h1" sx={{ color: '#fff', fontSize: { xs: '1.6rem', md: '2.3rem' } }}>{blog.title}</Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }} flexWrap="wrap" useFlexGap>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar sx={{ bgcolor: 'primary.main', color: '#1F2937', width: 32, height: 32, fontSize: '0.8rem' }}>
              {blog.author.split(' ').map((w) => w[0]).join('')}
            </Avatar>
            <Typography sx={{ fontSize: '0.88rem', fontWeight: 600 }}>{blog.author}</Typography>
          </Stack>
          <Stack direction="row" spacing={0.6} alignItems="center" sx={{ color: 'text.secondary' }}>
            <FaRegCalendarAlt size={12} />
            <Typography sx={{ fontSize: '0.82rem' }}>{blog.date}</Typography>
          </Stack>
        </Stack>

        {blog.content.map((para, i) => (
          <Typography key={i} sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 2.5, fontSize: '1rem' }}>
            {para}
          </Typography>
        ))}

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 3, mb: 4 }}>
          {blog.tags.map((t) => <Chip key={t} label={`#${t}`} size="small" variant="outlined" />)}
        </Stack>

        {/* Share buttons */}
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 5 }}>
          <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', mr: 1 }}>Share:</Typography>
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaLink].map((Icon, i) => (
            <IconButton key={i} size="small" sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
              <Icon size={13} />
            </IconButton>
          ))}
        </Stack>

        <Divider sx={{ mb: 5 }} />

        {/* Comments */}
        <Typography variant="h6" sx={{ mb: 3 }}>Comments ({comments.length})</Typography>
        <Stack spacing={2} sx={{ mb: 4 }}>
          {comments.map((c, i) => (
            <Paper key={i} elevation={0} sx={{ p: 2.5, border: '1px solid', borderColor: 'divider' }}>
              <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                <Typography sx={{ fontWeight: 600, fontSize: '0.88rem' }}>{c.name}</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{c.date}</Typography>
              </Stack>
              <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary' }}>{c.message}</Typography>
            </Paper>
          ))}
          {comments.length === 0 && (
            <Typography sx={{ color: 'text.secondary', fontSize: '0.88rem', fontStyle: 'italic' }}>
              Be the first to leave a comment.
            </Typography>
          )}
        </Stack>

        <Box component="form" onSubmit={submitComment}>
          <Stack spacing={2}>
            <TextField label="Your name" value={name} onChange={(e) => setName(e.target.value)} size="small" required />
            <TextField label="Comment" value={message} onChange={(e) => setMessage(e.target.value)} size="small" multiline rows={3} required />
            <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'flex-start' }}>
              Post Comment
            </Button>
          </Stack>
        </Box>

        <Button component={RouterLink} to="/blogs" startIcon={<FaArrowLeft size={12} />} sx={{ mt: 5 }}>
          Back to Blog
        </Button>
      </Container>

      {related.length > 0 && (
        <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <Typography variant="h5" sx={{ mb: 3 }}>Related Articles</Typography>
            <Grid container spacing={3}>
              {related.map((b, i) => (
                <Grid item xs={12} sm={6} md={4} key={b.id}>
                  <BlogCard blog={b} index={i} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
}
