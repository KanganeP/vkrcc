import { useEffect, useMemo, useState } from 'react';
import { Box, Container, Grid, TextField, InputAdornment, Chip, Stack, Typography } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import PageBreadcrumb from '../../components/Common/PageBreadcrumb.jsx';
import SectionHeading from '../../components/Common/SectionHeading.jsx';
import BlogCard from '../../components/BlogCard/BlogCard.jsx';
import { blogs, blogCategories } from '../../data/blogs.js';

export default function Blogs() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    document.title = 'Blog | ApexCon RCC Constructions';
  }, []);

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchesCategory = category === 'All' || b.category === category;
      const matchesQuery = query.trim() === '' || b.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <Box>
      <PageBreadcrumb items={[{ label: 'Blog' }]} />
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Field notes" title="Blog" subtitle="Practical, plain-language notes on RCC construction, maintenance, and planning." />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ sm: 'center' }} sx={{ mb: 4 }}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {blogCategories.map((c) => (
                <Chip
                  key={c}
                  label={c}
                  clickable
                  onClick={() => setCategory(c)}
                  color={category === c ? 'primary' : 'default'}
                  variant={category === c ? 'filled' : 'outlined'}
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
            <TextField
              size="small"
              placeholder="Search articles"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ minWidth: { xs: '100%', sm: 260 } }}
              InputProps={{ startAdornment: <InputAdornment position="start"><FaSearch size={14} /></InputAdornment> }}
            />
          </Stack>

          {filtered.length === 0 ? (
            <Typography sx={{ color: 'text.secondary', textAlign: 'center', py: 6 }}>
              No articles match "{query}" in {category}.
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {filtered.map((b, i) => (
                <Grid item xs={12} sm={6} md={4} key={b.id}>
                  <BlogCard blog={b} index={i} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </Box>
  );
}
