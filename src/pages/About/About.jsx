import { useEffect } from 'react';
import { Box, Container, Grid, Typography, Avatar, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import PageBreadcrumb from '../../components/Common/PageBreadcrumb.jsx';
import SectionHeading from '../../components/Common/SectionHeading.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import { team, timeline, certificates } from '../../data/misc.js';

export default function About() {
  useEffect(() => {
    document.title = 'About Us | ApexCon RCC Constructions';
  }, []);

  return (
    <Box>
      <PageBreadcrumb items={[{ label: 'About' }]} />

      {/* Story / Vision / Mission */}
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Our story" title="About ApexCon RCC" subtitle="Founded in 2008, built on a simple idea: keep the crews, testing, and accountability in-house." />
          <Grid container spacing={4}>
            {[
              ['Our Story', 'Started with a single residential contract in Andheri, ApexCon RCC has grown into a full-service RCC and civil construction contractor across Mumbai and Navi Mumbai, without ever outsourcing our core structural crews.'],
              ['Our Vision', 'To be the most trusted structural contractor in the Mumbai Metropolitan Region — known for work that needs no repeat visits.'],
              ['Our Mission', 'Deliver every structure to drawing tolerance, on schedule, with quality testing the client can see and keep.'],
            ].map(([title, text]) => (
              <Grid item xs={12} md={4} key={title}>
                <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider', height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 1.5 }}>{title}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7 }}>{text}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Core values */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="What guides us" title="Core Values" align="center" />
          <Grid container spacing={3}>
            {[
              ['Accountability', 'One team, start to finish — no vanishing subcontractors.'],
              ['Transparency', 'Test reports and progress shared as they happen, not on request.'],
              ['Safety', 'Zero-fatality record maintained through mandatory site protocols.'],
              ['Precision', 'Built to drawing tolerance, verified before every handover.'],
            ].map((v, i) => (
              <Grid item xs={6} md={3} key={v[0]}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>{v[0]}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>{v[1]}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team */}
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Who's on site" title="Our Team" align="center" />
          <Grid container spacing={3}>
            {team.map((member) => (
              <Grid item xs={6} md={3} key={member.name} sx={{ textAlign: 'center' }}>
                <Avatar src={member.image} alt={member.name} sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }} />
                <Typography sx={{ fontWeight: 600, fontSize: '0.92rem' }}>{member.name}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>{member.role}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <SectionHeading eyebrow="Milestones" title="Company Timeline" align="center" />
          <Stack spacing={0}>
            {timeline.map((t, i) => (
              <Stack direction="row" spacing={3} key={t.year} sx={{ py: 2.5, borderBottom: i < timeline.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
                <Typography sx={{ fontFamily: '"Roboto Mono", monospace', color: 'primary.main', fontWeight: 700, minWidth: 60 }}>{t.year}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem' }}>{t.text}</Typography>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Certificates */}
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <SectionHeading eyebrow="Credentials" title="Certificates &amp; Achievements" align="center" />
          <Grid container spacing={3}>
            {certificates.map((c) => (
              <Grid item xs={12} sm={6} key={c}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 2.5, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                  <FaCertificate size={22} color="#F59E0B" />
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>{c}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CTA />
    </Box>
  );
}
