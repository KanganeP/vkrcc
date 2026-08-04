import { useEffect } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineDot,
  TimelineConnector, TimelineContent, TimelineOppositeContent,
} from '@mui/lab';
import { motion } from 'framer-motion';
import PageBreadcrumb from '../../components/Common/PageBreadcrumb.jsx';
import SectionHeading from '../../components/Common/SectionHeading.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import { processSteps } from '../../data/misc.js';

export default function Process() {
  useEffect(() => {
    document.title = 'Our Process | ApexCon RCC Constructions';
  }, []);

  return (
    <Box>
      <PageBreadcrumb items={[{ label: 'Process' }]} />
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="md">
          <SectionHeading
            eyebrow="How we work"
            title="Our Construction Process"
            subtitle="Nine stages, from the first conversation to the day we hand you the keys."
            align="center"
          />

          <Timeline position="alternate">
            {processSteps.map((step, i) => (
              <TimelineItem key={step.title}>
                <TimelineOppositeContent sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography sx={{ fontFamily: '"Roboto Mono", monospace', color: 'text.secondary', fontSize: '0.85rem', pt: 1 }}>
                    STEP {String(i + 1).padStart(2, '0')}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" sx={{ boxShadow: 'none' }} />
                  {i < processSteps.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Paper elevation={2} sx={{ p: 2.5 }}>
                      <Typography
                        sx={{ display: { xs: 'block', sm: 'none' }, fontFamily: '"Roboto Mono", monospace', color: 'primary.main', fontSize: '0.75rem', mb: 0.5 }}
                      >
                        STEP {String(i + 1).padStart(2, '0')}
                      </Typography>
                      <Typography variant="h6" sx={{ fontSize: '1.02rem', mb: 0.5 }}>{step.title}</Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.88rem' }}>{step.text}</Typography>
                    </Paper>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>
      <CTA />
    </Box>
  );
}
