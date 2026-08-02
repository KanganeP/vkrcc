import { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box, Container, Grid, Typography, Chip, Stack, Paper, Divider,
  Table, TableBody, TableRow, TableCell, Avatar, Button, ToggleButtonGroup, ToggleButton,
} from '@mui/material';
import { FaQuoteLeft, FaArrowLeft } from 'react-icons/fa';
import PageBreadcrumb from '../../components/Common/PageBreadcrumb.jsx';
import Lightbox from '../../components/Gallery/Lightbox.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { projects } from '../../data/projects.js';

const INFO_ROWS = (p) => [
  ['Owner', p.ownerName],
  ['RCC Contractor', p.contractor],
  ['Architect', p.architect],
  ['Structural Consultant', p.structuralConsultant],
  ['Site Engineer', p.siteEngineer],
  ['Project Type', p.projectType],
  ['Construction Area', p.area],
  ['Floors', p.floors],
  ['Total Cost', p.totalCost],
  ['Location', p.location],
  ['Start Date', p.startDate],
  ['Completion Date', p.completionDate],
  ['Status', p.status],
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [compare, setCompare] = useState('after');

  useEffect(() => {
    if (project) document.title = `${project.name} | ApexCon RCC Projects`;
  }, [project]);

  if (!project) return <NotFound />;

  const related = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);

  return (
    <Box>
      <PageBreadcrumb items={[{ label: 'Projects', to: '/projects' }, { label: project.name }]} />

      {/* Hero banner */}
      <Box
        sx={{
          height: { xs: 260, md: 380 },
          backgroundImage: `linear-gradient(180deg, rgba(31,41,55,0.5), rgba(31,41,55,0.85)), url(${project.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Container maxWidth="lg" sx={{ pb: 4 }}>
          <Chip label={project.category} color="primary" sx={{ mb: 2, fontWeight: 600 }} />
          <Typography variant="h1" sx={{ color: '#fff', fontSize: { xs: '1.8rem', md: '2.6rem' } }}>
            {project.name}
          </Typography>
          <Typography sx={{ color: 'rgba(245,245,245,0.85)', mt: 0.5 }}>{project.location}</Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 2 }}>Project Gallery</Typography>
            <Lightbox images={project.gallery} />

            {/* Before/After + Drone */}
            <Box sx={{ mt: 5 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Before / After &amp; Drone View</Typography>
              <ToggleButtonGroup
                value={compare}
                exclusive
                onChange={(e, val) => val && setCompare(val)}
                size="small"
                sx={{ mb: 2 }}
              >
                <ToggleButton value="before">Before</ToggleButton>
                <ToggleButton value="after">After</ToggleButton>
                <ToggleButton value="drone">Drone</ToggleButton>
              </ToggleButtonGroup>
              <Box
                component="img"
                src={compare === 'before' ? project.beforeImage : compare === 'after' ? project.afterImage : project.droneImage}
                alt={`${project.name} ${compare} view`}
                loading="lazy"
                sx={{ width: '100%', maxHeight: 420, objectFit: 'cover', borderRadius: 2 }}
              />
            </Box>

            {/* Description */}
            <Box sx={{ mt: 5 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Project Description</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>{project.description}</Typography>
              <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 1, mt: 3 }}>Construction Methodology</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{project.methodology}</Typography>
            </Box>

            {/* Special features */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 1.5 }}>Special Features</Typography>
              <Stack spacing={1}>
                {project.specialFeatures.map((f) => (
                  <Stack direction="row" spacing={1.5} key={f} alignItems="flex-start">
                    <Box sx={{ width: 6, height: 6, bgcolor: 'primary.main', borderRadius: '50%', mt: 1, flexShrink: 0 }} />
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem' }}>{f}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* Challenges / Solutions */}
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider', height: '100%' }}>
                  <Typography variant="h6" sx={{ fontSize: '0.98rem', mb: 1 }}>Challenge</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>{project.challenges}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider', height: '100%' }}>
                  <Typography variant="h6" sx={{ fontSize: '0.98rem', mb: 1 }}>Solution</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>{project.solutions}</Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Materials & Amenities */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 1.5 }}>Materials Used</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                {project.materials.map((m) => <Chip key={m} label={m} variant="outlined" />)}
              </Stack>
              {project.amenities.length > 0 && (
                <>
                  <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 1.5 }}>Amenities</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.amenities.map((a) => <Chip key={a} label={a} color="secondary" variant="outlined" />)}
                  </Stack>
                </>
              )}
            </Box>

            {/* Client review */}
            <Paper elevation={2} sx={{ p: 4, mt: 5 }}>
              <FaQuoteLeft size={22} color="#F59E0B" style={{ marginBottom: 12 }} />
              <Typography sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 2 }}>"{project.clientReview.quote}"</Typography>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar sx={{ bgcolor: 'secondary.main' }}>{project.clientReview.name.split(' ').map((w) => w[0]).join('')}</Avatar>
                <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{project.clientReview.name}</Typography>
              </Stack>
            </Paper>

            {/* Map */}
            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 1.5 }}>Location</Typography>
              <Box
                component="iframe"
                title="Project location map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&output=embed`}
                loading="lazy"
                sx={{ width: '100%', height: 320, border: 0, borderRadius: 2 }}
              />
            </Box>
          </Grid>

          {/* Sidebar info table */}
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, position: { md: 'sticky' }, top: { md: 100 } }}>
              <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 2 }}>Project Information</Typography>
              <Table size="small">
                <TableBody>
                  {INFO_ROWS(project).map(([label, value]) => (
                    <TableRow key={label}>
                      <TableCell sx={{ border: 0, pl: 0, color: 'text.secondary', fontSize: '0.82rem', width: '45%' }}>{label}</TableCell>
                      <TableCell sx={{ border: 0, pr: 0, fontSize: '0.85rem', fontWeight: 600 }}>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Divider sx={{ my: 2 }} />
              <Button component={RouterLink} to="/contact" variant="contained" color="primary" fullWidth>
                Start a Similar Project
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Related projects */}
        {related.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Related Projects</Typography>
            <Grid container spacing={3}>
              {related.map((p, i) => (
                <Grid item xs={12} sm={6} md={4} key={p.id}>
                  <ProjectCard project={p} index={i} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        <Button component={RouterLink} to="/projects" startIcon={<FaArrowLeft size={12} />} sx={{ mt: 5 }}>
          Back to All Projects
        </Button>
      </Container>
    </Box>
  );
}
