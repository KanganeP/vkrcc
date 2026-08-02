import { useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import PageBreadcrumb from '../../components/Common/PageBreadcrumb.jsx';
import SectionHeading from '../../components/Common/SectionHeading.jsx';
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import { services } from '../../data/services.js';

export default function Services() {
  useEffect(() => {
    document.title = 'Services | ApexCon RCC Constructions';
  }, []);

  return (
    <Box>
      <PageBreadcrumb items={[{ label: 'Services' }]} />
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="What we do"
            title="Our Services"
            subtitle="Structural and civil construction services covering the full lifecycle of a build — design, casting, finishing, and repair."
          />
          <Grid container spacing={3}>
            {services.map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={s.id} id={s.id}>
                <ServiceCard service={s} index={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <CTA />
    </Box>
  );
}
