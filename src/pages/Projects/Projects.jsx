import { useEffect, useMemo, useState } from 'react';
import { Box, Container, Grid, TextField, InputAdornment, Chip, Stack, Typography } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import PageBreadcrumb from '../../components/Common/PageBreadcrumb.jsx';
import SectionHeading from '../../components/Common/SectionHeading.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import { projects, projectCategories } from '../../data/projects.js';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    document.title = 'Projects | ApexCon RCC Constructions';
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesQuery =
        query.trim() === '' ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <Box>
      <PageBreadcrumb items={[{ label: 'Projects' }]} />
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Our work" title="Projects" subtitle="Residential, commercial, industrial, and infrastructure work across Mumbai and Navi Mumbai." />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ sm: 'center' }} sx={{ mb: 4 }}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {projectCategories.map((c) => (
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
              placeholder="Search by name or location"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ minWidth: { xs: '100%', sm: 260 } }}
              InputProps={{ startAdornment: <InputAdornment position="start"><FaSearch size={14} /></InputAdornment> }}
            />
          </Stack>

          {filtered.length === 0 ? (
            <Typography sx={{ color: 'text.secondary', textAlign: 'center', py: 6 }}>
              No projects match "{query}" in {category}. Try a different search.
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {filtered.map((p, i) => (
                <Grid item xs={12} sm={6} md={4} key={p.id}>
                  <ProjectCard project={p} index={i} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </Box>
  );
}
